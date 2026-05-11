import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata = {
  title: "Politica de confidențialitate · AMT",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <LegalLayout
          eyebrow="Documente legale"
          title="Politica de confidențialitate"
          subtitle="Acest text este un model placeholder. Înainte de publicare, conținutul trebuie revizuit și completat de un specialist juridic, în conformitate cu legislația aplicabilă."
        >
          <h2>1. Operator de date</h2>
          <p>
            Operatorul datelor cu caracter personal colectate prin intermediul
            acestui website este AMT, cu datele de identificare disponibile în
            secțiunea de contact a site-ului.
          </p>
          <h2>2. Tipuri de date prelucrate</h2>
          <p>
            Putem prelucra date precum: nume și prenume, denumire companie,
            adresă de email, număr de telefon și conținutul mesajelor transmise
            prin formularul de contact.
          </p>
          <h2>3. Scopurile prelucrării</h2>
          <p>
            Datele sunt prelucrate exclusiv în scopul furnizării unui răspuns
            solicitărilor primite, organizării unei discuții preliminare și
            transmiterii de informații strict legate de subiectul solicitării.
          </p>
          <h2>4. Drepturile persoanelor vizate</h2>
          <p>
            În conformitate cu legislația aplicabilă, persoanele vizate
            beneficiază de dreptul de acces, rectificare, ștergere, restricționare,
            opoziție și portabilitate a datelor, precum și de dreptul de a depune
            o plângere la autoritatea competentă.
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
