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
  backSrc?: string;
};

export default function ({
  label,
  rotate,
  href,
  src,
  darkSrc,
  backSrc,
}: CardProps) {
  const [isDark, setIsDark] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displaySrc, setDisplaySrc] = useState(src);
  const [isFlipped, setIsFlipped] = useState(false);

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

  const handleCardClick = () => {
    if (backSrc) {
      setIsFlipped(!isFlipped);
    }
  };

  // Determine the back image - use backSrc if provided, otherwise use alternate images
  const backImage = backSrc || (isDark ? src : darkSrc || src);

  return (
    <div
      className={`w-36 sm:w-48 md:w-56 lg:w-80 mx-1 sm:mx-2 lg:mx-10 transition-all duration-500
        ${
          rotate === "left"
            ? "-rotate-10 sm:-rotate-3 lg:-rotate-5 hover:-rotate-8 active:-rotate-8"
            : ""
        }
        ${
          rotate === "right"
            ? "rotate-10 sm:rotate-3 lg:rotate-5 hover:rotate-8 active:rotate-8"
            : ""
        }
      `}
      style={{ perspective: "1000px" }}
    >
      <div
        onClick={handleCardClick}
        className={`relative w-full transition-transform duration-700 cursor-pointer`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <main
          className={`w-full min-h-10 rounded-2xl sm:rounded-3xl
           border-2 shadow-lg hover:shadow-xl transition-all duration-500
           ${isTransitioning ? "opacity-0" : "opacity-100"}
           ${
             isDark
               ? "bg-gray-900 border-red-900/50 shadow-red-900/20 hover:shadow-red-900/30 hover:border-red-700"
               : "bg-white border-gray-200 hover:border-blue-300"
           }
          `}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col h-auto min-h-48 sm:min-h-56 md:min-h-64 lg:min-h-80 px-2 sm:px-3 lg:px-6 py-3 sm:py-4 lg:py-6 justify-between items-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 mb-2 sm:mb-4">
              <Image
                src={`/assets/${displaySrc}`}
                alt="Profile picture"
                fill
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 208px"
                className="rounded-lg object-cover"
              />
            </div>

            <Link
              href={href ? `/${href}` : "/"}
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={`w-full text-white bg-gradient-to-r hover:cursor-pointer hover:bg-gradient-to-br hover:scale-105 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:text-sm lg:text-base px-3 sm:px-4 lg:px-5 py-2.5 sm:py-2.5 lg:py-3 text-center transition-all duration-300 shadow-md
                 ${
                   isDark
                     ? "from-red-600 via-red-700 to-red-800 focus:ring-red-900 shadow-red-900/50"
                     : "from-blue-500 via-blue-600 to-blue-700 focus:ring-blue-300"
                 }`}
              >
                {label}
              </button>
            </Link>
          </div>
        </main>

        {/* Back of card */}
        <main
          className={`absolute top-0 left-0 w-full min-h-10 rounded-2xl sm:rounded-3xl
           border-2 shadow-lg transition-all duration-500
           ${
             isDark
               ? "bg-gray-900 border-red-900/50 shadow-red-900/20 hover:border-red-700"
               : "bg-white border-gray-200 hover:border-blue-300"
           }
          `}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex flex-col h-auto min-h-48 sm:min-h-56 md:min-h-64 lg:min-h-80 px-2 sm:px-3 lg:px-6 py-3 sm:py-4 lg:py-6 justify-between items-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 mb-2 sm:mb-4">
              <Image
                src={`/assets/${backImage}`}
                alt="Profile picture back"
                fill
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 208px"
                className="rounded-lg object-cover"
              />
            </div>

            <Link
              href={href ? `/${href}` : "/"}
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={`w-full text-white bg-gradient-to-r hover:cursor-pointer hover:bg-gradient-to-br hover:scale-105 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:text-sm lg:text-base px-3 sm:px-4 lg:px-5 py-2.5 sm:py-2.5 lg:py-3 text-center transition-all duration-300 shadow-md
                 ${
                   isDark
                     ? "from-red-600 via-red-700 to-red-800 focus:ring-red-900 shadow-red-900/50"
                     : "from-blue-500 via-blue-600 to-blue-700 focus:ring-blue-300"
                 }`}
              >
                {label}
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
