"use client";

import { useState, useEffect } from "react";
import "./dynamic-text.css";

interface DynamicTextProps {
  label?: string;
  words?: string[];
}

const DynamicText = ({
  label = "Developed",
  words = [
    "Adzu Chat",
    "SnakesMapping Philippines",
    "Company Systems",
    "University Systems",
    "Point of Sale Systems",
  ],
}: DynamicTextProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`dynamic-text-card transition-opacity duration-500 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="dynamic-text-loader">
        <p>{label}</p>
        <div className="dynamic-text-words">
          {words.map((word, index) => (
            <span key={index} className="dynamic-text-word">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicText;
