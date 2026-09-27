import { ElementType, ReactNode } from "react";

/**
 * Standard responsive horizontal gutters across the entire MOTION site:
 * - 320px–639px (mobile): px-4 sm:px-6 (16px to 24px)
 * - 640px–767px (large mobile/phablet): sm:px-6 (24px)
 * - 768px–1023px (tablets): md:px-8 (32px)
 * - 1024px–1279px (small laptops): lg:px-12 (48px)
 * - 1280px+ (desktop / monitors): xl:px-16 (64px)
 * Bound by a luxury maximum content width of 1440px.
 */
export const CONTAINER_GUTTERS = "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16";
export const CONTAINER_MAX_WIDTH = "max-w-[1440px] mx-auto w-full";
export const CONTAINER_CLASS = `${CONTAINER_MAX_WIDTH} ${CONTAINER_GUTTERS}`;

/**
 * Standard vertical rhythm between sections:
 * - Mobile: 48px to 56px (py-12 / py-14)
 * - Tablet: 64px to 80px (py-16 / md:py-20)
 * - Desktop: 96px (lg:py-24)
 */
export const SECTION_SPACING = "py-12 sm:py-16 md:py-20 lg:py-24";
export const SECTION_MARGIN = "my-12 sm:my-16 md:my-20 lg:my-24";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`${CONTAINER_CLASS} ${className}`}>
      {children}
    </Component>
  );
}
