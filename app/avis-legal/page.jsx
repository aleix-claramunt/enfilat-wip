const brandName = "Enfila't Creacions";
const email = process.env.EMAIL ?? "";

export const metadata = {
  title: `Avís legal | ${brandName}`,
  description: `Avís legal d'${brandName}.`,
};

export default function AvisLegal() {
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
            Avís legal
          </h1>
          <div className="mt-6 space-y-5 text-sm leading-7 text-enfilat-ink/72 sm:text-base">
            <p>
              Aquest lloc web pertany a {brandName}. El seu objectiu actual és
              mostrar un catàleg en PDF i facilitar el contacte per demanar
              informació o fer comandes.
            </p>
            <p>
              Per a qualsevol consulta relacionada amb aquest lloc web, pots
              escriure a{" "}
              <a className="font-medium text-enfilat-ink" href={`mailto:${email}`}>
                {email || "el correu de contacte"}
              </a>
              .
            </p>
            <p>
              Els continguts, textos, imatges i materials publicats en aquest
              lloc web són propietat de {brandName} o s'utilitzen amb permís.
              No es permet la seva reproducció o ús comercial sense autorització
              prèvia.
            </p>
            <p>
              La informació del catàleg pot canviar sense avís previ. La
              disponibilitat, preus i detalls dels productes es confirmaran
              sempre directament per WhatsApp, Instagram o correu electrònic.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
