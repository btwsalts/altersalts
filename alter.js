// ================= ELEMENTS =================
const splash = document.getElementById("splash");
const passwordScreen = document.getElementById("password-screen");
const input = document.getElementById("passwordInput");
const btn = document.getElementById("passwordBtn");
const error = document.getElementById("passwordError");
const site = document.getElementById("site-content");

// 1. Initial State: Hide the site immediately
if (site) {
  site.style.display = "none";
  site.style.opacity = "0";
}

// ================= SPLASH → PASSWORD CROSS-FADE =================
// This runs automatically after the splash animation finishes
setTimeout(() => {
  if (splash) {
    splash.style.transition = "opacity 1.2s ease";
    splash.style.opacity = "0";
  }

  // EASE IN: Show the password screen as the splash fades
  if (passwordScreen) {
    passwordScreen.classList.add("fade-in");
  }

  // Remove splash from DOM so it doesn't block clicks
  setTimeout(() => {
    if (splash) splash.remove();
  }, 1200);
}, 3800);

// ================= PASSWORD LOGIC =================
function checkPassword() {
  // .trim().toLowerCase() makes the password entry more user-friendly
  if (input.value.trim().toLowerCase() === "yousaf") {
    error.style.display = "none";

    // 1. Fade out password screen
    passwordScreen.style.transition = "opacity 0.8s ease";
    passwordScreen.style.opacity = "0";

    setTimeout(() => {
      passwordScreen.remove();

      // 2. Reveal and fade in the site
      if (site) {
        site.style.display = "block";
        // Small delay to ensure display:block is applied before opacity starts
        setTimeout(() => {
          site.style.transition = "opacity 1.5s ease";
          site.style.opacity = "1";
        }, 50);
      }
    }, 800);
  } else {
    // Show error if password is wrong
    error.style.display = "block";
    input.value = ""; // Clear input for retry
  }
}

// Event Listeners
if (btn) btn.addEventListener("click", checkPassword);
if (input) {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkPassword();
  });
}

// ================= RAIN AUDIO =================
const audio = document.getElementById("rainAudio");
const audioBtn = document.getElementById("audioToggle");

if (audio && audioBtn) {
  audio.volume = 0.2;
  audioBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      audioBtn.textContent = "🔇 Stop Rain";
    } else {
      audio.pause();
      audioBtn.textContent = "🔊 Make it Rain";
    }
  });
}

// ================= STICKY NAV (BULLETPROOF) =================
const nav = document.querySelector(".nav-options");

if (nav) {
  const navOffset = nav.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= navOffset - 12) {
      nav.classList.add("is-sticky");
    } else {
      nav.classList.remove("is-sticky");
    }
  });
}

const cursorDot = document.querySelector(".cursor-dot");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let targetX = x;
let targetY = y;
let animationFrame = null;

const speed = 0.22; // smoothness (0.1 = slow, 0.3 = fast)

function animate() {
  x += (targetX - x) * speed;
  y += (targetY - y) * speed;

  cursorDot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

  animationFrame = requestAnimationFrame(animate);
}

window.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;

  cursorDot.style.opacity = "1";

  if (!animationFrame) {
    animationFrame = requestAnimationFrame(animate);
  }
});

window.addEventListener("mouseleave", () => {
  cursorDot.style.opacity = "0";
});

window.addEventListener("blur", () => {
  cursorDot.style.opacity = "0";
});
