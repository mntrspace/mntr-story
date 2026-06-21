"use client";

import { useEffect } from "react";

/**
 * Enables full-page scroll-snap for /quote-off only, by toggling a class on
 * <html> while this page is mounted (so the homepage scroll is unaffected).
 */
export function SnapScroll() {
  useEffect(() => {
    const el = document.documentElement;
    el.classList.add("qsnap");
    return () => el.classList.remove("qsnap");
  }, []);
  return null;
}
