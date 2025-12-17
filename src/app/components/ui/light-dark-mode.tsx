"use client";

import { useState, useEffect } from "react";
import "./light-dark-mode.css";

interface LightDarkModeProps {
  onToggle?: (isDark: boolean) => void;
}

const LightDarkMode = ({ onToggle }: LightDarkModeProps) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Update document attribute and localStorage when theme changes
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
    onToggle?.(isDark);
  }, [isDark, onToggle]);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={!isDark}
          onChange={handleToggle}
          aria-label="Toggle light/dark mode"
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default LightDarkMode;
