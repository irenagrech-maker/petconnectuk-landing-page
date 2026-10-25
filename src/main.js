import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const upArrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const heart =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 20-8.1-7.7a5.2 5.2 0 0 1 7.4-7.3l.7.7.7-.7a5.2 5.2 0 0 1 7.4 7.3L12 20Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
const pin =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>';
const book =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
const mark = (className = "") =>
  `<img class="brand-mark ${className}" src="${asset("petconnect-mark.svg")}" width="40" height="38" alt="" />`;
const brand = (className = "") =>
  `<span class="brand ${className}">${mark()}<span>PetConnect<span class="brand-dot">.</span></span></span>`;
const photo = (name, alt, className = "", priority = false) =>
  `<img class="${className}" src="${asset(`${name}-1600.webp`)}" srcset="${asset(`${name}-800.webp`)} 800w, ${asset(`${name}-1600.webp`)} 1600w${priority ? `, ${asset(`${name}-2400.webp`)} 2400w` : ""}" sizes="${priority ? "(max-width: 600px) 1200px, 1700px" : "(max-width: 700px) 100vw, 55vw"}" width="1600" height="${name === "together" ? "658" : "1065"}" alt="${alt}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" />`;

const modes = {
  connect: {
    number: "01",
    title: "Connect",
    line: "Find your kind of pet people.",
    description:
      "The everyday moments. The questions only another pet person gets. A community to share it all with.",
  },
  learn: {
    number: "02",
    title: "Learn",
    line: "A little knowledge. A lot of care.",
    description:
      "Make room for new discoveries, with a dedicated space for pet-care articles and everyday reading.",
  },
  discover: {
    number: "03",
    title: "Discover",
    line: "More to explore, together.",
    description:
      "Explore the idea of finding pet-related places and services on a map. A new way to look around.",
  },
};

document.querySelector("#app").innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="header-inner wrap">
      <a class="brand-link" href="#" aria-label="PetConnect home">${brand()}</a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#the-idea">The idea</a>
        <a href="#explore">Explore the app</a>
        <a href="#businesses">For pet businesses</a>
      </nav>
      <a class="button button-small header-cta" href="#get-the-app">Get the app ${upArrow}</a>
      <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-navigation"><span></span><span></span></button>
    </div>
    <nav id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation" hidden>
      <a href="#the-idea">The idea ${arrow}</a><a href="#explore">Explore the app ${arrow}</a><a href="#businesses">For pet businesses ${arrow}</a><a href="#get-the-app">Get the Polish app ${arrow}</a><a href="#contact">Say hello ${arrow}</a>
    </nav>
  </header>
  <main id="main">
    <section class="hero wrap" aria-labelledby="hero-title">
      <div class="hero-copy">
        <span class="eyebrow"><span class="tiny-paw">${mark()}</span> FOR THE LOVE OF PETS</span>
        <h1 id="hero-title">Their world.<br>Better<br><em>connected.</em></h1>
        <p class="hero-description">Your people. Their favourite places.<br>A little more connection for life with pets.</p>
        <div class="hero-actions"><a class="button" href="#explore">Explore PetConnect ${arrow}</a><a class="text-link" href="#get-the-app">Get the Polish app ${upArrow}</a></div>
        <p class="launch-note"><span class="status-dot"></span> English version in development</p>
      </div>
      <div class="hero-visual">
        <div class="hero-photo-frame">${photo("together", "An owner and her golden retriever enjoying a quiet moment together outdoors", "hero-photo", true)}</div>
        <div class="photo-note">A little company.<br><em>A whole lot of love.</em><span class="note-heart">${heart}</span></div>
      </div>
      <div class="hero-foot"><span>A place for every kind of pet person.</span><a href="#the-idea" aria-label="Scroll to the idea"><span>Meet PetConnect</span><span class="down-arrow">↓</span></a></div>
    </section>

    <section id="the-idea" class="story wrap" aria-labelledby="story-title">
      <div class="story-photo-frame">${photo("little-companion", "An owner resting beside her black and white rabbit", "story-photo")}</div>
      <div class="story-copy"><span class="eyebrow">A SHARED KIND OF LOVE</span><h2 id="story-title">Life with pets<br>is better <em>shared.</em></h2><p>The small questions. The new discoveries. The photos you simply can’t keep to yourself.</p><p>PetConnect brings pet people closer — with a community, everyday knowledge and places to discover, all in one app.</p><a class="text-link" href="#explore">Find your connection ${arrow}</a></div>
    </section>

    <section id="explore" class="experience" aria-labelledby="experience-title">
      <div class="experience-intro wrap"><span class="eyebrow">MEET YOUR NEW CONNECTION</span><h2 id="experience-title">A little look.<br><em>A lot to discover.</em></h2><p>Three ways to feel a little more connected.<br>Choose one and take a look inside.</p></div>
      <div class="experience-track">
        <div class="experience-stage wrap">
          <div class="experience-controls">
            <div class="feature-tabs" role="tablist" aria-label="Explore PetConnect features" aria-orientation="vertical">
              ${Object.entries(modes)
                .map(
                  ([key, item], index) =>
                    `<button id="tab-${key}" class="feature-tab ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="panel-${key}" tabindex="${index === 0 ? "0" : "-1"}" data-mode="${key}"><span class="tab-number">${item.number}</span><span class="tab-label">${item.title}</span><span class="tab-arrow">${arrow}</span></button>`,
                )
                .join("")}
            </div>
            <div class="feature-explanation" aria-live="polite" aria-atomic="true"><h3 id="feature-title">${modes.connect.line}</h3><p id="feature-description">${modes.connect.description}</p></div>
            <p class="preview-disclosure">English concept preview.<br>Illustrative content, based on the Polish app.</p>
          </div>
          <div class="phone-space">
            <div class="photo-plane">${photo("next-adventure", "A couple and their white dog setting off on an adventure", "plane-photo")}<span>For life, together.</span></div>
            <div class="phone-position">
              <div class="phone-device">
                <div class="phone-edge" aria-hidden="true"></div><div class="phone-button" aria-hidden="true"></div>
                <div class="phone-face">
                  <div class="phone-hardware" aria-hidden="true"><span>9:41</span><span class="dynamic-island"></span><span class="phone-signal">▮▮▮ <span class="battery"></span></span></div>
                  <div class="app-header">${mark()}<span>PetConnect</span><span class="app-search" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.6"/><path d="m16 16 5 5" stroke="currentColor" stroke-width="1.6"/></svg></span></div>
                  <section class="app-panel" role="tabpanel" id="panel-connect" aria-labelledby="tab-connect" tabindex="0">
                    <div class="app-greeting">Your daily dose<br>of <em>good company.</em></div>
                    <div class="app-story-row" aria-hidden="true"><span><img src="${asset("together-800.webp")}" alt="" /><small>Everyday</small></span><span><img src="${asset("little-companion-800.webp")}" alt="" /><small>Little joys</small></span><span><img src="${asset("next-adventure-800.webp")}" alt="" /><small>Adventures</small></span></div>
                    <div class="demo-post"><div class="demo-post-label">${mark()}<span>A moment worth sharing<small>Example community post</small></span><span aria-hidden="true">···</span></div><img class="demo-post-photo" src="${asset("next-adventure-800.webp")}" width="800" height="533" alt="A smiling white dog sitting between its owners" /><div class="demo-post-actions"><button id="save-moment" type="button" aria-pressed="false" aria-label="Save this moment in the preview">${heart}<span>Save this moment</span></button><span aria-hidden="true">${arrow}</span></div><p>Best part of the day? This little face.</p><p class="demo-action-status" id="save-status" role="status">Try saving this moment.</p></div>
                  </section>
                  <section class="app-panel" role="tabpanel" id="panel-learn" aria-labelledby="tab-learn" tabindex="0" hidden>
                    <div class="app-greeting">A little more<br><em>understanding.</em></div><p class="app-section-label">YOUR READING CORNER</p>
                    <div class="learn-cover"><img src="${asset("little-companion-800.webp")}" alt="An owner spending time with her rabbit" width="800" height="532" /><span>Everyday care</span></div>
                    <h4 class="learn-title">Getting to know<br>your little companion.</h4><p class="learn-description">A space to discover pet-care articles and explore everyday questions.</p><button class="demo-read-button" id="read-preview" type="button" aria-expanded="false" aria-controls="reading-note">Explore this feature ${arrow}</button><p class="reading-note" id="reading-note" hidden>In PetConnect’s Polish app, the education section brings articles together in one place. This is a feature preview, rather than a published article.</p>
                  </section>
                  <section class="app-panel" role="tabpanel" id="panel-discover" aria-labelledby="tab-discover" tabindex="0" hidden>
                    <div class="app-greeting">A world to<br><em>sniff out.</em></div><div class="map-filters" role="group" aria-label="Illustrative map filter"><button type="button" aria-pressed="true" data-map="places">Places</button><button type="button" aria-pressed="false" data-map="services">Services</button></div>
                    <div class="demo-map" aria-label="Illustrative map, not real locations"><svg class="map-drawing" viewBox="0 0 300 300" aria-hidden="true"><rect width="300" height="300" fill="#f8f1f6"/><path d="m-20 60 350 40M50-20l30 350M190-20l-30 350M-20 210l350-40M-20 280l350-10" stroke="#fff" stroke-width="13"/><path d="M-20 130Q100 60 155 120T320 110" stroke="#e9d5e3" stroke-width="24" fill="none"/><path d="M-20 130Q100 60 155 120T320 110" stroke="#fdfafd" stroke-width="3" fill="none"/><rect x="205" y="196" width="69" height="49" rx="15" fill="#e8d5e2"/><rect x="95" y="16" width="57" height="42" rx="14" fill="#e8d5e2"/></svg><span class="map-pin map-pin-a">${pin}</span><span class="map-pin map-pin-b">${pin}</span><span class="map-pin map-pin-c">${pin}</span><span class="map-you">You</span><span class="map-watermark">Illustrative map</span></div>
                    <div class="map-result" aria-live="polite"><span class="map-result-icon">${pin}</span><div><strong id="map-result-title">Pet-friendly places</strong><p id="map-result-description">More little adventures, together.</p></div></div><p class="map-note">Example locations only. UK listings are not confirmed.</p>
                  </section>
                  <div class="app-bottom-nav" aria-hidden="true"><span data-nav="connect" class="active">${heart}<small>Connect</small></span><span data-nav="learn">${book}<small>Learn</small></span><span data-nav="discover">${pin}<small>Discover</small></span></div>
                  <span class="home-indicator" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="remaining-scenes"></div>
  </main>
`;

const appleIcon =
  '<svg viewBox="0 0 24 26" fill="currentColor" aria-hidden="true"><path d="M17.3 13.8c0-2.7 2.2-4 2.3-4.1-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.1 1-.9 0-2.2-1-3.6-.9-1.8 0-3.5 1.1-4.4 2.7-1.9 3.3-.5 8.2 1.3 10.8.9 1.3 1.9 2.7 3.3 2.7 1.3-.1 1.8-.9 3.5-.9 1.6 0 2.1.9 3.5.8 1.4 0 2.3-1.2 3.2-2.6 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.4-.9-2.4-4.4ZM14.7 5.7c.8-1 1.3-2.3 1.2-3.7-1.2.1-2.6.8-3.5 1.8-.7.8-1.3 2.2-1.2 3.5 1.4.1 2.7-.6 3.5-1.6Z"/></svg>';
const playIcon =
  '<svg viewBox="0 0 24 26" fill="none" aria-hidden="true"><path d="m3 2 18 11L3 24V2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="m3 2 12 15M3 24 15 9" stroke="currentColor" stroke-width="1.2"/></svg>';

document.querySelector("#remaining-scenes").innerHTML = `
  <section id="businesses" class="business" aria-labelledby="business-title">
    <div class="business-inner wrap">
      <div class="business-copy"><span class="eyebrow">FOR THE PEOPLE WHO CARE FOR PETS</span><h2 id="business-title">Your passion.<br>Their next<br><em>favourite place.</em></h2><p>From grooming tables to pet-friendly doorsteps. If your work revolves around animals, we’d love to hear from you.</p><a href="#contact" class="button button-white" id="business-contact">Let’s talk ${arrow}</a><p class="business-categories">Vets · Groomers · Pet shops · Pet-friendly spaces</p></div>
      <div class="business-visual"><div class="business-photo-frame">${photo("next-adventure", "Two owners sharing a happy moment with their white dog", "business-photo")}</div><span class="business-photo-caption">There’s a place for your passion here.</span></div>
    </div>
  </section>

  <section id="get-the-app" class="download wrap" aria-labelledby="download-title">
    <span class="eyebrow">SAME LOVE. A NEW LANGUAGE.</span><h2 id="download-title">Good things<br>are <em>on their way.</em></h2><p class="download-intro">We’re preparing an English version of PetConnect.<br>In the meantime, our Polish app is ready to explore.</p>
    <div class="language-statuses">
      <div class="language-row english-row"><div class="language-heading"><span class="language-code">EN</span><h3>English version</h3></div><div class="language-detail"><span class="status-label"><span class="status-dot"></span> In development</span><p>A new chapter is taking shape.<br>We’ll share more as it comes together.</p></div></div>
      <div class="language-row polish-row"><div class="language-heading"><span class="language-code">PL</span><h3>Polish version</h3></div><div class="language-detail"><span class="status-label"><span class="available-tick" aria-hidden="true">✓</span> Available now</span><p>The app currently works in Polish.</p><div class="store-links"><a class="store-button" href="https://apps.apple.com/us/app/petconnect/id6747425787" target="_blank" rel="noopener noreferrer" aria-label="Download the Polish PetConnect app on the App Store, opens a new tab">${appleIcon}<span><small>Download on the</small><strong>App Store</strong></span>${upArrow}</a><a class="store-button" href="https://play.google.com/store/apps/details?id=com.petconnectapp.app" target="_blank" rel="noopener noreferrer" aria-label="Get the Polish PetConnect app on Google Play, opens a new tab">${playIcon}<span><small>Get it on</small><strong>Google Play</strong></span>${upArrow}</a></div></div></div>
    </div>
  </section>

  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="contact-inner wrap">
      <div class="contact-copy"><span class="eyebrow">SAY HELLO</span><h2 id="contact-title">Good things start<br>with a <em>hello.</em></h2><p>A question, a thought, or a pet-related business to introduce? We’d love to hear it.</p><a class="contact-email" href="mailto:contact@petconnectapp.eu">contact@petconnectapp.eu ${upArrow}</a><p class="contact-small">Pet people. People who work with pets.<br>Everyone starts with a hello.</p></div>
      <form id="contact-form" class="contact-form">
        <div class="form-field"><label for="contact-topic">I’m getting in touch as…</label><select id="contact-topic" name="topic"><option value="Pet owner">A pet owner</option><option value="Pet-related business">A pet-related business</option><option value="Other enquiry">Someone with a question</option></select></div>
        <div class="form-pair"><div class="form-field"><label for="contact-name">Your name</label><input id="contact-name" name="name" autocomplete="name" maxlength="100" required placeholder="Name" /></div><div class="form-field"><label for="contact-email">Your email</label><input id="contact-email" name="email" type="email" autocomplete="email" maxlength="200" required placeholder="you@example.com" /></div></div>
        <div class="form-field"><label for="contact-message">What’s on your mind?</label><textarea id="contact-message" name="message" rows="3" maxlength="3000" required placeholder="Tell us a little about it…"></textarea></div>
        <div class="form-bottom"><button class="button" type="submit">Prepare email draft ${arrow}</button><p id="email-explanation">Opens a draft in your email app.<br>You choose when to send it.</p></div>
        <div id="draft-ready" class="draft-ready" hidden><p role="status">Your draft is ready. Open your email app to review and send it.</p><a id="email-draft-link" class="text-link" href="mailto:contact@petconnectapp.eu">Open email app ${upArrow}</a></div>
      </form>
    </div>
  </section>
`;
document.querySelector("#app").insertAdjacentHTML(
  "beforeend",
  `
  <footer class="site-footer wrap"><div class="footer-main"><a href="#" class="brand-link" aria-label="PetConnect home">${brand()}</a><p>For the love of pets.<br>And the people who love them.</p><a class="text-link" href="https://www.petconnectapp.eu" target="_blank" rel="noopener noreferrer">Our Polish website ${upArrow}</a></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} PetConnect</span><div><a href="https://petconnectapp.eu/regulamin" target="_blank" rel="noopener noreferrer">Terms <span>(Polish)</span></a><a href="https://petconnectapp.eu/politykaprywatnosci" target="_blank" rel="noopener noreferrer">Privacy <span>(Polish)</span></a><a href="#main">Back to top ↑</a></div></div></footer>
`,
);

document.querySelector("#business-contact").addEventListener("click", () => {
  document.querySelector("#contact-topic").value = "Pet-related business";
  document.querySelector("#draft-ready").hidden = true;
});
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const form = new FormData(contactForm);
  const name = String(form.get("name")).trim();
  const message = String(form.get("message")).trim();
  if (!name || !message) {
    const empty = !name
      ? document.querySelector("#contact-name")
      : document.querySelector("#contact-message");
    empty.setCustomValidity(
      "Please add a little text before preparing your draft.",
    );
    empty.reportValidity();
    return;
  }
  const topic = String(form.get("topic"));
  const subject = `PetConnect — ${topic}`;
  const body = `Hello PetConnect,\n\n${message}\n\nName: ${name}\nEmail: ${String(form.get("email")).trim()}\nEnquiry: ${topic}`;
  document.querySelector("#email-draft-link").href =
    `mailto:contact@petconnectapp.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector("#draft-ready").hidden = false;
});
contactForm.addEventListener("input", (event) => {
  if (typeof event.target.setCustomValidity === "function")
    event.target.setCustomValidity("");
  document.querySelector("#draft-ready").hidden = true;
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
reducedMotion.addEventListener("change", (event) => {
  if (event.matches) {
    gsap.killTweensOf(".phone-device");
    gsap.set(".phone-device", { clearProps: "transform" });
  }
});
const menuButton = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector("#mobile-navigation");
function closeMenu() {
  mobileNavigation.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  mobileNavigation.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});
mobileNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileNavigation.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

const tabs = [...document.querySelectorAll(".feature-tab")];
const horizontalTabs = window.matchMedia("(max-width: 600px)");
function updateTabOrientation() {
  document
    .querySelector(".feature-tabs")
    .setAttribute(
      "aria-orientation",
      horizontalTabs.matches ? "horizontal" : "vertical",
    );
}
horizontalTabs.addEventListener("change", updateTabOrientation);
updateTabOrientation();
function selectMode(mode, moveFocus = false) {
  const next = modes[mode];
  if (!next) return;
  tabs.forEach((tab) => {
    const selected = tab.dataset.mode === mode;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.querySelector(`#panel-${tab.dataset.mode}`).hidden = !selected;
    document
      .querySelector(`[data-nav="${tab.dataset.mode}"]`)
      .classList.toggle("active", selected);
    if (selected && moveFocus) tab.focus();
  });
  document.querySelector("#feature-title").textContent = next.line;
  document.querySelector("#feature-description").textContent = next.description;
  document.querySelector(".phone-device").dataset.mode = mode;
  if (!reducedMotion.matches)
    gsap.fromTo(
      ".phone-device",
      { y: 6 },
      {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
        clearProps: "transform",
      },
    );
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectMode(tab.dataset.mode));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex !== undefined) {
      event.preventDefault();
      selectMode(tabs[nextIndex].dataset.mode, true);
    }
  });
});
document.querySelector("#save-moment").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const saved = button.getAttribute("aria-pressed") !== "true";
  button.setAttribute("aria-pressed", String(saved));
  button.setAttribute(
    "aria-label",
    saved
      ? "Remove saved moment from the preview"
      : "Save this moment in the preview",
  );
  button.querySelector("span").textContent = saved
    ? "Saved in this preview"
    : "Save this moment";
  document.querySelector("#save-status").textContent = saved
    ? "Saved locally for this preview only."
    : "Try saving this moment.";
});
document.querySelector("#read-preview").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const expanded = button.getAttribute("aria-expanded") !== "true";
  button.setAttribute("aria-expanded", String(expanded));
  document.querySelector("#reading-note").hidden = !expanded;
  button.innerHTML = expanded
    ? `Close feature note ${arrow}`
    : `Explore this feature ${arrow}`;
});
document.querySelectorAll("[data-map]").forEach((button) =>
  button.addEventListener("click", () => {
    const services = button.dataset.map === "services";
    document
      .querySelectorAll("[data-map]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    document
      .querySelector(".demo-map")
      .classList.toggle("show-services", services);
    document.querySelector("#map-result-title").textContent = services
      ? "Pet-related services"
      : "Pet-friendly places";
    document.querySelector("#map-result-description").textContent = services
      ? "Discover the people who care for pets."
      : "More little adventures, together.";
  }),
);

const media = gsap.matchMedia();
media.add(
  {
    desktop: "(min-width: 901px)",
    mobile: "(max-width: 900px)",
    reduced: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    const { desktop, reduced } = context.conditions;
    if (reduced) return;
    gsap.to(".hero-photo", {
      yPercent: 7,
      scale: 1.08,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });
    gsap.fromTo(
      ".story-photo",
      { yPercent: -5, scale: 1.12 },
      {
        yPercent: 5,
        scale: 1.03,
        ease: "none",
        scrollTrigger: {
          trigger: ".story-photo-frame",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      },
    );
    gsap.fromTo(
      ".business-photo",
      { yPercent: -4, scale: 1.1 },
      {
        yPercent: 4,
        scale: 1.03,
        ease: "none",
        scrollTrigger: {
          trigger: ".business-photo-frame",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      },
    );
    if (desktop) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".experience-track",
          start: "top 110px",
          end: "bottom bottom",
          scrub: 0.75,
          invalidateOnRefresh: true,
        },
      });
      timeline.fromTo(
        ".phone-position",
        { x: 50, y: 25, rotateY: -22, rotateX: 5, rotateZ: 9, scale: 0.93 },
        {
          x: 0,
          y: -12,
          rotateY: 0,
          rotateX: 0,
          rotateZ: -2,
          scale: 1.01,
          ease: "power1.inOut",
          duration: 0.65,
        },
        0,
      );
      timeline.fromTo(
        ".photo-plane",
        { x: 0, y: 15, rotateZ: -3, scale: 1 },
        {
          x: -95,
          y: -22,
          rotateZ: -8,
          scale: 0.86,
          ease: "power1.inOut",
          duration: 0.65,
        },
        0,
      );
      timeline.to(
        ".phone-position",
        {
          y: -24,
          rotateY: 6,
          rotateZ: 0,
          scale: 1,
          ease: "none",
          duration: 0.35,
        },
        0.65,
      );
      timeline.to(
        ".photo-plane",
        {
          x: -110,
          y: -50,
          rotateZ: -9,
          scale: 0.84,
          ease: "none",
          duration: 0.35,
        },
        0.65,
      );
    } else {
      gsap.fromTo(
        ".phone-position",
        { rotateY: -10, rotateZ: 5, y: 15 },
        {
          rotateY: 0,
          rotateZ: 0,
          y: -8,
          ease: "none",
          scrollTrigger: {
            trigger: ".phone-space",
            start: "top 90%",
            end: "center 45%",
            scrub: 0.6,
          },
        },
      );
    }
  },
);

document.fonts.ready.then(() => ScrollTrigger.refresh());
window.addEventListener("load", () => ScrollTrigger.refresh());
