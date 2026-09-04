"use client";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import Image from "next/image";
import { Libre_Bodoni } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const SLIDE_DURATION_MS = 6000;

const slides = [
  {
    title: "The Modern Polo",
    headingLines: ["Modern Classics"],
    eyebrow: "THE ESSENTIAL COLLECTION",
    cta: "SHOP POLOS",
    ctaLabel: "Shop modern polos",
    alt: "Two men wearing modern polo shirts in a sunlit courtyard",
    image: "/images/motion-polos-courtyard-hero-hd.png",
    mobileImage: "/images/motion-polos-courtyard-hero-mobile.png",
    wideImage: "/images/motion-polos-courtyard-hero-wide-v2.png",
    tone: "dark",
  },
  {
    title: "Campus Essentials",
    headingLines: ["Campus", "Essentials"],
    eyebrow: "THE CAMPUS EDIT",
    cta: "SHOP T-SHIRTS",
    ctaLabel: "Shop T-shirts",
    alt: "Two students wearing plain T-shirts on a sunlit university campus",
    image: "/images/motion-campus-essentials-hero-hd.png",
    mobileImage: "/images/motion-campus-essentials-hero-mobile.png",
    wideImage: "/images/motion-campus-essentials-hero-wide.png",
    tone: "light",
  },
  {
    title: "Play in Motion",
    headingLines: ["Play in", "Motion"],
    eyebrow: "THE ACTIVE COLLECTION",
    cta: "SHOP ACTIVEWEAR",
    ctaLabel: "Shop activewear",
    alt: "Two athletes wearing tracksuits while playing padel on a dark blue court",
    image: "/images/motion-padel-hero-hd.png",
    mobileImage: "/images/motion-padel-hero-mobile.png",
    wideImage: "/images/motion-padel-hero-wide.png",
    tone: "light",
  },
] as const;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () =>
      setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () =>
      mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isInteracting || prefersReducedMotion) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isInteracting, prefersReducedMotion]);

  return (
    <main
      id="collection"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      className="hero-frame relative h-[calc(100svh-6.25rem)] w-full overflow-hidden bg-[#ded4c7] sm:h-[calc(100svh-6.75rem)]"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsInteracting(false);
        }
      }}
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        const isLight = slide.tone === "light";

        return (
          <section
            key={slide.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
              isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
            }`}
          >
            <picture className="absolute inset-0 block h-full w-full">
              <source
                media="(max-width: 639px)"
                srcSet={slide.mobileImage}
                type="image/png"
              />
              <source
                media="(min-aspect-ratio: 2/1)"
                srcSet={slide.wideImage}
                type="image/png"
              />
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                preload={index === 0}
                sizes="100vw"
                unoptimized
                className="object-cover object-center"
              />
            </picture>

            <div
              className={`absolute inset-x-6 top-[7%] z-10 sm:inset-x-auto sm:left-[9.9%] sm:top-[25%] sm:w-[36rem] ${
                isLight
                  ? "text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.42)]"
                  : "text-[#142a43]"
              }`}
            >
              <p className="mb-5 text-[11px] font-semibold uppercase leading-none tracking-[0.23em] sm:mb-7 sm:text-[15px] lg:text-[17px]">
                {slide.eyebrow}
              </p>
              <h1
                id={`hero-title-${index + 1}`}
                className={`${libreBodoni.className} text-[clamp(3.2rem,13vw,4.8rem)] font-normal leading-[0.9] tracking-[-0.035em] sm:text-[clamp(4.6rem,6vw,6.6rem)]`}
              >
                {slide.headingLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <Link
                href="#collection"
                data-hero-cta="true"
                aria-label={slide.ctaLabel}
                tabIndex={isActive ? 0 : -1}
                className="group mt-8 inline-flex items-center gap-2.5 border-b border-current pb-2 text-[11px] font-semibold uppercase leading-none tracking-[0.2em] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:mt-12 sm:text-[15px]"
              >
                <span>{slide.cta}</span>
                <ArrowRightIcon
                  aria-hidden="true"
                  size={20}
                  weight="regular"
                  className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </Link>
            </div>
          </section>
        );
      })}

      <p
        className="sr-only"
        aria-live={prefersReducedMotion ? "polite" : "off"}
      >
        Slide {activeIndex + 1} of {slides.length}: {slides[activeIndex].title}
      </p>

      <div className="absolute inset-x-0 bottom-5 z-30 flex items-center justify-center sm:bottom-7">
        <div
          data-hero-pagination="true"
          aria-label="Choose a slide"
          className="flex items-center text-white"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={`flex size-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white before:block before:rounded-full before:transition-all motion-reduce:before:transition-none ${
                index === activeIndex
                  ? "before:size-2 before:bg-white"
                  : "before:size-1.5 before:bg-white/55 hover:before:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
