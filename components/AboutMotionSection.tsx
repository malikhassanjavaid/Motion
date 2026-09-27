"use client";

import {
  ArrowRightIcon,
  CubeIcon,
  GlobeIcon,
  LeafIcon,
  PlayIcon,
} from "@phosphor-icons/react";
import { Anton, Libre_Bodoni } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: ["400"],
});

export function AboutMotionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-motion"
      ref={sectionRef}
      data-section="about-motion"
      aria-labelledby="about-motion-title"
      className="my-12 relative w-full overflow-hidden bg-white text-neutral-900 sm:my-16 lg:my-24"
    >
      {/* Background Watermark "MOTION" */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-4%] top-[-6%] z-0 select-none overflow-hidden leading-none text-[#F1EFEA]/85 sm:right-[-2%] sm:top-[-8%]"
      >
        <span
          className={`${anton.className} block text-[clamp(11rem,22vw,26rem)] font-normal tracking-[-0.04em] uppercase`}
        >
          MOTION
        </span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-12 sm:px-10 sm:pt-14 lg:px-14 lg:pt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-0 lg:items-end">
          {/* Left Column: Heading, Story & CTAs */}
          <div
            className={`lg:col-span-5 lg:border-r lg:border-black/10 lg:pr-12 xl:pr-16 pb-2 lg:pb-12 transition-all duration-700 ease-out motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            {/* Small uppercase label with short horizontal line */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-800">
                ABOUT US
              </span>
              <span
                className="h-px w-9 bg-neutral-300"
                aria-hidden="true"
              />
            </div>

            {/* Main Headline */}
            <h2
              id="about-motion-title"
              className={`${libreBodoni.className} mt-5 text-[clamp(2.5rem,4.4vw,3.9rem)] font-normal leading-[1.06] tracking-[-0.03em] text-neutral-950 sm:mt-6`}
            >
              More Than
              <br />
              Clothing
            </h2>

            {/* Paragraph */}
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-neutral-600 sm:mt-6 sm:text-[15px]">
              At MOTION, we believe in modern essentials that move with you.
              Timeless styles, premium fabrics, and a more intentional approach
              to everyday wear.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-6">
              <Link
                href="#collection"
                className="group inline-flex items-center gap-2.5 bg-black px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:px-7"
              >
                <span>OUR STORY</span>
                <ArrowRightIcon
                  size={14}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <button
                type="button"
                aria-label="Watch our story video"
                className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-black/15 bg-white/70 shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <PlayIcon
                    size={12}
                    weight="fill"
                    className="translate-x-0.5 text-neutral-900"
                  />
                </span>
                <span>WATCH OUR STORY</span>
              </button>
            </div>
          </div>

          {/* Center Column: Statistics & Purpose */}
          <div
            className={`lg:col-span-4 lg:px-10 xl:px-12 pb-2 lg:pb-12 transition-all duration-700 delay-150 ease-out motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            {/* MOTION IN NUMBERS */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-700">
                MOTION IN NUMBERS
              </p>

              <div className="mt-5 grid grid-cols-3 divide-x divide-black/10">
                {/* Stat 1 */}
                <div className="pr-3 sm:pr-5">
                  <span
                    className={`${libreBodoni.className} block text-2xl font-normal tracking-tight text-neutral-950 sm:text-3xl lg:text-[2rem]`}
                  >
                    10K+
                  </span>
                  <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-500 sm:text-[10px]">
                    HAPPY CUSTOMERS
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="px-3 sm:px-5">
                  <span
                    className={`${libreBodoni.className} block text-2xl font-normal tracking-tight text-neutral-950 sm:text-3xl lg:text-[2rem]`}
                  >
                    50+
                  </span>
                  <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-500 sm:text-[10px]">
                    PREMIUM STYLES
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="pl-3 sm:pl-5">
                  <span
                    className={`${libreBodoni.className} block text-2xl font-normal tracking-tight text-neutral-950 sm:text-3xl lg:text-[2rem]`}
                  >
                    1
                  </span>
                  <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-500 sm:text-[10px]">
                    CLEAR MISSION
                  </span>
                </div>
              </div>
            </div>

            {/* OUR PURPOSE */}
            <div className="mt-10 sm:mt-14">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-9 bg-neutral-300"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-800">
                  OUR PURPOSE
                </span>
              </div>
              <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-neutral-600 sm:text-[14px]">
                To create versatile, high-quality clothing for people who value
                simplicity, confidence, and a better everyday. Designed for today,
                built for what’s next.
              </p>
            </div>
          </div>

          {/* Right Column: Fashion Illustration & Script */}
          <div
            className={`relative lg:col-span-3 flex items-end justify-center lg:justify-end transition-all duration-700 delay-300 ease-out motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            {/* Subtle Handwritten Script */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 bottom-16 sm:left-4 sm:bottom-24 lg:left-[-3.5rem] lg:bottom-20 z-10 select-none"
            >
              <Image
                src="/images/about/move-better-live-bigger.png"
                alt="Move Better Live Bigger"
                width={135}
                height={125}
                className="h-auto w-20 sm:w-24 lg:w-28 opacity-75"
              />
            </div>

            {/* Cutout Woman Illustration */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px]">
              <Image
                src="/images/about/motion-about-woman.png"
                alt="Stylish woman shopping on smartphone with MOTION bags"
                width={896}
                height={1200}
                priority
                sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, 340px"
                className="h-auto w-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Benefits Strip */}
      <div className="relative z-10 mt-6 border-t border-black/10 bg-inherit sm:mt-8 lg:mt-0">
        <div className="mx-auto max-w-[1440px] px-6 py-6 sm:px-10 sm:py-7 lg:px-14">
          <div className="grid grid-cols-1 divide-y divide-black/10 md:grid-cols-3 md:divide-y-0 md:divide-x">
            {/* Benefit 1 */}
            <div className="flex items-center gap-4 py-3.5 md:py-0 md:pr-6">
              <LeafIcon
                size={26}
                weight="light"
                className="shrink-0 text-black"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900 sm:text-xs">
                  PREMIUM MATERIALS
                </h3>
                <p className="mt-0.5 text-[12px] text-neutral-500 sm:text-[13px]">
                  Built to last
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center gap-4 py-3.5 md:py-0 md:px-6">
              <CubeIcon
                size={26}
                weight="light"
                className="shrink-0 text-black"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900 sm:text-xs">
                  TIMELESS DESIGNS
                </h3>
                <p className="mt-0.5 text-[12px] text-neutral-500 sm:text-[13px]">
                  Made for everyday
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center gap-4 py-3.5 md:py-0 md:pl-6">
              <GlobeIcon
                size={26}
                weight="light"
                className="shrink-0 text-black"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900 sm:text-xs">
                  A MORE INTENTIONAL FUTURE
                </h3>
                <p className="mt-0.5 text-[12px] text-neutral-500 sm:text-[13px]">
                  People. Purpose. Progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
