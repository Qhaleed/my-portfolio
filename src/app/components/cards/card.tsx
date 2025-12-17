"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type CardProps = {
  label: string;
  rotate?: "left" | "right";
  href?: "project" | "about";
  src: string;
  darkSrc?: string;
};

export default function ({ label, rotate, href, src, darkSrc }: CardProps) {
  const [isDark, setIsDark] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displaySrc, setDisplaySrc] = useState(src);

  useEffect(() => {
    const checkTheme = () => {
      const newIsDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      if (newIsDark !== isDark) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsDark(newIsDark);
          setDisplaySrc(newIsDark && darkSrc ? darkSrc : src);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 100);
        }, 500);
      }
    };

    // Initial check without transition
    const initialDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    setIsDark(initialDark);
    setDisplaySrc(initialDark && darkSrc ? darkSrc : src);

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [isDark, src, darkSrc]);

  return (
    <main
      className={`w-36 sm:w-48 md:w-56 lg:w-80 min-h-10 rounded-2xl sm:rounded-3xl mx-1 sm:mx-2 lg:mx-10
     bg-white border border-gray-300 dark:border-gray-600 shadow-lg hover:shadow-lg transition-all duration-500
     ${isTransitioning ? "opacity-0" : "opacity-100"}
        ${
          rotate === "left"
            ? "-rotate-10 sm:-rotate-3 lg:-rotate-5 hover:-rotate-8  active:-rotate-8"
            : ""
        }
        ${
          rotate === "right"
            ? "rotate-10 sm:rotate-3 lg:rotate-5 hover:rotate-8 active:rotate-8"
            : ""
        }
        
     `}
    >
      <div className="flex flex-col h-auto min-h-48 sm:min-h-56 md:min-h-64 lg:min-h-80 px-2 sm:px-3 lg:px-6 py-3 sm:py-4 lg:py-6 justify-between items-center">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 mb-2 sm:mb-4">
          <Image
            src={`/assets/${displaySrc}`}
            alt="Profile picture"
            fill
            sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 208px"
            className="rounded object-cover"
          />
        </div>

        <Link href={href ? `/${href}` : "/"} className="w-full">
          <button
            type="button"
            className="w-full text-white bg-gradient-to-r hover:cursor-pointer
             from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md sm:rounded-lg text-sm sm:text-sm lg:text-base px-3 sm:px-4 lg:px-5 py-2 sm:py-2 lg:py-2.5 text-center transition-all duration-200"
          >
            {label}
          </button>
        </Link>
      </div>
    </main>
  );
}
