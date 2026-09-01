/* Optional enhancements; content and native controls work without JS. */
(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-track]");
    const cards = [...track.children];
    const previous = carousel.querySelector("[data-prev]");
    const next = carousel.querySelector("[data-next]");
    const counter = carousel.querySelector("[data-counter]");
    const step = () =>
      cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      previous.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
      const index =
        max > 2 && track.scrollLeft >= max - 2
          ? cards.length
          : Math.min(cards.length, Math.round(track.scrollLeft / step()) + 1);
      counter.textContent = `${String(index).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
    };
    const move = (direction) =>
      track.scrollBy({
        left: direction * step(),
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
    previous.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    track.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        move(event.key === "ArrowRight" ? 1 : -1);
      }
    });
    track.addEventListener("scroll", update, { passive: true });
    new ResizeObserver(update).observe(track);
    update();
  });
  const toast = document.querySelector("#toast");
  let toastTimer;
  function notify(message) {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 4000);
  }
  document
    .querySelectorAll("[data-toast]")
    .forEach((button) => button.addEventListener("click", () => notify(button.dataset.toast)));
  document.querySelector("#demo-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    notify("Validation passed. Demo only — nothing was sent or saved.");
  });
  const dialog = document.querySelector("#demo-dialog");
  document.querySelector("[data-open-dialog]")?.addEventListener("click", () => dialog.showModal());
  document.querySelector("[data-close-dialog]")?.addEventListener("click", () => dialog.close());
})();
