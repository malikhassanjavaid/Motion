"use client";

import {
  InstagramLogoIcon,
  PinterestLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { Anton, Libre_Bodoni } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const shopLinks = [
  "T-Shirts",
  "Polos",
  "Hoodies",
  "Knitwear",
  "Sweatshirts",
  "Jeans",
  "Tracksuits",
  "All Products",
];

const companyLinks = [
  "About Us",
  "Our Story",
  "Sustainability",
  "Careers",
  "Journal",
  "Affiliates",
  "Contact",
];

const helpLinks = [
  "FAQs",
  "Shipping & Delivery",
  "Returns & Exchanges",
  "Size Guide",
  "Care Guide",
  "Track Order",
  "Contact Support",
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer
      aria-label="Site footer"
      className="w-full border-t border-neutral-200 bg-white text-black"
    >
      <div className="mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* Main top grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_2.2fr] lg:gap-8 xl:gap-12">
          {/* Brand & Editorial Column */}
          <div className="flex flex-col">
            <Link
              href="/"
              aria-label="MOTION home"
              className={`${anton.className} text-[32px] leading-none tracking-[-0.5px] text-black sm:text-[36px]`}
            >
              MOTION
            </Link>

            <p
              className={`${libreBodoni.className} mt-2 text-[15px] font-normal leading-tight tracking-[-0.01em] text-black`}
            >
              The Everyday Standard
            </p>

            <p className="mt-4 max-w-[240px] text-[13px] leading-relaxed text-neutral-500">
              Modern essentials for a more intentional tomorrow.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4 text-black">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <InstagramLogoIcon size={19} weight="regular" />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <TiktokLogoIcon size={19} weight="regular" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <YoutubeLogoIcon size={19} weight="regular" />
              </Link>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <PinterestLogoIcon size={19} weight="regular" />
              </Link>
            </div>
          </div>

          {/* Column 1: SHOP */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-black">
              SHOP
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px] text-neutral-600">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="transition-colors hover:text-black"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-black">
              COMPANY
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px] text-neutral-600">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="transition-colors hover:text-black">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-black">
              HELP
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px] text-neutral-600">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="transition-colors hover:text-black">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: STAY IN MOTION (with vertical border divider) */}
          <div className="lg:border-l lg:border-neutral-200 lg:pl-8 xl:pl-12">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-black">
              STAY IN MOTION
            </h3>

            <p className="mt-3 max-w-[280px] text-[13px] leading-relaxed text-neutral-600">
              Be the first to know about new collections, exclusive drops, and
              special offers.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 flex max-w-sm gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full min-w-0 rounded border border-neutral-300 bg-white px-3.5 py-2 text-[13px] text-black placeholder:text-neutral-400 focus:border-black focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded bg-black px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </button>
            </form>

            <div className="mt-3 flex items-center gap-2">
              <input
                type="checkbox"
                id="footer-marketing-consent"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="size-3.5 rounded border-neutral-300 text-black accent-black focus:ring-black"
              />
              <label
                htmlFor="footer-marketing-consent"
                className="select-none text-[12px] text-neutral-500"
              >
                I agree to receive marketing emails.
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider & Content */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-neutral-200 pt-7 sm:mt-16 sm:flex-row sm:items-center sm:gap-4">
          {/* Copyright */}
          <p className="text-[12px] text-neutral-500">
            © 2024 MOTION. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6 text-[12px] text-neutral-500">
            <Link
              href="#"
              className="transition-colors hover:text-black focus-visible:outline-1 focus-visible:outline-black"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-black focus-visible:outline-1 focus-visible:outline-black"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-black focus-visible:outline-1 focus-visible:outline-black"
            >
              Cookies
            </Link>
          </div>

          {/* Payment Method Badges */}
          <div
            aria-label="Accepted payment methods"
            className="flex items-center gap-3.5 text-neutral-800"
          >
            {/* Visa */}
            <span
              className="font-bold italic tracking-wider text-[#1434cb]"
              style={{ fontSize: "14px", fontFamily: "sans-serif" }}
              aria-label="Visa"
            >
              VISA
            </span>

            {/* Mastercard */}
            <svg
              className="h-4.5 w-auto"
              viewBox="0 0 32 20"
              fill="none"
              aria-label="Mastercard"
            >
              <circle cx="10" cy="10" r="10" fill="#EB001B" />
              <circle cx="22" cy="10" r="10" fill="#F79E1B" />
              <path
                d="M16 3.1A9.95 9.95 0 0 1 19.8 10 9.95 9.95 0 0 1 16 16.9 9.95 9.95 0 0 1 12.2 10 9.95 9.95 0 0 1 16 3.1Z"
                fill="#FF5F00"
              />
            </svg>

            {/* Apple Pay */}
            <div
              className="flex items-center text-xs font-semibold text-black"
              aria-label="Apple Pay"
            >
              <svg
                className="mr-0.5 h-3.5 w-auto"
                viewBox="0 0 170 170"
                fill="currentColor"
              >
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.71-7.96-12.02-14.64-6.42-9.9-11.45-20.94-15.09-33.11-3.64-12.18-5.46-23.77-5.46-34.78 0-14.77 3.5-27.17 10.51-37.21s16.27-15.17 27.79-15.4c4.68-.08 10.22 1.25 16.63 3.99 6.4 2.74 10.56 4.16 12.47 4.27 1.48-.12 5.9-1.64 13.25-4.57s13.43-4.22 18.23-3.87c13.7.67 24.38 5.76 32.04 15.28-11.96 7.24-17.84 17.1-17.63 29.58.21 9.87 4.04 18.06 11.48 24.58 7.44 6.52 16.32 10.15 26.64 10.89-2.34 6.94-5.27 14.15-8.8 21.63zM119.22 33.64c0-7.23 2.65-14.07 7.96-20.52 5.3-6.45 11.9-10.82 19.78-13.12.87 7.02-.97 13.78-5.52 20.27-4.56 6.49-11.42 10.95-20.57 13.37-.47-0.01-1.02-0.01-1.65 0z" />
              </svg>
              <span>Pay</span>
            </div>

            {/* Google Pay */}
            <div
              className="flex items-center text-xs font-semibold text-neutral-700"
              aria-label="Google Pay"
            >
              <svg className="mr-0.5 h-3.5 w-auto" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              <span>Pay</span>
            </div>

            {/* PayPal */}
            <div
              className="flex items-center text-xs font-bold italic"
              aria-label="PayPal"
            >
              <span className="text-[#003087]">Pay</span>
              <span className="text-[#0079C1]">Pal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
