"use client";
import { Card, Footer } from "./components";
import { useEffect, useState } from "react";

export default function Home() {
  const [isWiggling, setIsWiggling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsWiggling(true);

    const wiggleInterval = setInterval(() => {
      setIsWiggling(true);
      setTimeout(() => setIsWiggling(false), 600);
    }, 15000);

    const initialTimeout = setTimeout(() => setIsWiggling(false), 600);

    return () => {
      clearInterval(wiggleInterval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const handleCardClick = () => {
    setIsLoading(true);
  };

  return (
    <main className="w-full max-h-screen flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl text-center flex justify-start flex-col">
        <div className="mt-20 sm:mt-10">
          <h1
            className={`text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-gray-700 dark:text-gray-200 transition-transform duration-100 ${
              isWiggling ? "animate-wiggle" : ""
            }`}
          >
            Res
          </h1>
          <p className="text-xs sm:text-sm mb-4 sm:mb-5 text-gray-600 dark:text-gray-400">
            (Rescoderer)
          </p>

          <button className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-1 border-gray-300 dark:border-gray-600 text-sm sm:text-base">
            Software Engineer
          </button>
        </div>

        <div className="flex flex-row gap-10 sm:gap-4 lg:gap-6 mt-12 sm:mt-16 lg:mt-20 justify-center items-center">
          <Card
            label="About-Me"
            rotate="left"
            href="about"
            src="white-res.png"
            darkSrc="white-res.png"
          ></Card>
          <Card
            label="Projescts"
            rotate="right"
            href="project"
            src="LOGO-1.jpg"
          ></Card>
        </div>
        <Footer></Footer>
      </div>
    </main>
  );
}
