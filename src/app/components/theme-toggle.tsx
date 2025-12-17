"use client";

import React from "react";
import { useTheme } from "../providers";

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M6.343 6.343L4.929 4.929M12 8a4 4 0 100 8 4 4 0 000-8z"
      />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  const mounted = typeof isDark === "boolean";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      // don't set aria-pressed or title until we know the theme to avoid
      // hydration mismatches between server and client
      {...(mounted
        ? {
            "aria-pressed": isDark,
            title: isDark ? "Switch to light mode" : "Switch to dark mode",
          }
        : {})}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
    >
      {mounted ? (
        isDark ? (
          <SunIcon className="w-5 h-5" aria-hidden />
        ) : (
          <MoonIcon className="w-5 h-5" aria-hidden />
        )
      ) : (
        // neutral icon while we determine theme to keep SSR/CSR consistent
        <MoonIcon className="w-5 h-5" aria-hidden />
      )}
    </button>
  );
}
