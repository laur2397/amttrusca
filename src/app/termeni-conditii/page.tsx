import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata = {
  title: "Termeni și condiții · AMT",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <LegalLayout
          eyebrow="Documente legale"
          title="Termeni și condiții"
          subtitle="Document placeholder. Textul final trebuie revizuit și adaptat realității operaționale AMT, sub asistență juridică."
        >
          <h2>1. Acceptarea termenilor</h2>
          <p>
            Utilizarea website-ului AMT presupune acceptarea termenilor și
            condițiilor descrise mai jos. Vă rugăm să citiți acest document cu
            atenție înainte de utilizarea site-ului.
          </p>
          <h2>2. Proprietate intelectuală</h2>
          <p>
            Conținutul website-ului (texte, identitate vizuală, structură,
            imagini) aparține AMT sau este utilizat sub licență, fiind protejat
            de legislația privind drepturile de autor și proprietatea
            intelectuală.
          </p>
          <h2>3. Limitarea răspunderii</h2>
          <p>
            Informațiile prezentate pe website au caracter general, orientativ.
            Acestea nu reprezintă consultanță personalizată și nu pot fi
            interpretate ca o garanție de obținere a finanțărilor sau a unor
            rezultate fiscale specifice.
          </p>
          <p className="text-white/50">
            [Conținut placeholder — necesită completare juridică înainte de
            publicare.]
          </p>
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
