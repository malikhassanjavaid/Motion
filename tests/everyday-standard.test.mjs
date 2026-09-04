import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("renders the Everyday Standard as one accessible six-category collection row", async () => {
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
    /<div[^>]*data-category-row="true"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/div>/,
  );
  assert.ok(row, "expected one responsive category row");
  assert.match(row[1], /(?:^| )flex(?: |$)/);
  assert.match(row[1], /overflow-x-auto/);

  const cards = section[2].match(/<figure[^>]*data-category-card="true"/g);
  assert.equal(cards?.length, 6, "expected six equally sized category cards");

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
