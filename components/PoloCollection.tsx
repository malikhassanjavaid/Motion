"use client";

import { BagIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { Anton, Libre_Bodoni } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";
import { CONTAINER_CLASS } from "./Container";

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
    fit: "Slim fit | Men",
    price: "PKR 3,990",
    image: "/images/polos/polo-01-navy-pique.png",
    alt: "Navy pique short-sleeve polo shirt with subtle tonal stripes",
    swatches: ["bg-[#152840]", "bg-[#dedede]"],
  },
  {
    name: "Burgundy Tipped",
    fit: "Regular fit | Men",
    price: "PKR 4,290",
    image: "/images/polos/polo-02-burgundy-tipped.png",
    alt: "Burgundy pique polo shirt with cream tipped collar and cuffs",
    swatches: ["bg-[#5c1c28]", "bg-[#f5ebd7]"],
  },
  {
    name: "Ivory Long Sleeve",
    fit: "Relaxed fit | Men",
    price: "PKR 4,490",
    image: "/images/polos/polo-03-ivory-long-sleeve.png",
    alt: "Ivory fine-knit long-sleeve polo shirt",
    swatches: ["bg-[#eee8dc]", "bg-[#222222]"],
  },
  {
    name: "Emerald Performance",
    fit: "Athletic fit | Men",
    price: "PKR 4,290",
    image: "/images/polos/polo-04-emerald-performance.png",
    alt: "Emerald technical performance polo shirt with a zip placket",
    swatches: ["bg-[#164d36]", "bg-[#111111]"],
  },
  {
    name: "Sage Knit",
    fit: "Relaxed fit | Men",
    price: "PKR 4,490",
    image: "/images/polos/polo-05-sage-knit.png",
    alt: "Sage green knit polo shirt with an open Johnny collar",
    swatches: ["bg-[#7d8b7a]", "bg-[#e2ded6]"],
  },
  {
    name: "Sky Relaxed",
    fit: "Relaxed fit | Men",
    price: "PKR 3,990",
    image: "/images/polos/polo-06-sky-relaxed.png",
    alt: "Sky blue relaxed-fit polo shirt",
    swatches: ["bg-[#9ab4cc]", "bg-[#f2f2f2]"],
  },
  {
    name: "Charcoal Jacquard",
    fit: "Slim fit | Men",
    price: "PKR 4,290",
    image: "/images/polos/polo-07-charcoal-jacquard.png",
    alt: "Charcoal polo shirt with a tonal jacquard weave",
    swatches: ["bg-[#333538]", "bg-[#717378]"],
  },
  {
    name: "Ochre Retro",
    fit: "Regular fit | Men",
    price: "PKR 4,490",
    image: "/images/polos/polo-08-ochre-retro.png",
    alt: "Ochre retro polo shirt with a cream chest stripe",
    swatches: ["bg-[#c98c3e]", "bg-[#2d3138]"],
  },
] as const;

export function PoloCollection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);
  const [addedPolos, setAddedPolos] = useState<string[]>([]);

  const togglePolo = (poloName: string) => {
    setAddedPolos((current) =>
      current.includes(poloName)
        ? current.filter((name) => name !== poloName)
        : [...current, poloName],
    );
  };

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
      className="mt-12 bg-white pt-10 text-black sm:mt-16 sm:pt-14 lg:mt-24 lg:pt-16"
    >
      <div className={CONTAINER_CLASS}>
        <header className="pb-8 text-left sm:pb-10 lg:pb-12">
          <p
            aria-hidden="true"
            className={`${anton.className} text-[clamp(2.4rem,4.5vw,4.5rem)] leading-none tracking-[-0.035em] text-black`}
          >
            MOTION
          </p>
          <h2
            id="polo-collection-title"
            className={`${libreBodoni.className} mt-2 text-[clamp(1.4rem,2.5vw,2.75rem)] font-normal leading-tight tracking-[-0.025em] text-neutral-800 sm:mt-3`}
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
            className="grid snap-x snap-mandatory grid-flow-col auto-cols-[74%] gap-2 overflow-x-auto scroll-smooth pb-2 sm:auto-cols-[46%] md:auto-cols-[31%] lg:auto-cols-[calc(25%-0.5rem)] xl:gap-2.5 motion-reduce:scroll-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {polos.map((polo) => {
              const isAdded = addedPolos.includes(polo.name);

              return (
                <figure
                  key={polo.name}
                  data-polo-card="true"
                  className="group min-w-0 snap-start bg-white"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#ededee]">
                    <Image
                      src={polo.image}
                      alt={polo.alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 74vw"
                      className="object-contain p-[11%] transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                    />
                  </div>

                  <figcaption className="min-h-[7rem] px-1 py-3.5 sm:py-4">
                    <h3 className="truncate text-[12px] font-medium uppercase leading-tight tracking-[-0.01em]">
                      {polo.name}
                    </h3>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.1em] text-black/60">
                      {polo.fit}
                    </p>
                    <p className="mt-1.5 text-[12px] font-bold tracking-[0.01em]">
                      {polo.price}
                    </p>

                    <div className="mt-2.5 flex items-center justify-between">
                      <div className="flex gap-1.5" aria-label="Available colors">
                        {polo.swatches.map((swatch) => (
                          <span
                            key={swatch}
                            aria-hidden="true"
                            className={`size-3 border border-black/70 ${swatch}`}
                          />
                        ))}
                      </div>
                      <button
                        type="button"
                        aria-label={`${isAdded ? "Remove" : "Add"} ${polo.name} ${isAdded ? "from" : "to"} bag`}
                        aria-pressed={isAdded}
                        onClick={() => togglePolo(polo.name)}
                        className={`flex size-8 items-center justify-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                          isAdded
                            ? "border-black bg-black text-white"
                            : "border-black/10 bg-white text-black hover:border-black"
                        }`}
                      >
                        <BagIcon aria-hidden="true" size={16} weight="light" />
                      </button>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="mt-6 flex h-14 items-center justify-end gap-1.5 border-t border-black/10 sm:h-16">
            <button
              type="button"
              aria-label="Previous polos"
              disabled={!canScrollBack}
              onClick={() => scrollPolos(-1)}
              className="flex size-10 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-black/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-default disabled:opacity-25"
            >
              <CaretLeftIcon aria-hidden="true" size={20} weight="light" />
            </button>
            <button
              type="button"
              aria-label="Next polos"
              disabled={!canScrollForward}
              onClick={() => scrollPolos(1)}
              className="flex size-10 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-black/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-default disabled:opacity-25"
            >
              <CaretRightIcon aria-hidden="true" size={20} weight="light" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
