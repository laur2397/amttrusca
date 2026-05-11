// =============================================================================
// AMT — EDITABLE CONTENT
// -----------------------------------------------------------------------------
// All text, links and placeholder values used across the site live here so
// that copy can be updated without touching component code. Numerical values
// flagged as PLACEHOLDER must be replaced with real, validated figures before
// publishing.
// =============================================================================

export const company = {
  name: "AMT",
  legalName: "AMT Consulting",
  tagline: "Consultanță strategică pentru finanțare, fiscalitate și performanță financiară",
  description:
    "AMT oferă consultanță pentru fonduri europene și structurale, servicii financiar-contabile și consultanță fiscală pentru companii și antreprenori.",
  // PLACEHOLDER — replace with real contact details before launch.
  email: "office@amt.ro",
  phone: "+40 XXX XXX XXX",
  address: "[de completat]",
  vatId: "CUI: [de completat]",
  registryId: "Reg. Com.: [de completat]",
};

export const navigation = [
  { href: "#acasa", label: "Acasă" },
  { href: "#despre", label: "Despre noi" },
  { href: "#servicii", label: "Servicii" },
  { href: "#fonduri-europene", label: "Fonduri Europene" },
  { href: "#financiar-contabil", label: "Financiar-Contabil" },
  { href: "#fiscal", label: "Fiscal" },
  { href: "#contact", label: "Contact" },
];

// PLACEHOLDER metrics — replace with real, verifiable values.
export const metrics = [
  { value: "XX+", label: "proiecte analizate", placeholder: true },
  { value: "XX", label: "ani experiență", placeholder: true },
  { value: "XX", label: "domenii de finanțare", placeholder: true },
  { value: "100%", label: "conformitate fiscală urmărită", placeholder: false },
];

export const trustPillars = [
  {
    title: "Consultanță pentru finanțări nerambursabile",
    description:
      "Identificarea oportunităților potrivite și pregătirea aplicațiilor cu rigoare instituțională.",
  },
  {
    title: "Suport financiar-contabil integrat",
    description:
      "Evidență contabilă, raportare și analiză financiară pentru decizii corecte de business.",
  },
  {
    title: "Optimizare fiscală conformă",
    description:
      "Planificare fiscală legală, prevenirea riscurilor și interpretarea aplicată a legislației.",
  },
  {
    title: "Planificare și implementare proiecte",
    description:
      "De la analiza inițială la raportarea finală, cu disciplină de proiect și transparență.",
  },
];

export const services = [
  {
    id: "fonduri-europene",
    eyebrow: "01 — Finanțări nerambursabile",
    title: "Fonduri Europene și Structurale",
    description:
      "Identificăm liniile de finanțare potrivite, pregătim documentația, structurăm bugetele și oferim suport pe tot parcursul procesului de accesare și implementare.",
    bullets: [
      "Identificare oportunități de finanțare",
      "Eligibilitate solicitant și proiect",
      "Scriere cereri de finanțare",
      "Bugete și planuri de afaceri",
      "Suport pentru implementare",
      "Raportare și monitorizare",
    ],
    accent: "#3d99ff",
  },
  {
    id: "financiar-contabil",
    eyebrow: "02 — Performanță financiară",
    title: "Servicii Financiar-Contabile",
    description:
      "Oferim servicii financiar-contabile orientate spre claritate, control și conformitate, pentru antreprenori, IMM-uri și organizații în dezvoltare.",
    bullets: [
      "Evidență contabilă",
      "Raportări financiare",
      "Salarizare și administrare documente",
      "Analiză financiară",
      "Suport pentru decizii de business",
      "Organizare și control financiar",
    ],
    accent: "#d4af55",
  },
  {
    id: "fiscal",
    eyebrow: "03 — Conformitate și strategie",
    title: "Consultanță Fiscală",
    description:
      "Sprijinim companiile în interpretarea și aplicarea corectă a legislației fiscale, reducând riscurile și îmbunătățind planificarea fiscală.",
    bullets: [
      "Analiză fiscală",
      "Optimizare fiscală legală",
      "Conformitate fiscală",
      "Consultanță TVA",
      "Asistență în relația cu autoritățile",
      "Managementul riscurilor fiscale",
    ],
    accent: "#9fcfff",
  },
];

export const process = [
  {
    step: "01",
    title: "Analiză inițială",
    description:
      "Conturăm contextul afacerii, obiectivele și constrângerile relevante pentru următorii pași.",
  },
  {
    step: "02",
    title: "Diagnostic financiar și fiscal",
    description:
      "Evaluăm starea financiară, expunerile fiscale și capacitatea operațională a organizației.",
  },
  {
    step: "03",
    title: "Identificare oportunități",
    description:
      "Mapăm liniile de finanțare, pârghiile fiscale și ariile de optimizare disponibile.",
  },
  {
    step: "04",
    title: "Strategie și documentație",
    description:
      "Construim planul de acțiune, bugetele și documentația tehnică, financiară și juridică.",
  },
  {
    step: "05",
    title: "Implementare și monitorizare",
    description:
      "Coordonăm execuția, urmărim indicatorii și menținem conformitatea pe tot parcursul derulării.",
  },
  {
    step: "06",
    title: "Raportare și optimizare",
    description:
      "Livrăm raportările cerute și calibrăm strategia pe baza rezultatelor obținute.",
  },
];

export const euFundsAreas = [
  {
    title: "IMM-uri și antreprenori",
    description:
      "Suport pentru companii mici și mijlocii care urmăresc capitalizare, scalare și diversificare.",
  },
  {
    title: "Digitalizare",
    description:
      "Investiții în transformare digitală, infrastructură IT și soluții software dedicate.",
  },
  {
    title: "Energie și eficiență energetică",
    description:
      "Proiecte de producție regenerabilă, modernizare energetică și reducere a amprentei de carbon.",
  },
  {
    title: "Investiții productive",
    description:
      "Achiziții de echipamente, linii tehnologice și retehnologizarea capacităților existente.",
  },
  {
    title: "Dezvoltare regională",
    description:
      "Inițiative care contribuie la creșterea echilibrată la nivel regional și local.",
  },
  {
    title: "Inovare și competitivitate",
    description:
      "Cercetare aplicată, parteneriate de inovare și soluții cu valoare adăugată ridicată.",
  },
  {
    title: "Agricultură și dezvoltare rurală",
    description:
      "Proiecte pentru ferme, procesare locală și diversificarea activităților rurale.",
  },
];

export const financialPillars = [
  {
    title: "Claritate financiară",
    description:
      "Situații financiare structurate, lizibile, care fundamentează deciziile zilnice și strategice.",
  },
  {
    title: "Predictibilitate",
    description:
      "Cash-flow, bugete și previziuni care reduc incertitudinea operațională.",
  },
  {
    title: "Raportare",
    description:
      "Rapoarte periodice și ad-hoc, calibrate pe nevoile managementului și ale acționariatului.",
  },
  {
    title: "Control intern",
    description:
      "Proceduri și verificări care protejează activele și asigură integritatea datelor.",
  },
  {
    title: "Suport managerial",
    description:
      "Analize de profitabilitate, costuri și performanță, prezentate în limbaj de business.",
  },
];

export const taxPillars = [
  {
    title: "Interpretare fiscală",
    description:
      "Aplicarea contextualizată a legislației, cu atenție la practica autorităților fiscale.",
  },
  {
    title: "Prevenirea riscurilor",
    description:
      "Identificarea expunerilor fiscale înainte ca acestea să devină probleme costisitoare.",
  },
  {
    title: "Structurare fiscală legală",
    description:
      "Soluții conforme care valorifică oportunitățile fiscale prevăzute de lege.",
  },
  {
    title: "Relația cu autoritățile",
    description:
      "Asistență în controale, clarificări, adrese și proceduri administrative.",
  },
  {
    title: "Suport decizional",
    description:
      "Evaluarea impactului fiscal al deciziilor majore: investiții, restructurări, expansiune.",
  },
];

// PLACEHOLDER case studies — replace narrative and metrics with verified data.
export const caseStudies = [
  {
    title: "Proiect de finanțare pentru investiții productive",
    industry: "Industrie / Producție",
    challenge:
      "Companie aflată în expansiune, cu nevoie de retehnologizare și capacitate suplimentară.",
    solution:
      "Analiză eligibilitate, structurare buget, dosar de finanțare și suport pe implementare.",
    result: "Rezultat: [valoare de completat]",
  },
  {
    title: "Optimizarea fluxului financiar pentru IMM",
    industry: "Servicii B2B",
    challenge:
      "Lipsa unei imagini consolidate asupra cash-flow-ului și a profitabilității pe linii de business.",
    solution:
      "Implementare proces de raportare lunară, bugetare și KPI-uri financiare relevante.",
    result: "Rezultat: [valoare de completat]",
  },
  {
    title: "Structurarea fiscală a unei activități în creștere",
    industry: "Tehnologie / SaaS",
    challenge:
      "Creștere rapidă a operațiunilor, cu expunere fiscală în mai multe arii (TVA, salarizare, contracte).",
    solution:
      "Diagnostic fiscal, recomandări de structurare legală și monitorizare a conformității.",
    result: "Rezultat: [valoare de completat]",
  },
];

export const faqs = [
  {
    q: "Lucrați doar cu companii mari?",
    a: "Nu. Acoperim antreprenori, IMM-uri și organizații în diferite stadii de dezvoltare, adaptând abordarea la maturitatea și complexitatea fiecărei structuri.",
  },
  {
    q: "Garantați aprobarea unei finanțări nerambursabile?",
    a: "Nu. Niciun consultant serios nu poate garanta aprobarea. Lucrăm pentru a maximiza calitatea aplicației și conformitatea cu criteriile de evaluare, în limitele cadrului oficial.",
  },
  {
    q: "Care este durata unei colaborări?",
    a: "Depinde de natura proiectului. Putem oferi servicii punctuale de consultanță sau colaborări extinse, pe parcursul mai multor ani, pentru implementare și monitorizare.",
  },
  {
    q: "Lucrați și cu companii din afara României?",
    a: "Acoperim în principal companii care operează pe piața din România. Pentru structuri internaționale, evaluăm fezabilitatea în baza specificului fiecărei solicitări.",
  },
  {
    q: "Cum începe colaborarea?",
    a: "Printr-o discuție inițială. Pe baza informațiilor furnizate putem realiza o analiză preliminară și putem propune un plan de lucru personalizat.",
  },
  {
    q: "Cum tratați confidențialitatea datelor?",
    a: "Datele și documentele primite sunt tratate cu strictă confidențialitate, în baza acordurilor contractuale și a legislației privind protecția datelor cu caracter personal.",
  },
];

export const serviceOptions = [
  "Fonduri europene și structurale",
  "Servicii financiar-contabile",
  "Consultanță fiscală",
  "Altă solicitare",
];

export const seo = {
  title: "AMT | Consultanță Fonduri Europene, Contabilitate și Fiscalitate",
  description:
    "AMT oferă consultanță pentru fonduri europene și structurale, servicii financiar-contabile și consultanță fiscală pentru companii și antreprenori.",
  keywords: [
    "consultanță fonduri europene",
    "fonduri structurale",
    "servicii financiar contabile",
    "consultanță fiscală",
    "consultanță financiară",
    "finanțări nerambursabile",
    "contabilitate firme",
    "strategie fiscală",
  ],
};
