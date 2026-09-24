import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("renders the MOTION footer with brand info, newsletter, and links", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const footer = html.match(
    /<footer[^>]*aria-label="Site footer"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/footer>/,
  );

  assert.ok(footer, "expected a rendered site footer");
  assert.match(footer[1], /bg-\[#0d2f26\]/);
  assert.match(footer[2], />MOTION</);
  assert.match(footer[2], /Everyday Luxury &amp; Contemporary Essentials/);
  assert.match(footer[2], /Subscribe to MOTION Dispatches/);
  assert.match(footer[2], /placeholder="Enter your email address"/);
  assert.match(footer[2], /aria-label="Subscribe to newsletter"/);
  assert.match(footer[2], />Collections</);
  assert.match(footer[2], />About MOTION</);
  assert.match(footer[2], />Client Care</);
  assert.match(footer[2], /MOTION Inc. All rights reserved./);

  const sweatshirtIndex = html.indexOf('data-section="sweatshirt-focus"');
  const footerIndex = html.indexOf('aria-label="Site footer"');
  assert.ok(sweatshirtIndex >= 0, "expected sweatshirt focus section");
  assert.ok(
    footerIndex > sweatshirtIndex,
    "expected footer at the bottom of the page",
  );
});
