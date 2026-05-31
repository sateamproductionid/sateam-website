"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

type TypewriterProps = {
  text: string;
  /** ms between each character */
  speed?: number;
  /** ms to wait after entering view before starting */
  delay?: number;
  /** show cursor blinking after text finishes typing */
  cursorAfter?: boolean;
  /** called once typing finishes */
  onDone?: () => void;
  className?: string;
};

export function Typewriter({
  text,
  speed = 45,
  delay = 0,
  cursorAfter = false,
  onDone,
  className = "",
}: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const doneRef = useRef(false);

  // Start (with optional delay) once in view
  useEffect(() => {
    if (!inView || started) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [inView, delay, started]);

  // Tick one character at a time
  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, count, text, speed]);

  // Fire onDone exactly once
  useEffect(() => {
    if (count >= text.length && !doneRef.current && started) {
      doneRef.current = true;
      onDone?.();
    }
  }, [count, text.length, started, onDone]);

  const complete = count >= text.length;
  const visible = text.slice(0, count);
  // Preserve manual line breaks (\n) by splitting into lines
  const lines = visible.split("\n");

  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
      {(!complete || cursorAfter) && (
        <span
          aria-hidden="true"
          className="inline-block w-[0.5ch] h-[0.85em] -mb-[0.05em] ml-[0.05em] bg-current align-middle animate-pulse"
        />
      )}
    </span>
  );
}
