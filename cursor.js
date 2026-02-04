function initCursor() {
  let cursorDot = document.querySelector(".cursor-dot");

  if (!cursorDot) {
    cursorDot = document.createElement("div");
    cursorDot.className = "cursor-dot";
    cursorDot.setAttribute("aria-hidden", "true");
    document.body.appendChild(cursorDot);
  }

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let targetX = x;
  let targetY = y;
  let animationFrame = null;

  const speed = 0.22;

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
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCursor);
} else {
  initCursor();
}
