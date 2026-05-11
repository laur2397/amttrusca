import type { ReactNode } from "react";

export function LegalLayout({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="relative pb-24 pt-40">
      <div className="aurora opacity-40" />
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <header className="lg:col-span-5">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-display mt-3 text-4xl text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base text-white/60">{subtitle}</p>
          <a
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-accent-200 transition hover:text-white"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="m11 19-7-7 7-7" />
            </svg>
            Înapoi la pagina principală
          </a>
        </header>

        <article className="space-y-5 text-sm leading-relaxed text-white/70 lg:col-span-7 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-lg [&_h2]:text-white">
          {children}
        </article>
      </div>
    </section>
  );
}
