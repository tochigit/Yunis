import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-6 sm:px-10">
      <a
        href="#main-content"
        className="absolute top-4 left-4 z-10 -translate-y-24 rounded-lg bg-primary px-5 py-3 text-primary-foreground focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Skip to content
      </a>

      <header className="flex items-center justify-between border-b border-border py-7 sm:py-9">
        <span className="text-2xl font-semibold tracking-tight">Yunis</span>
        <span className="hidden text-sm text-muted-foreground sm:block">
          A little more intention.
        </span>
      </header>

      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <section
          aria-labelledby="welcome-heading"
          className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center sm:py-28"
        >
          <p className="mb-6 text-sm font-medium tracking-[0.14em] text-muted-foreground uppercase">
            For the people who matter
          </p>
          <h1
            id="welcome-heading"
            className="font-serif text-5xl leading-[1.1] tracking-tight text-balance sm:text-7xl"
          >
            Stay connected to what matters.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance sm:text-xl">
            Relationships need connection. Connection needs intention.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 cursor-pointer rounded-full px-7"
          >
            <a href="#intention">
              Our intention
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-4"
              >
                <path
                  d="M12 5v14m-6-6 6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Button>
        </section>

        <section
          id="intention"
          aria-labelledby="intention-heading"
          className="scroll-mt-8 border-t border-border py-12 sm:py-16"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium tracking-[0.14em] text-muted-foreground uppercase">
              What brings us here
            </p>
            <h2
              id="intention-heading"
              className="font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl"
            >
              A shared space for meaningful relationships.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Friendships, family bonds, and the everyday connections we care
              about deserve time and attention. Yunis begins with a simple
              belief: small, intentional moments help us stay close.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-10">
            <div>
              <h3 className="mb-3 font-medium">Make time.</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                An honest conversation. A thoughtful check-in. A moment to be
                present with one another.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-medium">Share moments.</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                The ordinary days and meaningful milestones that become part of
                your shared story.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-medium">Keep closeness.</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Care that continues across busy seasons, changing routines, and
                the distance between you.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-7 text-sm text-muted-foreground">
        Built around the relationships that matter.
      </footer>
    </div>
  );
}
