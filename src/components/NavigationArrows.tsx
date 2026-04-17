"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useCallback, useState } from "react";
import { getNext, getPrev } from "@/lib/navigation";
import Image from "next/image";

const SWIPE_THRESHOLD = 80; // px to trigger navigation

/** How far the user has pulled as a 0-1 progress ratio (capped at 1) */
function dragProgress(dx: number): number {
  return Math.min(Math.abs(dx) / SWIPE_THRESHOLD, 1);
}

export default function NavigationArrows() {
  const pathname = usePathname();
  const router = useRouter();

  const next = getNext(pathname);
  const prev = getPrev(pathname);

  // ── Swipe state ─────────────────────────────────────────────────────────
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [hint, setHint] = useState<{
    dir: "left" | "right";
    progress: number; // 0-1
  } | null>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
    setHint(null);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!touchStart.current) return;
      const t = e.touches[0];
      const dx = t.clientX - touchStart.current.x;
      const dy = t.clientY - touchStart.current.y;

      // Only horizontal swipes
      if (Math.abs(dy) > Math.abs(dx)) {
        setHint(null);
        return;
      }

      if (dx < -8 && next) {
        // Swiping left → show right arrow (next)
        setHint({ dir: "right", progress: dragProgress(dx) });
      } else if (dx > 8 && prev) {
        // Swiping right → show left arrow (prev)
        setHint({ dir: "left", progress: dragProgress(dx) });
      } else {
        setHint(null);
      }
    },
    [next, prev]
  );

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!touchStart.current) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - touchStart.current.x;
      const dy = t.clientY - touchStart.current.y;
      touchStart.current = null;
      setHint(null);

      if (Math.abs(dy) > Math.abs(dx)) return; // vertical scroll
      if (Math.abs(dx) < SWIPE_THRESHOLD) return; // too short

      if (dx < 0 && next) router.push(next);
      else if (dx > 0 && prev) router.push(prev);
    },
    [next, prev, router]
  );

  // ── Idle timer ──────────────────────────────────────────────────────────
  const idleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetIdle = useCallback(() => {
    if (idleRef.current) clearTimeout(idleRef.current);
    idleRef.current = setTimeout(() => {
      if (window.location.pathname !== "/") router.push("/");
    }, 120_000);
  }, [router]);

  // ── Attach listeners ────────────────────────────────────────────────────
  useEffect(() => {
    resetIdle();
    const onActivity = () => resetIdle();

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("pointermove", onActivity, { passive: true });
    window.addEventListener("keydown", onActivity, { passive: true });

    return () => {
      if (idleRef.current) clearTimeout(idleRef.current);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("pointermove", onActivity);
      window.removeEventListener("keydown", onActivity);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd, resetIdle]);

  // ── Render: only the bare chevron, no box ───────────────────────────────
  const isDynamicRoute = /^\/[efg]\d{2}$/i.test(pathname);

  if (isDynamicRoute) {
    return (
      <>
        {prev && (
          <div
            onClick={() => router.push(prev)}
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              backgroundColor: "#3e3f51",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              left: "64px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              zIndex: 200,
            }}
          >
            <Image
              src="/icons/arrow-left.svg"
              width={50}
              height={50}
              alt="Previous"
            />
          </div>
        )}
        {next && (
          <div
            onClick={() => router.push(next)}
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              backgroundColor: "#3e3f51",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              right: "64px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              zIndex: 200,
            }}
          >
            <Image
              src="/icons/arrow-right.svg"
              width={50}
              height={50}
              alt="Next"
            />
          </div>
        )}
      </>
    );
  }

  const visible = hint !== null;
  const opacity = hint ? 0.3 + hint.progress * 0.7 : 0;
  const scale = hint ? 0.7 + hint.progress * 0.35 : 0.7;
  const dir = hint?.dir ?? "right";

  return (
    <>
      {/* Left chevron */}
      <ChevronHint
        direction="left"
        opacity={dir === "left" ? opacity : 0}
        scale={dir === "left" ? scale : 0.7}
        visible={visible && dir === "left"}
      />
      {/* Right chevron */}
      <ChevronHint
        direction="right"
        opacity={dir === "right" ? opacity : 0}
        scale={dir === "right" ? scale : 0.7}
        visible={visible && dir === "right"}
      />
    </>
  );
}

// ── Sub-component ─────────────────────────────────────────────────────────────

interface ChevronHintProps {
  direction: "left" | "right";
  opacity: number;
  scale: number;
  visible: boolean;
}

function ChevronHint({ direction, opacity, scale, visible }: ChevronHintProps) {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: "50%",
        [direction === "left" ? "left" : "right"]: "64px",
        transform: `translateY(-50%) scale(${scale})`,
        opacity,
        // Fast follow during drag, gentle fade-out on release
        transition: visible
          ? "opacity 0.05s linear, transform 0.05s linear"
          : "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: "none",
        zIndex: 200,
        // Just the icon — no background, no border, no box
        filter:
          "drop-shadow(0 0 24px rgba(255,255,255,0.6)) drop-shadow(0 2px 12px rgba(0,0,0,0.25))",
      }}
    >
      <svg
        viewBox="0 0 120 180"
        width="120"
        height="180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "right" ? (
          <path
            d="M32 24L92 90L32 156"
            stroke="white"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M88 24L28 90L88 156"
            stroke="white"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
}
