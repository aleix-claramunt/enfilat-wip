const brandName = "Enfila't Creacions";
const email = process.env.EMAIL ?? "";

export const metadata = {
  title: `Política de privacitat | ${brandName}`,
  description: `Política de privacitat d'${brandName}.`,
};

export default function PoliticaPrivacitat() {
  return (
    <main className="page-shell">
      <section className="container-enfilat flex min-h-dvh flex-col items-center justify-center py-10 sm:py-14">
        <a
          href="/"
          className="inline-flex text-sm font-medium text-enfilat-ink/65 transition hover:text-enfilat-ink"
        >
          Tornar a l'inici
        </a>

        <article className="surface-panel mt-6 w-full max-w-3xl p-6 sm:p-8">
          <h1 className="font-heading text-3xl font-medium text-enfilat-ink sm:text-4xl">
            Política de privacitat
          </h1>
          <div className="mt-6 space-y-5 text-sm leading-7 text-enfilat-ink/72 sm:text-base">
            <p>
              En aquest lloc web no es fa cap compra en línia ni es recullen
              dades mitjançant formularis propis. Les consultes es gestionen a
              través de WhatsApp, Instagram o correu electrònic.
            </p>
            <p>
              Si ens contactes, utilitzarem les dades que ens facilitis només
              per respondre la teva consulta, gestionar la informació sobre el
              catàleg o preparar una possible comanda.
            </p>
            <p>
              No venem ni cedim les teves dades a tercers. Les plataformes
              externes com WhatsApp, Instagram o el teu proveïdor de correu
              poden aplicar les seves pròpies polítiques de privacitat.
            </p>
            <p>
              Pots demanar informació sobre les teves dades o sol·licitar-ne la
              rectificació o eliminació escrivint a{" "}
              <a className="font-medium text-enfilat-ink" href={`mailto:${email}`}>
                {email || "el correu de contacte"}
              </a>
              .
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
