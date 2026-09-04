import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:3000";

test("renders the sale announcement before the main page content", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const announcementPosition = html.indexOf('aria-label="Sale announcement"');
  const mainPosition = html.indexOf("<main");

  assert.notEqual(
    announcementPosition,
    -1,
    "expected a labelled sale announcement",
  );
  assert.match(html, /Summer Sale is Now Live - Shop Now\./);
  assert.ok(
    announcementPosition < mainPosition,
    "expected the sale announcement before the main content",
  );
});

test("renders the MOTION navbar between the announcement and main content", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const announcementPosition = html.indexOf('aria-label="Sale announcement"');
  const navigationPosition = html.indexOf('aria-label="Primary navigation"');
  const mainPosition = html.indexOf("<main");

  assert.notEqual(navigationPosition, -1, "expected the primary navbar");
  assert.match(html, />MOTION</);
  assert.match(html, /aria-label="Search"/);
  assert.match(html, /aria-label="Shopping cart"/);
  assert.match(html, /aria-label="Profile"/);
  assert.ok(
    announcementPosition < navigationPosition && navigationPosition < mainPosition,
    "expected the navbar directly after the announcement and before main content",
  );
});

test("keeps the announcement and navbar compact with a consistent type scale", async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);

  const html = await response.text();
  const announcement = html.match(
    /<aside[^>]*aria-label="Sale announcement"[^>]*class="([^"]+)"/,
  );
  const navigation = html.match(
    /<nav[^>]*aria-label="Primary navigation"[^>]*class="([^"]+)"/,
  );
  const wordmark = html.match(
    /<a[^>]*aria-label="MOTION home"[^>]*class="([^"]+)"/,
  );

  assert.ok(announcement, "expected a rendered sale announcement");
  assert.ok(navigation, "expected a rendered primary navigation");
  assert.ok(wordmark, "expected a rendered MOTION wordmark");

  const announcementClasses = new Set(announcement[1].split(/\s+/));
  const navigationClasses = new Set(navigation[1].split(/\s+/));
  const wordmarkClasses = new Set(wordmark[1].split(/\s+/));

  assert.equal(announcementClasses.has("h-9"), true);
  assert.equal(announcementClasses.has("text-sm"), true);
  assert.equal(navigationClasses.has("h-16"), true);
  assert.equal(navigationClasses.has("sm:h-[72px]"), true);
  assert.equal(wordmarkClasses.has("text-[32px]"), true);
  assert.equal(wordmarkClasses.has("sm:text-[36px]"), true);
  assert.equal(wordmarkClasses.has("tracking-[-0.5px]"), true);
});
