import {
  ArrowRight,
  Instagram,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const brandName = "Enfila't Creacions";
const phoneNumber = process.env.PHONE_NUMBER ?? "";
const whatsappPhoneNumber = phoneNumber.replace(/\D/g, "");
const whatsappMessage =
  "Hola, he vist el catàleg i vull més informació. Podem parlar? 😜";
const phoneLink = `https://api.whatsapp.com/send?phone=${whatsappPhoneNumber}&text=${encodeURIComponent(
  whatsappMessage,
)}`;
const instagramUrl = process.env.INSTAGRAM_URL ?? "";
const backgroundImages = [
  "/image-1.jpeg",
  "/image-2.jpeg",
  "/image-3.jpeg",
];

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium tracking-[0.01em] transition duration-200 focus:outline-none focus:ring-2 focus:ring-enfilat-blush focus:ring-offset-2 focus:ring-offset-enfilat-cream sm:min-h-12 sm:px-5";

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${buttonBase} bg-enfilat-blush text-enfilat-ink shadow-soft hover:-translate-y-0.5 hover:bg-enfilat-blush/85 ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${buttonBase} border border-enfilat-ink/10 bg-enfilat-cream/70 text-enfilat-ink hover:-translate-y-0.5 hover:border-enfilat-sage hover:bg-enfilat-sage/25 ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-enfilat-cream">
      <div className="pointer-events-none fixed inset-0 z-0 grid grid-cols-1 md:grid-cols-3">
        {backgroundImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`h-full w-full object-cover ${index !== 0 ? "hidden md:block" : ""}`}
          />
        ))}
        <div className="absolute inset-0 bg-pink-950/20" />
      </div>

      <section className="relative z-10 flex flex-1 flex-col overflow-hidden">
        <div className="border-b border-pink-200/70 bg-enfilat-pink/80 backdrop-blur-md sm:border-b-0 sm:bg-transparent sm:backdrop-blur-0">
          <div className="container-enfilat flex min-h-16 items-center py-3 sm:min-h-20 sm:py-4">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt={brandName}
                className="h-24 w-24 shrink-0 object-cover sm:h-28 sm:w-28"
              />
              <span>
                <span className="block font-heading text-3xl leading-none tracking-[0.01em] text-enfilat-ink sm:text-5xl">
                  Enfila&apos;t Creacions
                </span>
                <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.18em] text-enfilat-ink/50 sm:text-xs sm:tracking-[0.2em]">
                  Taller creatiu
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="container-enfilat flex flex-1 items-center py-3 sm:py-5 lg:py-6">
          <div className="surface-panel mx-auto flex w-full max-w-4xl flex-col justify-center p-5 sm:p-8 lg:p-10">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-pink-200 bg-enfilat-pink/70 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-enfilat-ink/55 sm:mb-5 sm:text-xs sm:tracking-[0.18em]">
              <Sparkles size={16} aria-hidden="true" />
              Creacions fetes a mà
            </div>
            <h1 className="max-w-3xl font-heading text-3xl font-medium leading-tight tracking-normal text-enfilat-ink sm:text-5xl lg:text-[3.2rem]">
              Fes la teva comanda
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-enfilat-ink/72 sm:mt-5 sm:text-lg sm:leading-7">
              Consulta el catàleg en PDF, podràs veure un exemple fotogràfic de cada producte.
              Fes la teva comanda fàcilment per WhatsApp o Instagram. 
              Demana qualsevol producte i recorda que podem personalitzar qualsevol peça al teu gust!
            </p>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
              <PrimaryButton href="/cataleg-low.pdf" className="w-full sm:w-auto">
                Veure catàleg
                <ArrowRight size={18} aria-hidden="true" />
              </PrimaryButton>
              <SecondaryButton href={phoneLink} className="w-full sm:w-auto">
                <MessageCircle size={18} aria-hidden="true" />
                Demanar per WhatsApp
              </SecondaryButton>
              <SecondaryButton href={instagramUrl} className="w-full sm:w-auto">
                <Instagram size={18} aria-hidden="true" />
                Demanar per Instagram
              </SecondaryButton>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-enfilat-ink/72 sm:mt-5 sm:text-lg sm:leading-7">
              I no oblidis seguir-nos a les xarxes socials per estar al dia de totes les novetats!
            </p>
            <div className="mt-6 border-t border-pink-200 pt-4 text-sm text-enfilat-ink/65 sm:mt-8 sm:pt-5">
              <p className="mt-2 leading-6 max-[380px]:hidden">
                Mentre preparem la botiga en línia, pots consultar totes les
                peces al PDF i escriure'ns directament.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 shrink-0 border-t border-pink-200/70 bg-enfilat-pink/80 py-4 backdrop-blur-md sm:py-5">
        <div className="container-enfilat flex flex-col gap-2 text-xs text-enfilat-ink/65 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p className="font-heading text-base text-enfilat-ink sm:text-lg">{brandName}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 sm:gap-x-5">
            <a className="hover:text-enfilat-ink" href="/avis-legal">
              Avís legal
            </a>
            <a className="hover:text-enfilat-ink" href="/politica-privacitat">
              Política de privacitat
            </a>
          </div>
        </div>
      </footer>

      <a
        href={phoneLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Demanar per WhatsApp"
        className="fixed bottom-5 right-5 z-20 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-0.5"
      >
        <MessageCircle size={25} aria-hidden="true" />
      </a>
    </main>
  );
}
