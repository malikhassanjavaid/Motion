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
    objectPosition: "object-[center_top] md:object-[center_8%]",
  },
  {
    id: "t-shirts",
    title: "T-Shirts",
    subtitle: "MODERN ESSENTIALS",
    ctaText: "SHOP T-SHIRTS",
    href: "#everyday-standard",
    image: "/images/editorial/tshirts-office.jpg",
    alt: "Female model wearing a white premium t-shirt and black tailored trousers in a modern office",
    objectPosition: "object-[center_top] md:object-[center_8%]",
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
      className="my-12 w-full bg-black p-0 sm:my-16 lg:my-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0.5 bg-black">
        {panels.map((panel) => (
          <Link
            key={panel.id}
            href={panel.href}
            className="group relative block h-[460px] md:h-[520px] lg:h-[600px] w-full overflow-hidden bg-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {/* Background Editorial Image - Uncompressed Full HD / 2K with Smooth Hover Scale */}
            <Image
              src={panel.image}
              alt={panel.alt}
              fill
              unoptimized
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-cover ${
                panel.objectPosition ?? "object-center"
              } transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03] motion-reduce:transition-none`}
            />

            {/* Premium editorial bottom gradient scrim */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 via-35% to-transparent pointer-events-none"
            />

            {/* Bottom-left pinned editorial typography */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9 xl:p-10 flex flex-col items-start text-white pointer-events-none">
              <h2
                className={`${libreBodoni.className} text-[clamp(2rem,3.1vw,2.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]`}
              >
                {panel.title}
              </h2>

              <p className="mt-2 text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
                {panel.subtitle}
              </p>

              <div className="mt-5 inline-flex items-center gap-2.5 border-b border-white/70 pb-1 text-[12px] sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:border-white group-hover:text-white">
                <span>{panel.ctaText}</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1.5"
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
