import { Libre_Bodoni } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: ["400"],
});

export interface EditorialPanel {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  href: string;
  image: string;
  alt: string;
  objectPosition?: string;
}

const defaultPanels: EditorialPanel[] = [
  {
    id: "polos",
    title: "Polos",
    subtitle: "REFINED FOR EVERYDAY",
    ctaText: "SHOP POLOS",
    href: "#polo-collection",
    image: "/images/editorial/polos-kitchen.jpg",
    alt: "Male model wearing a cream knitted polo shirt in a luxury modern kitchen",
    objectPosition: "object-top sm:object-center",
  },
  {
    id: "t-shirts",
    title: "T-Shirts",
    subtitle: "MODERN ESSENTIALS",
    ctaText: "SHOP T-SHIRTS",
    href: "#everyday-standard",
    image: "/images/editorial/tshirts-office.jpg",
    alt: "Female model wearing a white premium t-shirt and black tailored trousers in a modern office",
    objectPosition: "object-top sm:object-center",
  },
];

interface EditorialSplitSectionProps {
  panels?: EditorialPanel[];
}

export function EditorialSplitSection({
  panels = defaultPanels,
}: EditorialSplitSectionProps) {
  return (
    <section
      data-section="editorial-split"
      aria-label="Editorial Collections"
      className="w-full bg-black p-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0.5 bg-neutral-900">
        {panels.map((panel) => (
          <Link
            key={panel.id}
            href={panel.href}
            className="group relative block h-[460px] md:h-[500px] lg:h-[580px] w-full overflow-hidden bg-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {/* Background Editorial Image */}
            <Image
              src={panel.image}
              alt={panel.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-cover ${
                panel.objectPosition ?? "object-center"
              } transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none`}
            />

            {/* Subtle bottom dark gradient for text legibility */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"
            />

            {/* Bottom-left pinned editorial copy */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9 xl:p-10 flex flex-col items-start text-white pointer-events-none">
              <h2
                className={`${libreBodoni.className} text-[clamp(1.85rem,2.75vw,2.5rem)] font-normal leading-tight tracking-[-0.015em] text-white`}
              >
                {panel.title}
              </h2>

              <p className="mt-1.5 text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase text-white/90">
                {panel.subtitle}
              </p>

              <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 border-b border-white/60 pb-0.5 text-[12px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-white transition-colors group-hover:border-white">
                <span>{panel.ctaText}</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
