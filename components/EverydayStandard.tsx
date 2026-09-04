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

export function EverydayStandard() {
  return (
    <section
      id="everyday-standard"
      data-section="everyday-standard"
      aria-labelledby="everyday-standard-title"
      className="bg-[#0d2f26] py-14 text-white sm:py-18 lg:py-24"
    >
      <header className="px-5 text-center sm:px-8">
     <p
  aria-hidden="true"
  className={`${anton.className} text-[clamp(2.5rem,4.8vw,5.2rem)] leading-none tracking-[-0.035em] text-white`}
>
  MOTION
</p>

<h2
  id="everyday-standard-title"
  className={`${libreBodoni.className} mt-2 text-[clamp(1.5rem,2.7vw,3.2rem)] font-normal leading-tight tracking-[-0.025em] sm:mt-3`}
>
  The Everyday Standard
</h2>
      </header>

      <div
        data-category-row="true"
        aria-label="Shop by category"
        className="mt-9 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-12 sm:px-8 lg:mt-16 lg:grid lg:grid-cols-6 lg:gap-2 lg:overflow-visible xl:gap-3"
      >
        {categories.map((category) => (
          <figure
            key={category.label}
            data-category-card="true"
            className="group relative aspect-[3/4] w-[72vw] max-w-[21rem] shrink-0 snap-center overflow-hidden bg-black/15 sm:w-[42vw] lg:w-auto lg:max-w-none"
          >
            <Image
              src={category.image}
              alt={category.alt}
              fill
              sizes="(min-width: 1024px) 17vw, (min-width: 640px) 42vw, 72vw"
              className={`object-cover transition-transform duration-500 ease-out motion-reduce:transition-none lg:group-hover:scale-[1.025] ${category.imagePosition}`}
            />
            <figcaption className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 text-[12px] font-semibold uppercase leading-none tracking-[0.18em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] sm:px-5 sm:pb-5 sm:text-[13px]">
              {category.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
