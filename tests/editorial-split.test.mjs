import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("renders the editorial split-image section directly above the footer", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const section = html.match(
    /<section[^>]*data-section="editorial-split"[^>]*aria-label="Editorial Collections"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/section>/,
  );

  assert.ok(section, "expected a rendered editorial split section");
  assert.match(section[2], />Polos<\/h2>/);
  assert.match(section[2], /REFINED FOR EVERYDAY/);
  assert.match(section[2], />SHOP POLOS</);

  assert.match(section[2], />T-Shirts<\/h2>/);
  assert.match(section[2], /MODERN ESSENTIALS/);
  assert.match(section[2], />SHOP T-SHIRTS</);

  assert.match(section[2], /polos-kitchen\.jpg/);
  assert.match(section[2], /tshirts-office\.jpg/);

  const sweatshirtIndex = html.indexOf('data-section="sweatshirt-focus"');
  const editorialIndex = html.indexOf('data-section="editorial-split"');
  const footerIndex = html.indexOf('aria-label="Site footer"');

  assert.ok(sweatshirtIndex >= 0, "expected sweatshirt focus section");
  assert.ok(editorialIndex > sweatshirtIndex, "expected editorial section after sweatshirt focus");
  assert.ok(footerIndex > editorialIndex, "expected editorial section directly above footer");
});
