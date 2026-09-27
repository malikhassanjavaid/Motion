import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("renders the About MOTION section beneath the hero", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const section = html.match(
    /<section[^>]*data-section="about-motion"[^>]*aria-labelledby="about-motion-title"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/section>/,
  );

  assert.ok(section, "expected the About MOTION section below the hero");
  assert.match(section[1], /bg-\[#FAF9F5\]/);
  assert.match(section[2], /ABOUT US/);
  assert.match(
    section[2],
    /<h2[^>]*id="about-motion-title"[^>]*>[\s\S]*?More Than[\s\S]*?Clothing[\s\S]*?<\/h2>/,
  );
  assert.match(
    section[2],
    /At MOTION, we believe in modern essentials that move with you\./,
  );
  assert.match(section[2], />OUR STORY</);
  assert.match(section[2], /WATCH OUR STORY/);
  assert.match(section[2], /MOTION IN NUMBERS/);
  assert.match(section[2], />10K\+</);
  assert.match(section[2], /HAPPY CUSTOMERS/);
  assert.match(section[2], />50\+</);
  assert.match(section[2], /PREMIUM STYLES/);
  assert.match(section[2], />1</);
  assert.match(section[2], /CLEAR MISSION/);
  assert.match(section[2], /OUR PURPOSE/);
  assert.match(
    section[2],
    /To create versatile, high-quality clothing for people who value simplicity/,
  );
  assert.match(section[2], /motion-about-woman\.png/);
  assert.match(section[2], /PREMIUM MATERIALS/);
  assert.match(section[2], /Built to last/);
  assert.match(section[2], /TIMELESS DESIGNS/);
  assert.match(section[2], /Made for everyday/);
  assert.match(section[2], /A MORE INTENTIONAL FUTURE/);
  assert.match(section[2], /People\. Purpose\. Progress\./);
});

test("renders the eight-polo rail as a separate section beneath the about section", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const section = html.match(
    /<section[^>]*data-section="polo-collection"[^>]*aria-labelledby="polo-collection-title"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/section>/,
  );

  assert.ok(section, "expected a separate polo collection section");
  assert.match(section[1], /mt-12/);
  assert.match(section[1], /bg-white/);
  assert.match(section[2], />MOTION</);
  assert.match(
    section[2],
    /<h2[^>]*id="polo-collection-title"[^>]*>The Polo Collection<\/h2>/,
  );

  const rail = section[2].match(
    /<div[^>]*data-polo-rail="true"[^>]*aria-label="Polo collection"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/div>/,
  );
  assert.ok(rail, "expected one responsive polo product rail");
  assert.match(rail[1], /grid-flow-col/);
  assert.match(rail[1], /overflow-x-auto/);

  const cards = section[2].match(/<figure[^>]*data-polo-card="true"/g);
  assert.equal(cards?.length, 8, "expected eight equally sized polo cards");

  for (const label of [
    "Navy Pique",
    "Burgundy Tipped",
    "Ivory Long Sleeve",
    "Emerald Performance",
    "Sage Knit",
    "Sky Relaxed",
    "Charcoal Jacquard",
    "Ochre Retro",
  ]) {
    assert.match(section[2], new RegExp(`>${label}<`));
  }

  for (const filename of [
    "polo-01-navy-pique.png",
    "polo-02-burgundy-tipped.png",
    "polo-03-ivory-long-sleeve.png",
    "polo-04-emerald-performance.png",
    "polo-05-sage-knit.png",
    "polo-06-sky-relaxed.png",
    "polo-07-charcoal-jacquard.png",
    "polo-08-ochre-retro.png",
  ]) {
    assert.match(section[2], new RegExp(filename.replace(".", "[.]")));
  }

  assert.match(section[2], /aria-label="Previous polos"/);
  assert.match(section[2], /aria-label="Next polos"/);

  const aboutIndex = html.indexOf('data-section="about-motion"');
  const poloIndex = html.indexOf('data-section="polo-collection"');
  assert.ok(aboutIndex >= 0, "expected about section on the page");
  assert.ok(poloIndex > aboutIndex, "expected polo rail beneath the about section");
});
