import { gsap } from "gsap";

// Original PetConnect interaction; no React Bits Pro code or registry is used.
const messages = [
  "Meet fellow pet people.",
  "Share happy moments.",
  "Learn about pet care.",
  "Discover places nearby.",
];

function wordsFor(text) {
  const line = document.createElement("span");
  line.className = "vapor-words";
  for (const word of text.split(/(\s+)/)) {
    if (/^\s+$/.test(word)) {
      line.append(document.createTextNode(word));
      continue;
    }
    const group = document.createElement("span");
    group.className = "vapor-word";
    for (const character of word) {
      const letter = document.createElement("span");
      letter.className = "vapor-letter";
      letter.textContent = character;
      group.append(letter);
    }
    line.append(group);
  }
  return line;
}

export function initVaporMessages(root) {
  if (!root) return;
  const button = root.querySelector(".vapor-trigger");
  const stage = root.querySelector(".vapor-stage");
  const status = root.querySelector('[role="status"]');
  const wisps = [...stage.querySelectorAll(".vapor-wisp")];
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const hover = window.matchMedia("(hover: hover)");
  let index = 0;
  let animation;
  let busy = false;
  let lastHover = -Infinity;

  function settle() {
    animation?.kill();
    animation = undefined;
    stage.querySelectorAll(".vapor-words").forEach((line) => line.remove());
    stage.prepend(wordsFor(messages[index]));
    gsap.set(wisps, { clearProps: "all" });
    status.textContent = messages[index];
    button.dataset.messageIndex = String(index);
    button.dataset.animating = "false";
    busy = false;
  }

  function next() {
    // A burst of pointer/click events must never skip unread messages.
    if (busy) return;
    index = (index + 1) % messages.length;
    if (motion.matches) {
      settle();
      return;
    }
    busy = true;
    button.dataset.animating = "true";
    const previous = stage.querySelector(".vapor-words");
    const incoming = wordsFor(messages[index]);
    stage.append(incoming);
    const oldLetters = [...previous.querySelectorAll(".vapor-letter")];
    const newLetters = [...incoming.querySelectorAll(".vapor-letter")];
    gsap.set(newLetters, {
      opacity: 0,
      y: (i) => 12 + (i % 4) * 3,
      x: (i) => ((i % 5) - 2) * 4,
      filter: "blur(9px)",
      scale: 1.12,
    });
    animation = gsap.timeline({ onComplete: settle });
    animation
      .to(oldLetters, {
        opacity: 0,
        y: (i) => -10 - (i % 4) * 5,
        x: (i) => ((i % 5) - 2) * 7,
        filter: "blur(8px)",
        scale: 1.18,
        duration: 0.35,
        stagger: { amount: 0.14, from: "center" },
        ease: "power2.in",
      })
      .fromTo(
        wisps,
        { opacity: 0, x: -12, y: 10, scaleX: 0.6, scaleY: 0.7 },
        {
          opacity: 0.45,
          x: (i) => 10 + i * 9,
          y: (i) => -10 - i * 5,
          scaleX: 1.2,
          scaleY: 1.5,
          duration: 0.35,
          stagger: 0.045,
          ease: "sine.out",
        },
        0.08,
      )
      .to(wisps, { opacity: 0, y: "-=9", duration: 0.4 }, 0.43)
      .to(
        newLetters,
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.6,
          stagger: { amount: 0.18, from: "start" },
          ease: "power2.out",
        },
        0.42,
      );
  }

  const enter = (event) => {
    if (event.pointerType !== "mouse" || !hover.matches || busy) return;
    lastHover = performance.now();
    next();
  };
  const activate = (event) => {
    // Keyboard and touch always activate. Ignore the click immediately after hover.
    if (
      event.detail === 0 ||
      event.pointerType !== "mouse" ||
      performance.now() - lastHover > 1250
    ) {
      next();
    }
  };
  const preferenceChanged = () => {
    if (motion.matches) settle();
  };
  settle();
  button.addEventListener("pointerenter", enter);
  button.addEventListener("click", activate);
  motion.addEventListener("change", preferenceChanged);
  const dispose = () => {
    settle();
    button.removeEventListener("pointerenter", enter);
    button.removeEventListener("click", activate);
    motion.removeEventListener("change", preferenceChanged);
  };
  if (import.meta.hot) import.meta.hot.dispose(dispose);
}
