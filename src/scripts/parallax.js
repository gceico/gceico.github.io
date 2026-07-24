// Vanilla replacement for the old react-spring `useMouseSpring` parallax.
// Elements with [data-parallax] translate by (mouse - viewport-center) / size,
// smoothed with a lerp. Honors prefers-reduced-motion.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) {
  const els = Array.from(document.querySelectorAll('[data-parallax]'));
  if (els.length) {
    const EPSILON = 0.01;
    let tx = 0, ty = 0, cx = 0, cy = 0, running = false;
    const startTick = () => {
      if (running) return;
      running = true;
      requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', (e) => {
      tx = e.clientX - window.innerWidth / 2;
      ty = e.clientY - window.innerHeight / 2;
      startTick();
    }, { passive: true });
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      for (const el of els) {
        const s = Number(el.dataset.parallax) || 32;
        el.style.transform = `translate3d(${cx / s}px, ${cy / s}px, 0)`;
      }
      if (Math.abs(tx - cx) < EPSILON && Math.abs(ty - cy) < EPSILON) {
        running = false;
        return;
      }
      requestAnimationFrame(tick);
    };
  }
}
