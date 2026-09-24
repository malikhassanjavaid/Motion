"use client";

import { BagIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

type Category = "all" | "crewneck" | "feature";

const categoryFilters: { label: string; value: Category }[] = [
  { label: "All Sweatshirts", value: "all" },
  { label: "Crewnecks", value: "crewneck" },
  { label: "Zip & Relaxed", value: "feature" },
];

const sweatshirts = [
  {
    name: "Heritage Crew Sweatshirt",
    fit: "Regular fit | Men",
    price: "PKR 4,990",
    image: "/images/sweatshirts/sweatshirt-01-navy-crewneck.png",
    alt: "Navy heavyweight crewneck sweatshirt",
    category: "crewneck",
    swatches: ["bg-[#152b45]", "bg-[#d6d0c3]"],
  },
  {
    name: "Quarter Zip Sweatshirt",
    fit: "Regular fit | Men",
    price: "PKR 5,990",
    image: "/images/sweatshirts/sweatshirt-02-burgundy-quarter-zip.png",
    alt: "Burgundy quarter-zip sweatshirt",
    category: "feature",
    swatches: ["bg-[#6b1727]", "bg-[#151515]"],
  },
  {
    name: "Relaxed Oversized Sweatshirt",
    fit: "Relaxed fit | Unisex",
    price: "PKR 5,490",
    image: "/images/sweatshirts/sweatshirt-03-stone-oversized.png",
    alt: "Warm stone oversized crewneck sweatshirt",
    category: "feature",
    swatches: ["bg-[#b5aa98]", "bg-[#e7e1d7]"],
  },
  {
    name: "Tonal Graphic Sweatshirt",
    fit: "Regular fit | Men",
    price: "PKR 5,990",
    image: "/images/sweatshirts/sweatshirt-04-forest-tonal.png",
    alt: "Forest green sweatshirt with tonal geometric embroidery",
    category: "crewneck",
    swatches: ["bg-[#183c31]", "bg-[#767d5d]"],
  },
  {
    name: "Mock Neck Sweatshirt",
    fit: "Regular fit | Men",
    price: "PKR 5,490",
    image: "/images/sweatshirts/sweatshirt-05-cobalt-mock-neck.png",
    alt: "Cobalt blue mock-neck sweatshirt",
    category: "feature",
    swatches: ["bg-[#1f51a7]", "bg-[#bdc9d7]"],
  },
  {
    name: "Textured Crew Sweatshirt",
    fit: "Regular fit | Men",
    price: "PKR 5,790",
    image: "/images/sweatshirts/sweatshirt-06-charcoal-textured.png",
    alt: "Charcoal marl textured crewneck sweatshirt",
    category: "crewneck",
    swatches: ["bg-[#3a3b3d]", "bg-[#8b8d8f]"],
  },
] as const;

export function SweatshirtFocus() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [addedProducts, setAddedProducts] = useState<string[]>([]);

  const visibleSweatshirts =
    activeCategory === "all"
      ? sweatshirts
      : sweatshirts.filter((product) => product.category === activeCategory);

  const toggleProduct = (productName: string) => {
    setAddedProducts((current) =>
      current.includes(productName)
        ? current.filter((name) => name !== productName)
        : [...current, productName],
    );
  };

  return (
    <section
      id="sweatshirt-focus"
      data-section="sweatshirt-focus"
      aria-labelledby="sweatshirt-focus-title"
      className="mt-12 bg-white text-[#111] sm:mt-16 lg:mt-24 lg:grid lg:grid-cols-[34%_minmax(0,1fr)] lg:items-stretch lg:gap-2 lg:overflow-hidden"
    >
      <figure className="relative aspect-[4/5] overflow-hidden bg-[#eef2f4] sm:aspect-[5/6] lg:h-full lg:min-h-[44rem] lg:aspect-auto">
        <Image
          src="/images/sweatshirts/sweatshirt-model-campaign.png"
          alt="Male model wearing a charcoal crewneck sweatshirt with olive cargo trousers"
          fill
          sizes="(min-width: 1024px) 34vw, 100vw"
          className="object-cover object-center"
        />
      </figure>

      <div className="min-w-0 bg-white">
        <header className="px-5 py-8 sm:px-8 sm:py-10 lg:min-h-[10rem] lg:px-6 lg:py-4 xl:px-8">
          <h2
            id="sweatshirt-focus-title"
            className="text-[clamp(1.75rem,1.7vw,2.15rem)] font-bold leading-[1.05] tracking-[-0.04em]"
          >
            Sweatshirts in Focus
          </h2>

          <nav
            aria-label="Filter sweatshirts"
            className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px] leading-tight sm:text-base lg:mt-3 lg:block"
          >
            {categoryFilters.map((filter) => {
              const isActive = activeCategory === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(filter.value)}
                  className={`block w-fit py-0.5 text-left transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                    isActive ? "font-bold underline underline-offset-2" : "font-normal"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </nav>
        </header>

        <div
          data-sweatshirt-rail="true"
          aria-label="Sweatshirt collection"
          tabIndex={0}
          className="grid snap-x snap-mandatory grid-flow-col auto-cols-[82%] gap-2 overflow-x-auto overscroll-x-contain px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[48%] sm:px-8 lg:auto-cols-[38%] lg:px-0 xl:auto-cols-[28%]"
        >
          {visibleSweatshirts.map((product) => {
            const isAdded = addedProducts.includes(product.name);

            return (
              <article
                key={product.name}
                data-sweatshirt-card="true"
                className="min-w-0 snap-start bg-white"
              >
                <div className="relative aspect-[2/3] overflow-hidden bg-[#eef1f3]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1280px) 19vw, (min-width: 1024px) 25vw, (min-width: 640px) 48vw, 82vw"
                    className="object-contain p-[10%] transition-transform duration-500 ease-out hover:scale-[1.025] motion-reduce:transition-none"
                  />
                </div>

                <div className="min-h-[7.5rem] px-4 py-4">
                  <h3 className="truncate text-[12px] font-medium uppercase leading-tight tracking-[-0.01em]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.1em] text-black/60">
                    {product.fit}
                  </p>
                  <p className="mt-1.5 text-[12px] font-bold tracking-[0.01em]">
                    {product.price}
                  </p>

                  <div className="mt-2.5 flex items-center justify-between">
                    <div className="flex gap-1.5" aria-label="Available colors">
                      {product.swatches.map((swatch) => (
                        <span
                          key={swatch}
                          aria-hidden="true"
                          className={`size-3 border border-black/70 ${swatch}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      aria-label={`${isAdded ? "Remove" : "Add"} ${product.name} ${isAdded ? "from" : "to"} bag`}
                      aria-pressed={isAdded}
                      onClick={() => toggleProduct(product.name)}
                      className={`flex size-8 items-center justify-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                        isAdded
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-white text-black hover:border-black"
                      }`}
                    >
                      <BagIcon aria-hidden="true" size={16} weight="light" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
