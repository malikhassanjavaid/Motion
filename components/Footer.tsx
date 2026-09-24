"use client";

import {
  ArrowRightIcon,
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";
import { Anton, Libre_Bodoni } from "next/font/google";
import Link from "next/link";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const footerSections = [
  {
    title: "Collections",
    links: [
      { name: "The Everyday Standard", href: "#everyday-standard" },
      { name: "The Polo Collection", href: "#polo-collection" },
      { name: "Sweatshirts in Focus", href: "#sweatshirt-focus" },
      { name: "Campus Essentials", href: "#collection" },
      { name: "Activewear & Movement", href: "#collection" },
    ],
  },
  {
    title: "About MOTION",
    links: [
      { name: "Brand Philosophy", href: "#" },
      { name: "Sustainable Craft", href: "#" },
      { name: "Fabric Innovation", href: "#" },
      { name: "Flagship Stores", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Client Care",
    links: [
      { name: "Order Tracking", href: "#" },
      { name: "Shipping & Delivery", href: "#" },
      { name: "Complimentary Returns", href: "#" },
      { name: "Size & Fit Guide", href: "#" },
      { name: "Contact Concierge", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t border-black/10 bg-[#0d2f26] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          <div className="space-y-6">
            <div>
              <p
                aria-hidden="true"
                className={`${anton.className} text-[36px] tracking-[-0.04em] text-white sm:text-[42px]`}
              >
                MOTION
              </p>
              <p
                className={`${libreBodoni.className} mt-2 text-lg text-white/80 sm:text-xl`}
              >
                Everyday Luxury &amp; Contemporary Essentials
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                Engineered for natural movement and tailored for enduring modern
                simplicity. Designed with conscious craftsmanship and premium
                textiles.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <label
                htmlFor="newsletter-email"
                className="block text-xs font-semibold uppercase tracking-wider text-white/90"
              >
                Subscribe to MOTION Dispatches
              </label>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex max-w-md items-center border-b border-white/40 pb-2 transition-colors focus-within:border-white"
              >
                <EnvelopeSimpleIcon
                  aria-hidden="true"
                  size={20}
                  className="mr-3 text-white/50"
                />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-sm text-white placeholder-white/40 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="ml-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span>Join</span>
                  <ArrowRightIcon aria-hidden="true" size={14} />
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/90">
                  {section.title}
                </h3>
                <ul className="space-y-2.5 text-sm text-white/60">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-white focus-visible:outline-1 focus-visible:outline-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:mt-16">
          <p>© {new Date().getFullYear()} MOTION Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              aria-label="Instagram"
              className="transition-colors hover:text-white"
            >
              <InstagramLogoIcon size={18} />
            </Link>
            <Link
              href="#"
              aria-label="X / Twitter"
              className="transition-colors hover:text-white"
            >
              <TwitterLogoIcon size={18} />
            </Link>
            <span className="text-white/20">|</span>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
