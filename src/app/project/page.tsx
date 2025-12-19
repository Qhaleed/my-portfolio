"use client";
import { PackagesCard, ProjectCard, WebApp, Footer } from "../components";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Project() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-col w-full justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center flex flex-col gap-6">
          {/* Back Button */}
          <Link
            href="/"
            className={`absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-5"
            }`}
          >
            <span className="text-xl">←</span>
            <span className="text-sm font-medium">Back</span>
          </Link>

          {/* Hero Section */}
          <div
            className={`mt-16 sm:mt-20 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-700 dark:text-gray-200">
              My Work
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Fun projects, cool experiments, serious endeavors—here's a glimpse
              into what I build
            </p>
          </div>

          {/* Section Navigation Pills */}
          <div
            className={`flex flex-wrap justify-center gap-3 my-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <button
              onClick={() =>
                document
                  .getElementById("web-apps")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              onMouseEnter={() => setHoveredSection("web")}
              onMouseLeave={() => setHoveredSection(null)}
              className={`px-4 py-2 rounded-full border-2 border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 text-sm font-medium transition-all duration-300 hover:bg-green-500 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 ${
                hoveredSection === "web"
                  ? "scale-110 shadow-lg shadow-green-500/30"
                  : ""
              }`}
            >
              🌐 Web Apps
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("open-source")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              onMouseEnter={() => setHoveredSection("open")}
              onMouseLeave={() => setHoveredSection(null)}
              className={`px-4 py-2 rounded-full border-2 border-violet-500 dark:border-violet-400 text-violet-600 dark:text-violet-400 text-sm font-medium transition-all duration-300 hover:bg-violet-500 hover:text-white dark:hover:bg-violet-400 dark:hover:text-gray-900 ${
                hoveredSection === "open"
                  ? "scale-110 shadow-lg shadow-violet-500/30"
                  : ""
              }`}
            >
              📦 Open Source
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("explore")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              onMouseEnter={() => setHoveredSection("explore")}
              onMouseLeave={() => setHoveredSection(null)}
              className={`px-4 py-2 rounded-full border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 text-sm font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 ${
                hoveredSection === "explore"
                  ? "scale-110 shadow-lg shadow-blue-500/30"
                  : ""
              }`}
            >
              🔬 Explore
            </button>
          </div>

          {/* Projects Sections */}
          <div className="flex flex-col gap-8 text-start pb-10">
            <section
              id="web-apps"
              className={`transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <WebApp />
            </section>

            <section
              id="open-source"
              className={`transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <PackagesCard />
            </section>

            <section
              id="explore"
              className={`transition-all duration-700 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <ProjectCard />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
