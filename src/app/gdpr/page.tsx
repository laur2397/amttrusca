import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata = {
  title: "GDPR · AMT",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <LegalLayout
          eyebrow="Documente legale"
          title="GDPR · Protecția datelor"
          subtitle="Document placeholder. Înainte de publicare, conținutul trebuie revizuit și adaptat de un specialist în protecția datelor cu caracter personal."
        >
          <h2>1. Principiile prelucrării</h2>
          <p>
            AMT respectă principiile prelucrării datelor cu caracter personal:
            legalitate, transparență, limitarea scopului, minimizarea datelor,
            exactitate, limitarea stocării, integritate și confidențialitate.
          </p>
          <h2>2. Temeiul juridic</h2>
          <p>
            Prelucrarea se realizează în baza consimțământului persoanei vizate,
            a executării unui contract sau a îndeplinirii unei obligații legale,
            după caz.
          </p>
          <h2>3. Securitatea datelor</h2>
          <p>
            Sunt implementate măsuri tehnice și organizatorice adecvate pentru
            protejarea datelor împotriva accesului neautorizat, pierderii sau
            divulgării.
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
