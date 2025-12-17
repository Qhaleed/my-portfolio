"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const navItems = [
    { href: "/", icon: "fa-solid fa-house", label: "Home" },
    { href: "/project", icon: "fa-solid fa-layer-group", label: "Projects" },
    { href: "/about", icon: "fa-solid fa-user", label: "About" },
  ];

  const getIcon = () => {
    const current = navItems.find((item) => item.href === pathname);
    return current?.icon || "fa-solid fa-house";
  };

  const toggleNavigation = () => {
    if (isNavVisible) {
      setIsClosing(true);
      setTimeout(() => {
        setIsNavVisible(false);
        setIsClosing(false);
      }, 200);
    } else {
      setIsNavVisible(true);
    }
  };

  const handleNavigation = (href: string) => {
    if (pathname === href) {
      toggleNavigation();
      return;
    }

    setIsLoading(true);
    setIsClosing(true);

    setTimeout(() => {
      setIsNavVisible(false);
      setIsClosing(false);
    }, 200);

    setTimeout(() => {
      router.push(href);
      setIsLoading(false);
    }, 800);
  };

  // Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const nav = document.getElementById("glass-nav");
      if (nav && !nav.contains(e.target as Node) && isNavVisible) {
        toggleNavigation();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNavVisible]);

  return (
    <nav
      id="glass-nav"
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="relative flex flex-col items-center">
        {/* Main toggle button with glass effect */}
        <button
          onClick={toggleNavigation}
          className={`
            nav-button-glass
            relative overflow-hidden
            rounded-full w-11 h-11 sm:w-12 sm:h-12
            flex items-center justify-center
            transition-all duration-300 ease-out
            ${isNavVisible ? "nav-button-active" : ""}
            ${isLoading ? "nav-button-loading" : ""}
          `}
          aria-label="Toggle navigation"
        >
          {/* Glass shine overlay */}
          <div className="nav-shine"></div>

          {isLoading ? (
            <div className="nav-spinner"></div>
          ) : (
            <i
              className={`${getIcon()} nav-icon transition-all duration-300 ${
                isNavVisible ? "rotate-180 scale-110" : ""
              }`}
            ></i>
          )}
        </button>

        {/* Navigation dropdown with glass effect */}
        {isNavVisible && (
          <div
            className={`
              nav-dropdown-glass
              absolute top-full mt-3
              flex flex-row items-center
              rounded-full px-4 py-2 sm:px-5 sm:py-2.5
              gap-3 sm:gap-4
              z-50
              ${isClosing ? "nav-closing" : "nav-opening"}
            `}
          >
            {/* Glass shine overlay for dropdown */}
            <div className="nav-dropdown-shine"></div>

            {navItems.map((item, index) => (
              <div key={item.href} className="nav-tooltip-wrapper">
                <button
                  className={`
                    nav-item-glass
                    relative overflow-hidden
                    p-3 sm:p-3.5 rounded-full
                    transition-all duration-300 ease-out
                    ${pathname === item.href ? "nav-item-active" : ""}
                  `}
                  onClick={() => handleNavigation(item.href)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-label={item.label}
                >
                  <i
                    className={`${item.icon} nav-item-icon transition-transform duration-200`}
                  ></i>
                </button>
                <span className="nav-tooltip">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
