import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("renders the exact MOTION footer replica with brand info, columns, newsletter, and payments", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const footer = html.match(
    /<footer[^>]*aria-label="Site footer"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/footer>/,
  );

  assert.ok(footer, "expected a rendered site footer");
  assert.match(footer[1], /bg-white/);
  assert.match(footer[2], />MOTION</);
  assert.match(footer[2], />The Everyday Standard</);
  assert.match(
    footer[2],
    /Modern essentials for a more intentional tomorrow\./,
  );
  assert.match(footer[2], />SHOP</);
  assert.match(footer[2], />COMPANY</);
  assert.match(footer[2], />HELP</);
  assert.match(footer[2], />STAY IN MOTION</);
  assert.match(
    footer[2],
    /Be the first to know about new collections, exclusive drops, and special offers\./,
  );
  assert.match(footer[2], /placeholder="Enter your email"/);
  assert.match(footer[2], />Subscribe</);
  assert.match(footer[2], /I agree to receive marketing emails\./);
  assert.match(footer[2], /© 2024 MOTION\. All rights reserved\./);
  assert.match(footer[2], />Privacy Policy</);
  assert.match(footer[2], />Terms of Service</);
  assert.match(footer[2], />Cookies</);
  assert.match(footer[2], /aria-label="Accepted payment methods"/);
  assert.match(footer[2], /VISA/);
  assert.match(footer[2], /aria-label="Mastercard"/);
  assert.match(footer[2], /aria-label="Apple Pay"/);
  assert.match(footer[2], /aria-label="Google Pay"/);
  assert.match(footer[2], /aria-label="PayPal"/);

  const sweatshirtIndex = html.indexOf('data-section="sweatshirt-focus"');
  const footerIndex = html.indexOf('aria-label="Site footer"');
  assert.ok(sweatshirtIndex >= 0, "expected sweatshirt focus section");
  assert.ok(
    footerIndex > sweatshirtIndex,
    "expected footer at the bottom of the page",
  );
});
