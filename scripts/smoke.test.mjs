import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createRequire } from "node:module";
import { createServer } from "node:net";
import { test } from "node:test";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const projectRoot = fileURLToPath(new URL("../", import.meta.url));

async function availablePort() {
  const reservation = createServer();
  reservation.listen(0, "127.0.0.1");
  await once(reservation, "listening");
  const { port } = reservation.address();
  await new Promise((resolve, reject) => {
    reservation.close((error) => (error ? reject(error) : resolve()));
  });
  return port;
}

async function stopServer(server) {
  if (!server.pid || server.exitCode !== null || server.signalCode !== null)
    return;
  const closed = once(server, "close").then(() => true);
  server.kill("SIGTERM");
  if (await Promise.race([closed, delay(5_000, false, { ref: false })])) {
    return;
  }
  server.kill("SIGKILL");
  assert.ok(
    await Promise.race([closed, delay(5_000, false, { ref: false })]),
    "Production server did not stop after termination",
  );
}

test(
  "built Web foundation serves without Supabase credentials",
  {
    timeout: 60_000,
  },
  async () => {
    const port = await availablePort();
    const origin = `http://127.0.0.1:${port}`;
    const environment = { ...process.env };
    for (const key of Object.keys(environment)) {
      if (key.toUpperCase().includes("SUPABASE")) environment[key] = "";
    }
    Object.assign(environment, {
      NODE_ENV: "production",
      NEXT_TELEMETRY_DISABLED: "1",
      NEXT_PUBLIC_SUPABASE_URL: "",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "",
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "",
      SUPABASE_SERVICE_ROLE_KEY: "",
      SUPABASE_SECRET_KEY: "",
    });
    const server = spawn(
      process.execPath,
      [
        require.resolve("next/dist/bin/next"),
        "start",
        "--hostname",
        "127.0.0.1",
        "--port",
        String(port),
      ],
      {
        cwd: projectRoot,
        env: environment,
        windowsHide: true,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    let output = "";
    let startupError;
    server.on("error", (error) => {
      startupError = error;
    });
    const capture = (chunk) => {
      output = (output + chunk.toString()).slice(-4_096);
    };
    server.stdout.on("data", capture);
    server.stderr.on("data", capture);

    try {
      let home;
      const deadline = Date.now() + 30_000;
      while (Date.now() < deadline) {
        if (startupError) throw startupError;
        if (server.exitCode !== null || server.signalCode !== null) {
          throw new Error(
            `Production server exited before readiness (code ${server.exitCode}, signal ${server.signalCode}). ${output}`,
          );
        }
        try {
          home = await fetch(origin, { signal: AbortSignal.timeout(1_000) });
          break;
        } catch {
          await delay(100);
        }
      }
      assert.ok(
        home,
        `Production server did not become ready within 30 seconds. ${output}`,
      );
      assert.equal(home.status, 200, "Home page responds successfully");
      const html = await home.text();
      assert.match(
        html,
        /<html\b[^>]*\blang="en"/,
        "Document declares English",
      );
      assert.match(
        html,
        /<title>Yunis[^<]*<\/title>/,
        "Title identifies Yunis",
      );
      assert.match(
        html,
        /<meta\b[^>]*name="description"[^>]*content="[^"]+"/,
        "Description metadata is present",
      );
      assert.match(html, /<main\b[\s>]/, "Page has a main landmark");
      assert.match(
        html,
        /Stay connected to what matters\./,
        "Official tagline is rendered",
      );
      const stylesheet = [...html.matchAll(/<link\b[^>]*>/g)]
        .map(([tag]) => tag)
        .find((tag) => /rel="stylesheet"/.test(tag));
      assert.ok(stylesheet, "Page links a compiled stylesheet");
      const cssPath = stylesheet.match(/href="([^"]+)"/)?.[1];
      assert.ok(
        cssPath?.startsWith("/_next/"),
        "Stylesheet is a local Next.js asset",
      );
      const css = await fetch(new URL(cssPath, origin), {
        signal: AbortSignal.timeout(5_000),
      });
      assert.equal(css.status, 200, "Compiled stylesheet serves successfully");
      assert.match(css.headers.get("content-type") ?? "", /text\/css/);
      assert.ok(
        (await css.text()).trim().length > 0,
        "Stylesheet contains CSS",
      );
      const missing = await fetch(`${origin}/__yunis_smoke_missing__`, {
        signal: AbortSignal.timeout(5_000),
      });
      assert.equal(missing.status, 404, "Unknown routes return 404");
      await missing.text();
    } finally {
      await stopServer(server);
    }
  },
);
