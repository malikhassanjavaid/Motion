import {
  MagnifyingGlassIcon,
  ShoppingCartSimpleIcon,
  UserIcon,
} from "@phosphor-icons/react/ssr";
import { Anton } from "next/font/google";
import Link from "next/link";
import { CONTAINER_CLASS } from "./Container";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const iconButtonClassName =
  "flex size-10 items-center justify-center rounded-full transition-colors hover:bg-black/[.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

export function Navbar() {
  return (
    <nav
      aria-label="Primary navigation"
      className="flex h-16 w-full shrink-0 items-center border-b border-black/10 bg-white text-black sm:h-[72px]"
    >
      <div className={`${CONTAINER_CLASS} flex items-center justify-between`}>
        <Link
          href="/"
          aria-label="MOTION home"
          className={`${anton.className} text-[32px] leading-none tracking-[-0.5px] text-black sm:text-[36px]`}
        >
          MOTION
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Search"
            className={iconButtonClassName}
          >
            <MagnifyingGlassIcon aria-hidden="true" size={22} weight="light" />
          </button>
          <button
            type="button"
            aria-label="Shopping cart"
            className={iconButtonClassName}
          >
            <ShoppingCartSimpleIcon
              aria-hidden="true"
              size={22}
              weight="light"
            />
          </button>
          <button
            type="button"
            aria-label="Profile"
            className={iconButtonClassName}
          >
            <UserIcon aria-hidden="true" size={22} weight="light" />
          </button>
        </div>
      </div>
    </nav>
  );
}
