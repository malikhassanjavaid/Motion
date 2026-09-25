import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("keeps the original Everyday Standard gallery", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const section = html.match(
    /<section[^>]*data-section="everyday-standard"[^>]*aria-labelledby="everyday-standard-title"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/section>/,
  );

  assert.ok(section, "expected the Everyday Standard section below the hero");
  assert.match(section[1], /bg-\[#0d2f26\]/);
  assert.match(section[2], />MOTION</);
  assert.match(
    section[2],
    /<h2[^>]*id="everyday-standard-title"[^>]*>The Everyday Standard<\/h2>/,
  );

  const row = section[2].match(
    /<div[^>]*data-category-row="true"[^>]*aria-label="Shop by category"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/div>/,
  );
  assert.ok(row, "expected the original responsive category gallery");
  assert.match(row[1], /overflow-x-auto/);

  const cards = section[2].match(/<figure[^>]*data-category-card="true"/g);
  assert.equal(cards?.length, 6, "expected all six original category cards");

  for (const label of [
    "T-Shirts",
    "Polos",
    "Women",
    "Hoodies",
    "Knitwear",
    "Sweatshirts",
  ]) {
    assert.match(section[2], new RegExp(`>${label}<`));
  }

  for (const filename of [
    "motion-category-tshirts.png",
    "motion-category-polos.png",
    "motion-category-women.png",
    "motion-category-hoodies.png",
    "motion-category-knitwear.png",
    "motion-category-sweatshirts.png",
  ]) {
    assert.match(section[2], new RegExp(filename.replace(".", "[.]")));
  }
});

test("renders the eight-polo rail as a separate section beneath the gallery", async () => {
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

  const galleryIndex = html.indexOf('data-section="everyday-standard"');
  const poloIndex = html.indexOf('data-section="polo-collection"');
  assert.ok(galleryIndex >= 0, "expected original gallery on the page");
  assert.ok(poloIndex > galleryIndex, "expected polo rail beneath the gallery");
});
