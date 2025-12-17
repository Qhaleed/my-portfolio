"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function () {
  const pathname = usePathname();
  const router = useRouter();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getIcon = () => {
    switch (pathname) {
      case "/":
        return "fa-solid fa-house";
      case "/project":
        return "fa-solid fa-layer-group";
      case "/about":
        return "fa-solid fa-user";
      default:
        return "fa-solid fa-house";
    }
  };

  const toggleNavigation = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleNavigation = (href: string) => {
    if (pathname === href) {
      setIsNavVisible(false);
      return;
    }

    setIsLoading(true);
    setIsNavVisible(false);

    // Wait for loading animation to complete before routing
    setTimeout(() => {
      router.push(href);
      setIsLoading(false);
    }, 1000); // 1 second loading animation
  };

  return (
    <nav className="mt-3 sm:mt-5 w-full flex justify-center">
      <div className="relative flex flex-col items-center">
        <button
          onClick={toggleNavigation}
          className="rounded-full bg-gray-200 w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
        >
          {isLoading ? (
            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-400 border-t-gray-700 rounded-full animate-spin"></div>
          ) : (
            <i className={`${getIcon()} text-black text-sm sm:text-base`}></i>
          )}
        </button>

        {isNavVisible && (
          <div className="absolute top-full mt-3 flex flex-row bg-gray-100 rounded-full px-3 py-2 gap-4 border border-gray-300 animate-fade-in shadow-lg z-50">
            <button
              className={`p-2 rounded-full transition-colors duration-200 ${
                pathname === "/" ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleNavigation("/")}
            >
              <i className="fa-solid fa-house text-gray-700 text-sm"></i>
            </button>
            <button
              className={`p-2 rounded-full transition-colors duration-200 ${
                pathname === "/project" ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleNavigation("/project")}
            >
              <i className="fa-solid fa-layer-group text-gray-700 text-sm"></i>
            </button>
            <button
              className={`p-2 rounded-full transition-colors duration-200 ${
                pathname === "/about" ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handleNavigation("/about")}
            >
              <i className="fa-solid fa-user text-gray-700 text-sm"></i>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
