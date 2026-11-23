/* =========================================================
   Kanto Cuts — small, dependency-free interactions
   (Same structure as the café demo: reusable template.)
   1. Mobile navigation toggle
   2. "Open now / Closed" status using Philippine time
   3. Gallery lightbox
   4. Footer year
   ========================================================= */

// ---------- 1. Mobile navigation ----------
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

function setNav(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
}

navToggle.addEventListener("click", () => {
  setNav(navToggle.getAttribute("aria-expanded") !== "true");
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) setNav(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("is-open")) {
    setNav(false);
    navToggle.focus();
  }
});

// ---------- 2. Open-now status ----------
// Edit for each client. 0 = Sunday ... 6 = Saturday. 24-hour clock. null = closed all day.
const HOURS = {
  0: [9, 21], 1: null, 2: [10, 21], 3: [10, 21],
  4: [10, 21], 5: [10, 21], 6: [9, 21],
};
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatHour(h) {
  const suffix = h >= 12 && h < 24 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr} ${suffix}`;
}

function updateOpenStatus() {
  const el = document.querySelector("[data-open-status]");
  if (!el) return;

  // Always use Manila time, even if the visitor's device is set elsewhere
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila", weekday: "short", hour: "numeric", minute: "numeric", hour12: false,
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const now = (Number(get("hour")) % 24) + Number(get("minute")) / 60;

  const today = HOURS[day];
  if (today && now >= today[0] && now < today[1]) {
    el.textContent = `Open now until ${formatHour(today[1])}`;
    el.classList.add("is-open");
    return;
  }

  el.classList.add("is-closed");
  if (today && now < today[0]) {
    el.textContent = `Closed now. Opens today at ${formatHour(today[0])}`;
    return;
  }
  // Find the next day that has hours
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    if (HOURS[d]) {
      const when = i === 1 ? "tomorrow" : DAY_NAMES[d];
      el.textContent = `Closed now. Opens ${when} at ${formatHour(HOURS[d][0])}`;
      return;
    }
  }
}
updateOpenStatus();

// ---------- 3. Gallery lightbox ----------
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".g-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    lightboxImg.src = img.dataset.full || img.src; // larger version if available
    lightboxImg.alt = img.alt;
    lightbox.showModal();
  });
});
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});

// ---------- 4. Footer year ----------
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
