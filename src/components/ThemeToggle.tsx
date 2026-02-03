"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }, [resolvedTheme, setTheme]);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return;
  }

  return (
    <button id="theme-selector" type="button" onClick={toggleTheme}>
      <FontAwesomeIcon
        icon={resolvedTheme === "dark" ? faMoon : faSun}
        className="text-primary"
      />
    </button>
  );
}
