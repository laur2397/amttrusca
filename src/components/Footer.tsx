"use client";

import { company, navigation, services } from "@/lib/content";
import { withBase } from "@/lib/paths";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#acasa" className="inline-flex items-center gap-3" aria-label="AMT">
              <span className="relative inline-flex h-9 w-9 items-center justify-center">
                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-500 to-accent-800" />
                <span className="absolute inset-[2px] rounded-[7px] bg-ink-950" />
                <span className="relative font-display text-[15px] text-gradient">A</span>
              </span>
              <span className="font-display text-xl tracking-[0.18em] text-white">
                AMT
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm text-white/55">
              {company.name} oferă consultanță pentru fonduri europene și structurale,
              servicii financiar-contabile și consultanță fiscală pentru companii,
              antreprenori și organizații aflate în creștere.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                  Email
                </div>
                <div className="mt-1 text-white/85">{company.email}</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                  Telefon
                </div>
                <div className="mt-1 text-white/85">{company.phone}</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                  Adresă
                </div>
                <div className="mt-1 text-white/75">{company.address}</div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                  Fiscal
                </div>
                <div className="mt-1 text-white/75">{company.vatId}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              Servicii
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-white/70 transition hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              Navigare
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {navigation.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              Politici
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={withBase("/politica-confidentialitate")}
                  className="text-white/70 transition hover:text-white"
                >
                  Politica de confidențialitate
                </a>
              </li>
              <li>
                <a
                  href={withBase("/termeni-conditii")}
                  className="text-white/70 transition hover:text-white"
                >
                  Termeni și condiții
                </a>
              </li>
              <li>
                <a
                  href={withBase("/gdpr")}
                  className="text-white/70 transition hover:text-white"
                >
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.06] pt-8 text-[12px] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. Toate drepturile rezervate.
          </p>
          <p className="text-white/40">
            Site corporate — datele de contact și valorile sunt placeholder-uri
            editabile.
          </p>
        </div>
      </div>
    </footer>
  );
}
