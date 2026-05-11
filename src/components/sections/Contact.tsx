"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { company, serviceOptions } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  gdpr: boolean;
};

const initial: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: serviceOptions[0],
  message: "",
  gdpr: false,
};

export function Contact() {
  const [data, setData] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.gdpr) return;
    setStatus("submitting");
    // Placeholder submission — wire to /api/contact or a third-party service.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setData(initial);
  };

  return (
    <section id="contact" className="section relative">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-5"
        >
          <span className="eyebrow">Contact</span>
          <h2 className="h-display mt-3 text-4xl text-white sm:text-5xl">
            Spune-ne despre <span className="text-gradient">proiectul tău</span>.
          </h2>
          <p className="mt-5 max-w-md text-base text-white/65">
            Răspundem solicitărilor punctual și transparent. Pe baza informațiilor
            transmise putem propune o discuție inițială și o analiză preliminară.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Email
              </dt>
              <dd className="mt-1 text-white">{company.email}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Telefon
              </dt>
              <dd className="mt-1 text-white">{company.phone}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Adresă
              </dt>
              <dd className="mt-1 text-white/75">{company.address}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Identificare fiscală
              </dt>
              <dd className="mt-1 text-white/75">{company.vatId}</dd>
            </div>
          </dl>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="glass relative grid gap-5 rounded-3xl p-7 sm:p-10 lg:col-span-7"
          noValidate
        >
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Nume și prenume"
              required
              value={data.fullName}
              onChange={(v) => update("fullName", v)}
            />
            <Field
              label="Companie"
              value={data.company}
              onChange={(v) => update("company", v)}
            />
            <Field
              label="Email"
              type="email"
              required
              value={data.email}
              onChange={(v) => update("email", v)}
            />
            <Field
              label="Telefon"
              type="tel"
              value={data.phone}
              onChange={(v) => update("phone", v)}
            />
          </div>

          <SelectField
            label="Serviciu de interes"
            value={data.service}
            options={serviceOptions}
            onChange={(v) => update("service", v)}
          />

          <TextareaField
            label="Mesaj"
            required
            value={data.message}
            onChange={(v) => update("message", v)}
          />

          <label className="flex items-start gap-3 text-[13px] text-white/65">
            <span
              className={cn(
                "relative mt-0.5 inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border transition",
                data.gdpr
                  ? "border-accent-400 bg-accent-500/20"
                  : "border-white/15 bg-white/[0.04]",
              )}
            >
              <input
                type="checkbox"
                className="absolute inset-0 cursor-pointer opacity-0"
                checked={data.gdpr}
                onChange={(e) => update("gdpr", e.target.checked)}
                required
              />
              {data.gdpr && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent-100"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
            </span>
            <span>
              Sunt de acord ca datele mele să fie prelucrate pentru a primi un
              răspuns la solicitarea transmisă.
            </span>
          </label>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              {status === "success"
                ? "Mesaj trimis · vă mulțumim"
                : status === "submitting"
                  ? "Se trimite…"
                  : "Trimitere securizată"}
            </span>
            <button
              type="submit"
              disabled={!data.gdpr || status === "submitting"}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              Trimite solicitarea
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="group relative block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/50">
        {label}
        {required && <span className="ml-1 text-accent-400">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-accent-400/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent-400/20"
      />
    </label>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/50">
        {label}
        {required && <span className="ml-1 text-accent-400">*</span>}
      </span>
      <textarea
        required={required}
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-accent-400/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent-400/20"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/50">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 pr-10 text-sm text-white outline-none transition focus:border-accent-400/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent-400/20"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-ink-900 text-white">
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>
    </label>
  );
}
