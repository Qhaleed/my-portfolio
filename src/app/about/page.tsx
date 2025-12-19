"use client";
import { Socials, Skill, Footer } from "../components";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const carouselItems = [
  {
    image: "/assets/white-res.png",
    title: "Full Stack Developer",
    description: "3+ years of web & mobile development",
  },
  {
    image: "/assets/redd-black-res.png",
    title: "Co-founder @ RTX Softwares",
    description: "Building innovative solutions",
  },
  {
    image: "/assets/blue-res.png",
    title: "Tech Explorer",
    description: "Always learning new technologies",
  },
];

const marqueeImages = [
  { src: "/assets/adzuChat1.png", label: "Adzu Chat" },
  { src: "/assets/boostBuddy1.png", label: "Boost Buddy" },
  { src: "/assets/ateneoForum2.png", label: "Ateneo Forum" },
  { src: "/assets/faculty1.png", label: "Formation System" },
  { src: "/assets/adzuChat2.png", label: "Adzu Chat" },
  { src: "/assets/boostBuddy2.png", label: "Boost Buddy" },
  { src: "/assets/ateneoForum1.png", label: "Ateneo Forum" },
  { src: "/assets/faculty2.png", label: "Formation System" },
];

const marqueeImagesRow2 = [
  { src: "/assets/adzuChat2.png", label: "Adzu Chat" },
  { src: "/assets/boostBuddy2.png", label: "Boost Buddy" },
  { src: "/assets/ateneoForum1.png", label: "Ateneo Forum" },
  { src: "/assets/faculty2.png", label: "Formation System" },
  { src: "/assets/ateneoForum3.png", label: "Ateneo Forum" },
  { src: "/assets/adzuChat1.png", label: "Adzu Chat" },
  { src: "/assets/boostBuddy1.png", label: "Boost Buddy" },
  { src: "/assets/faculty1.png", label: "Formation System" },
];

export default function About() {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("reslykadiri@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

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
            <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-gray-700 dark:text-gray-200">
              Hi, I'm Res
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              (Rescoderer)
            </p>
          </div>

          {/* Carousel Section */}
          <div
            className={`relative w-full max-w-md mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
              {/* Carousel Content */}
              <div className="relative h-64 flex items-center justify-center">
                {carouselItems.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:scale-110"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:scale-110"
              >
                ›
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentSlide(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-blue-500 w-6"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* About Content */}
          <div
            className={`text-start space-y-6 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
                I'm a full stack developer with over 3 years of programming
                experience (web development and mobile development). I usually
                grind random projects, listen to Matan's podcast while
                programming, and explore random technologies especially trending
                ones (According to Fireship).
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                I am someone who writes everything programming, its
                documentations, and other relevant stuffs in my Obsidian Vault.
                Yes everything.
              </p>
            </div>
          </div>

          {/* Infinite Scrolling Gallery - Multi Layer */}
          <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
              My Work in Action
            </h2>

            {/* Row 1 - Left to Right */}
            <div className="marquee-row relative flex overflow-hidden mb-4">
              <div className="flex animate-marquee gap-1 pr-4">
                {marqueeImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-72 h-48 overflow-hidden shadow-lg group"
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white text-sm font-medium p-3">
                        {img.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="flex animate-marquee gap-1 pr-4"
                aria-hidden="true"
              >
                {marqueeImages.map((img, index) => (
                  <div
                    key={`dup1-${index}`}
                    className="relative flex-shrink-0 w-72 h-48 overflow-hidden shadow-lg group"
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white text-sm font-medium p-3">
                        {img.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Right to Left (Reverse) */}
            <div className="marquee-row relative flex overflow-hidden mb-4">
              <div className="flex animate-marquee-reverse gap-1 pl-4">
                {marqueeImagesRow2.map((img, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-64 h-44 overflow-hidden shadow-lg group"
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white text-xs font-medium p-2">
                        {img.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="flex animate-marquee-reverse gap-1 pl-4"
                aria-hidden="true"
              >
                {marqueeImagesRow2.map((img, index) => (
                  <div
                    key={`dup2-${index}`}
                    className="relative flex-shrink-0 w-64 h-44 overflow-hidden shadow-lg group"
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white text-xs font-medium p-2">
                        {img.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`text-start space-y-6 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Tech Stack
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light mb-4">
                My primary stack is anything javascript (also Tailwind, C++,
                Laravel & Rust) currently experimenting switch to (Laravel &
                Angular). Over time, I've dealt with different technology
                stacks/programming languages; most times out of curiosity and
                other times it's either school or work (agency).
              </p>
              <Skill />
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 shadow-lg text-white">
              <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
              <p className="text-blue-100 mb-4">
                Want to collaborate or just say hi?
              </p>
              <div
                onClick={copyToClipboard}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full cursor-pointer transition-all duration-200"
              >
                <span className="font-medium">reslykadiri@gmail.com</span>
                <span className="text-sm">
                  {copied ? "Copied!" : "Click to copy"}
                </span>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}
