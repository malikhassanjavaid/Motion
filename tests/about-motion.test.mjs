import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("renders the About MOTION section above the footer with white background and margins", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const section = html.match(
    /<section[^>]*data-section="about-motion"[^>]*aria-labelledby="about-motion-title"[^>]*class="([^"]+)"[^>]*>([\s\S]*?)<\/section>/,
  );

  assert.ok(section, "expected the About MOTION section above the footer");
  assert.match(section[1], /bg-white/);
  assert.match(section[1], /my-12/);
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

  const editorialIndex = html.indexOf('data-section="editorial-split"');
  const aboutIndex = html.indexOf('data-section="about-motion"');
  const footerIndex = html.indexOf('aria-label="Site footer"');

  assert.ok(editorialIndex >= 0, "expected editorial split section on page");
  assert.ok(aboutIndex > editorialIndex, "expected about section below editorial split");
  assert.ok(footerIndex > aboutIndex, "expected about section directly above footer");
});
