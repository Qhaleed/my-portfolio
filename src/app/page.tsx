"use client";
import { Card, Footer, DynamicText } from "./components";
import { useEffect, useState } from "react";
import { CompanyCard } from "./components/cards";
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
      <div className="w-full max-w-4xl text-center flex justify-start flex-col gap-5">
        <div className="mt-20 sm:mt-5">
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
        </div>

        <div className="flex flex-row gap-10 sm:gap-4 lg:gap-6 mt-12 sm:mt-16 lg:mt-10 lg:mb-10 justify-center items-center">
          <Card
            label="About-Me"
            rotate="left"
            href="about"
            src="white-res.png"
            darkSrc="redd-black-res.png"
          ></Card>
          <Card
            label="Projescts"
            rotate="right"
            href="project"
            src="LOGO-1.jpg"
          ></Card>
        </div>

        <DynamicText
          label="I Developed"
          words={[
            "",
            "SnakesMapping Philippines",
            "Adzu Chat (Anonymous Chat for Ateneo)",
            "University Systems",
            "Point of Sale Systems",
            "",
          ]}
        />
        <div className="flex justify-around">
          <CompanyCard
            position="Co-founder"
            company="RTX softwares"
            link="https://rtx-softwares.vercel.app/"
          />
          <CompanyCard position="Founder" company="DigiKumo" />
        </div>
        <Footer></Footer>
      </div>
    </main>
  );
}
