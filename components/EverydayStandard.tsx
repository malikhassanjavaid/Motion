import Image from "next/image";
import { Anton, Libre_Bodoni } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
});

const categories = [
  {
    label: "T-Shirts",
    image: "/images/motion-category-tshirts.png",
    alt: "Man wearing a crisp white T-shirt with dark tailored trousers",
    imagePosition: "object-center",
  },
  {
    label: "Polos",
    image: "/images/motion-category-polos.png",
    alt: "Man wearing a burgundy polo shirt with dark tailored trousers",
    imagePosition: "object-center",
  },
  {
    label: "Women",
    image: "/images/motion-category-women.png",
    alt: "Woman wearing a pink striped T-shirt with light blue jeans",
    imagePosition: "object-[62%_center]",
  },
  {
    label: "Hoodies",
    image: "/images/motion-category-hoodies.png",
    alt: "Man wearing a dark olive hoodie and matching tracksuit trousers",
    imagePosition: "object-center",
  },
  {
    label: "Knitwear",
    image: "/images/motion-category-knitwear.png",
    alt: "Man wearing a cream knit top with relaxed blue jeans",
    imagePosition: "object-center",
  },
  {
    label: "Sweatshirts",
    image: "/images/motion-category-sweatshirts.png",
    alt: "Man wearing a dark green MOTION crewneck sweatshirt",
    imagePosition: "object-center",
  },
] as const;

import { CONTAINER_CLASS } from "./Container";

export function EverydayStandard() {
  return (
    <section
      id="everyday-standard"
      data-section="everyday-standard"
      aria-labelledby="everyday-standard-title"
      className="bg-white py-12 text-black sm:py-16 lg:py-20"
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
            id="everyday-standard-title"
            className={`${libreBodoni.className} mt-2 text-[clamp(1.4rem,2.5vw,2.75rem)] font-normal leading-tight tracking-[-0.025em] text-neutral-800 sm:mt-3`}
          >
            The Everyday Standard
          </h2>
        </header>

        <div
          data-category-row="true"
          aria-label="Shop by category"
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4 lg:grid lg:grid-cols-6 lg:gap-3 xl:gap-4 lg:overflow-visible"
        >
          {categories.map((category) => (
            <figure
              key={category.label}
              data-category-card="true"
              className="group relative aspect-[3/4] w-[70vw] max-w-[20rem] shrink-0 snap-center overflow-hidden bg-neutral-100 sm:w-[40vw] lg:w-auto lg:max-w-none transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={category.image}
                alt={category.alt}
                fill
                sizes="(min-width: 1024px) 17vw, (min-width: 640px) 40vw, 70vw"
                className={`object-cover transition-transform duration-500 ease-out motion-reduce:transition-none lg:group-hover:scale-[1.03] ${category.imagePosition}`}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 px-3.5 pb-3.5 text-[11px] font-semibold uppercase leading-none tracking-[0.16em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:px-4 sm:pb-4 sm:text-[12px]">
                {category.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
