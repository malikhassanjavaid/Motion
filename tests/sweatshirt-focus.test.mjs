import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("renders the sweatshirt focus section beneath the existing collections", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const section = html.match(
    /<section[^>]*data-section="sweatshirt-focus"[^>]*aria-labelledby="sweatshirt-focus-title"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/section>/,
  );

  assert.ok(section, "expected a separate sweatshirt focus section");
  assert.match(section[1], /mt-12/);
assert.match(section[1], /lg:grid-cols-\[34%_minmax\(0,1fr\)\]/);
assert.match(section[1], /lg:gap-2/);
  assert.match(
    section[2],
    /<h2[^>]*id="sweatshirt-focus-title"[^>]*>Sweatshirts in Focus<\/h2>/,
  );
  assert.match(section[2], /sweatshirt-model-campaign[.]png/);

  for (const label of [
    "All Sweatshirts",
    "Crewnecks",
    "Zip &amp; Relaxed",
  ]) {
    assert.match(section[2], new RegExp(`>${label}<`));
  }

  const rail = section[2].match(
    /<div[^>]*data-sweatshirt-rail="true"[^>]*aria-label="Sweatshirt collection"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/div>/,
  );

  assert.ok(rail, "expected a horizontally scrollable sweatshirt rail");
  assert.match(rail[1], /grid-flow-col/);
  assert.match(rail[1], /overflow-x-auto/);
  assert.match(rail[1], /xl:auto-cols-\[28%\]/);

  const cards = section[2].match(
    /<article[^>]*data-sweatshirt-card="true"/g,
  );
  assert.equal(cards?.length, 6, "expected six sweatshirt product cards");

  for (const filename of [
    "sweatshirt-01-navy-crewneck.png",
    "sweatshirt-02-burgundy-quarter-zip.png",
    "sweatshirt-03-stone-oversized.png",
    "sweatshirt-04-forest-tonal.png",
    "sweatshirt-05-cobalt-mock-neck.png",
    "sweatshirt-06-charcoal-textured.png",
  ]) {
    assert.match(section[2], new RegExp(filename.replace(".", "[.]")));
  }

  const poloIndex = html.indexOf('data-section="polo-collection"');
  const sweatshirtIndex = html.indexOf('data-section="sweatshirt-focus"');
  assert.ok(poloIndex >= 0, "expected the existing polo collection");
  assert.ok(
    sweatshirtIndex > poloIndex,
    "expected sweatshirt focus beneath the polo collection",
  );
});
