"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Set legacy attributes via DOM (TSX doesn't allow non-standard JSX props cleanly)
    v.setAttribute("webkit-playsinline", "true");
    v.setAttribute("x5-playsinline", "true");

    // Force muted as a property — iOS Safari sometimes ignores the React attribute
    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    tryPlay();

    // Fallback: some iOS versions (esp. Low Power Mode) block autoplay until first touch
    const onFirstTouch = () => {
      tryPlay();
      document.removeEventListener("touchstart", onFirstTouch);
      document.removeEventListener("click", onFirstTouch);
    };
    document.addEventListener("touchstart", onFirstTouch, { once: true, passive: true });
    document.addEventListener("click", onFirstTouch, { once: true });

    return () => {
      document.removeEventListener("touchstart", onFirstTouch);
      document.removeEventListener("click", onFirstTouch);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center overflow-hidden relative group">
      <div className="absolute inset-0 w-full h-full z-0 bg-neutral-900 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
