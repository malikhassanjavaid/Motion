import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("renders the three collection campaigns as one accessible hero carousel", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();

  const shopLinks = html.match(
    /<a[^>]*data-hero-cta="true"[^>]*class="([^"]+)"[^>]*>[\s\S]*?<[/]a>/g,
  );

  assert.match(
    html,
    /<main[^>]*id="collection"[^>]*aria-roledescription="carousel"[^>]*aria-label="Featured collections"/,
  );
  assert.match(html, /THE ESSENTIAL COLLECTION/);
  assert.match(html, /The Modern/);
  assert.match(html, /Polo/);
  assert.match(html, /THE CAMPUS EDIT/);
  assert.match(html, /Campus/);
  assert.match(html, /Essentials/);
  assert.match(html, /THE ACTIVE COLLECTION/);
  assert.match(html, /Play in/);
  assert.match(html, /Motion/);
  assert.equal(shopLinks?.length, 3, "expected one CTA for every campaign");
  assert.ok(
    shopLinks?.every((link) => /(?:^| )border-b(?: |$)/.test(link)),
    "expected every campaign CTA to keep the editorial underline",
  );
  assert.match(html, /SHOP POLOS/);
  assert.match(html, /SHOP T-SHIRTS/);
  assert.match(html, /SHOP ACTIVEWEAR/);
  assert.match(html, /href="#collection"/);
  assert.match(html, /motion-polos-courtyard-hero-hd[.]png/);
  assert.match(html, /motion-campus-essentials-hero-hd[.]png/);
  assert.match(html, /motion-padel-hero-hd[.]png/);
  assert.match(
    html,
    /alt="Two men wearing modern polo shirts in a sunlit courtyard"/,
  );
  const pagination = html.match(
    /<div[^>]*data-hero-pagination="true"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/div>/,
  );
  const paginationButtons = pagination?.[2].match(
    /<button[^>]*aria-label="Go to slide [^"]+"/g,
  );

  assert.ok(pagination, "expected the minimal carousel pagination");
  assert.equal(
    paginationButtons?.length,
    3,
    "expected only one dot button for each campaign",
  );
  assert.doesNotMatch(pagination[1], /(?:^| )bg-/);
  assert.doesNotMatch(pagination[1], /(?:^| )backdrop-/);
  assert.doesNotMatch(html, /aria-label="Previous slide"/);
  assert.doesNotMatch(html, /aria-label="Next slide"/);
  assert.doesNotMatch(html, /aria-label="Pause slideshow"/);
  assert.doesNotMatch(html, /aria-label="Play slideshow"/);
  assert.match(html, /aria-label="Go to slide 1: The Modern Polo"/);
  assert.match(html, /aria-label="Go to slide 2: Campus Essentials"/);
  assert.match(html, /aria-label="Go to slide 3: Play in Motion"/);
  assert.match(
    pagination[2],
    /aria-label="Go to slide 1: The Modern Polo"[^>]*aria-current="true"/,
  );
});

test("art-directs the hero to fill wide and mobile screens", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const hero = html.match(/<main[^>]*aria-label="Featured collections"[^>]*class="([^"]+)"/);
  const pictures = [
    ...html.matchAll(/<picture[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/picture>/g),
  ];

  assert.ok(hero, "expected a rendered hero frame");
  assert.equal(pictures.length, 3, "expected one art-directed picture per slide");
  assert.match(hero[1], /(?:^| )hero-frame(?: |$)/);
  const expectedArtDirection = [
    [
      "motion-polos-courtyard-hero-mobile.png",
      "motion-polos-courtyard-hero-wide-v2.png",
      "motion-polos-courtyard-hero-hd.png",
    ],
    [
      "motion-campus-essentials-hero-mobile.png",
      "motion-campus-essentials-hero-wide.png",
      "motion-campus-essentials-hero-hd.png",
    ],
    [
      "motion-padel-hero-mobile.png",
      "motion-padel-hero-wide.png",
      "motion-padel-hero-hd.png",
    ],
  ];

  pictures.forEach((picture, index) => {
    assert.match(picture[1], /(?:^| )h-full(?: |$)/);
    assert.match(picture[1], /(?:^| )w-full(?: |$)/);
    assert.match(
      picture[2],
      new RegExp(
        `<source[^>]*media="\\(max-width: 639px\\)"[^>]*${expectedArtDirection[index][0].replace(".", "[.]")}`,
      ),
    );
    const wideSource = picture[2].match(
      new RegExp(
        `<source[^>]*media="\\(min-aspect-ratio: (\\d+)\\/(\\d+)\\)"[^>]*${expectedArtDirection[index][1].replace(".", "[.]")}`,
      ),
    );
    assert.ok(wideSource, "expected an aspect-ratio source for wide laptops");
    const reportedLaptopRatio = 1918 / 828;
    const wideSourceThreshold = Number(wideSource[1]) / Number(wideSource[2]);
    assert.ok(
      wideSourceThreshold <= reportedLaptopRatio,
      "expected the reported 1918 × 828 laptop viewport to select the wide hero",
    );
    assert.match(
      picture[2],
      new RegExp(expectedArtDirection[index][2].replace(".", "[.]")),
    );
    assert.match(picture[2], /class="[^"]*object-cover[^"]*"/);
    assert.doesNotMatch(picture[2], /object-contain/);
  });
});
