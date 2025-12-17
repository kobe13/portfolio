"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  isDark: boolean | undefined;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use `undefined` initial state so server and client initial render match
  // (avoids hydration mismatches when the system prefers dark).
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    let dark: boolean;

    if (stored === "dark" || stored === "light") {
      dark = stored === "dark";
      // apply explicit classes
      document.documentElement.classList.toggle("dark", dark);
      document.documentElement.classList.toggle("light", !dark);
    } else {
      // remove explicit classes to let @media handle it
      document.documentElement.classList.remove("dark", "light");
      dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }, []);

  const toggleTheme = () => {
    // If state isn't initialized yet, infer current theme from document
    const current =
      typeof isDark === "boolean"
        ? isDark
        : document.documentElement.classList.contains("dark");

    const newDark = !current;
    setIsDark(newDark);
    document.documentElement.classList.add(newDark ? "dark" : "light");
    document.documentElement.classList.remove(newDark ? "light" : "dark");
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export default ThemeProvider;
