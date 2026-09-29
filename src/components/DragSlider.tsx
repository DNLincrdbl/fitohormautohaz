"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function DragSlider({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef({
    on: false,
    moved: false,
    startX: 0,
    startScroll: 0,
    lastX: 0,
    lastT: 0,
    vel: 0,
  });
  const inertia = useRef(0);

  const animateTo = (to: number, duration = 680) => {
    const el = scroller.current;
    if (!el) return;
    cancelAnimationFrame(inertia.current);
    const from = el.scrollLeft;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    const target = Math.max(0, Math.min(max, to));
    const dist = target - from;
    if (Math.abs(dist) < 0.5) return;
    const start = performance.now();
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - (2 - 2 * t) ** 3 / 2;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      el.scrollLeft = from + dist * ease(t);
      if (t < 1) inertia.current = requestAnimationFrame(tick);
    };
    inertia.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const stopInertia = () => cancelAnimationFrame(inertia.current);

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch" || e.button !== 0) return;
      stopInertia();
      drag.current = {
        on: true,
        moved: false,
        startX: e.clientX,
        startScroll: el.scrollLeft,
        lastX: e.clientX,
        lastT: performance.now(),
        vel: 0,
      };
    };

    const onMove = (e: PointerEvent) => {
      const d = drag.current;
      if (!d.on) return;
      const dx = e.clientX - d.startX;
      if (!d.moved && Math.abs(dx) > 4) {
        d.moved = true;
        el.setPointerCapture(e.pointerId);
        el.classList.add("is-dragging");
      }
      if (!d.moved) return;
      e.preventDefault();
      const now = performance.now();
      el.scrollLeft = d.startScroll - dx;
      const dt = Math.max(1, now - d.lastT);
      d.vel = (e.clientX - d.lastX) / dt;
      d.lastX = e.clientX;
      d.lastT = now;
    };

    const onUp = (e: PointerEvent) => {
      const d = drag.current;
      if (!d.on) return;
      d.on = false;
      el.classList.remove("is-dragging");
      if (el.hasPointerCapture(e.pointerId)) {
        el.releasePointerCapture(e.pointerId);
      }
      if (!d.moved) return;

      let vel = -d.vel;
      let last = performance.now();
      const tick = (t: number) => {
        const dt = t - last;
        last = t;
        vel *= Math.pow(0.0025, dt / 1000);
        if (Math.abs(vel) < 0.02) return;
        const max = el.scrollWidth - el.clientWidth;
        el.scrollLeft = Math.max(0, Math.min(max, el.scrollLeft + vel * dt));
        inertia.current = requestAnimationFrame(tick);
      };
      inertia.current = requestAnimationFrame(tick);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove, { passive: false });
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      stopInertia();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const scrollByTile = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const tiles = [...el.querySelectorAll<HTMLElement>("[data-slide]")];
    if (!tiles.length) return;
    const origin = tiles[0].offsetLeft;
    const positions = tiles.map((tile) => tile.offsetLeft - origin);
    const pos = el.scrollLeft;
    let i = 0;
    let best = Infinity;
    positions.forEach((p, n) => {
      const d = Math.abs(p - pos);
      if (d < best) {
        best = d;
        i = n;
      }
    });
    const next = Math.max(0, Math.min(positions.length - 1, i + dir));
    animateTo(positions[next]);
  };

  const arrow =
    "flex h-11 w-11 items-center justify-center rounded-full bg-white text-[20px] text-ink shadow-[0_1px_2px_rgba(0,0,0,.08)] hover:bg-[#f6f6f6]";

  return (
    <section className={`border-t border-line bg-[#f4f4f4] py-16 sm:py-20 ${className}`}>
      <div className="mx-auto mb-8 flex max-w-[1400px] items-end justify-between gap-4 px-4 sm:mb-10 sm:px-6">
        <div>
          {eyebrow ? (
            <p className="text-[14px] font-medium text-muted">{eyebrow}</p>
          ) : null}
          <h2 className="mt-1 text-[28px] font-medium tracking-tight sm:text-[36px]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-[14px] text-muted">{subtitle}</p>
          ) : null}
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className={arrow}
            aria-label="Előző"
            onClick={() => scrollByTile(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className={arrow}
            aria-label="Következő"
            onClick={() => scrollByTile(1)}
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="ref-slider flex gap-5 px-4 sm:px-6"
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
        onDragStart={(e) => e.preventDefault()}
      >
        {children}
      </div>
    </section>
  );
}
