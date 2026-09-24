"use client";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { Anton, Libre_Bodoni } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const polos = [
  {
    name: "Navy Pique",
    image: "/images/polos/polo-01-navy-pique.png",
    alt: "Navy pique short-sleeve polo shirt with subtle tonal stripes",
  },
  {
    name: "Burgundy Tipped",
    image: "/images/polos/polo-02-burgundy-tipped.png",
    alt: "Burgundy pique polo shirt with cream tipped collar and cuffs",
  },
  {
    name: "Ivory Long Sleeve",
    image: "/images/polos/polo-03-ivory-long-sleeve.png",
    alt: "Ivory fine-knit long-sleeve polo shirt",
  },
  {
    name: "Emerald Performance",
    image: "/images/polos/polo-04-emerald-performance.png",
    alt: "Emerald technical performance polo shirt with a zip placket",
  },
  {
    name: "Sage Knit",
    image: "/images/polos/polo-05-sage-knit.png",
    alt: "Sage green knit polo shirt with an open Johnny collar",
  },
  {
    name: "Sky Relaxed",
    image: "/images/polos/polo-06-sky-relaxed.png",
    alt: "Sky blue relaxed-fit polo shirt",
  },
  {
    name: "Charcoal Jacquard",
    image: "/images/polos/polo-07-charcoal-jacquard.png",
    alt: "Charcoal polo shirt with a tonal jacquard weave",
  },
  {
    name: "Ochre Retro",
    image: "/images/polos/polo-08-ochre-retro.png",
    alt: "Ochre retro polo shirt with a cream chest stripe",
  },
] as const;

export function PoloCollection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateScrollState = useCallback(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const maximumScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    setCanScrollBack(rail.scrollLeft > 2);
    setCanScrollForward(rail.scrollLeft < maximumScroll - 2);
  }, []);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const frame = window.requestAnimationFrame(updateScrollState);
    rail.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.cancelAnimationFrame(frame);
      rail.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollPolos = (direction: -1 | 1) => {
    const rail = railRef.current;
    const firstCard = rail?.querySelector<HTMLElement>(
      '[data-polo-card="true"]',
    );

    if (!rail || !firstCard) {
      return;
    }

    const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap) || 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    rail.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="polo-collection"
      data-section="polo-collection"
      aria-labelledby="polo-collection-title"
      className="mt-12 bg-[#0d2f26] pt-14 text-white sm:mt-16 sm:pt-18 lg:mt-24 lg:pt-24"
    >
      <header className="px-5 pb-10 text-center sm:px-8 sm:pb-14 lg:pb-16">
        <p
          aria-hidden="true"
          className={`${anton.className} text-[clamp(2.5rem,4.8vw,5.2rem)] leading-none tracking-[-0.035em] text-white`}
        >
          MOTION
        </p>
        <h2
          id="polo-collection-title"
          className={`${libreBodoni.className} mt-2 text-[clamp(1.5rem,2.7vw,3.2rem)] font-normal leading-tight tracking-[-0.025em] sm:mt-3`}
        >
          The Polo Collection
        </h2>
      </header>

      <div className="bg-white">
        <div
          ref={railRef}
          data-polo-rail="true"
          aria-label="Polo collection"
          tabIndex={0}
          className="grid snap-x snap-mandatory grid-flow-col auto-cols-[78%] gap-px overflow-x-auto scroll-smooth bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[47%] lg:auto-cols-[23.75%] motion-reduce:scroll-auto"
        >
          {polos.map((polo) => (
            <figure
              key={polo.name}
              data-polo-card="true"
              className="group relative aspect-square snap-start overflow-hidden bg-[#ededee]"
            >
              <Image
                src={polo.image}
                alt={polo.alt}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 47vw, 78vw"
                className="object-contain p-[11%] transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
              />
              <figcaption className="sr-only">{polo.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="flex h-16 items-center justify-end gap-1 border-t border-black/5 px-3 text-black sm:h-[72px] sm:px-6">
          <button
            type="button"
            aria-label="Previous polos"
            disabled={!canScrollBack}
            onClick={() => scrollPolos(-1)}
            className="flex size-11 items-center justify-center transition-colors hover:bg-black/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-default disabled:opacity-25"
          >
            <CaretLeftIcon aria-hidden="true" size={22} weight="light" />
          </button>
          <button
            type="button"
            aria-label="Next polos"
            disabled={!canScrollForward}
            onClick={() => scrollPolos(1)}
            className="flex size-11 items-center justify-center transition-colors hover:bg-black/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-default disabled:opacity-25"
          >
            <CaretRightIcon aria-hidden="true" size={22} weight="light" />
          </button>
        </div>
      </div>
    </section>
  );
}
