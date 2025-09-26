"use client";
import Socials from "../components/Socials";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("reslykadiri@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <main className="w-full h-screen max-h-screen">
      <div className="flex flex-row text-center justify-center align-middle mt-15 px-10 lg:p-0">
        <div className="max-w-2xl text-start gap-5 flex flex-col">
          <h1 className="text-3xl font-bold leading-loose">Hi, I'm Res</h1>
          <p className="text-gray-600 font-light">
            I'm a full stack developer with over 3 years of programming
            experience (web development and mobile development). I usually grind
            random projects, listen to Matan's podcast while programming, and
            explore random technologies especially trending ones (According to
            Fireship).
          </p>
          <p className="text-gray-600 font-light">
            I am someone who writes everything programming, its documentations,
            and other relevant stuffs in my Obsidian Vault. Yes everything.
          </p>

          <p className="text-gray-600 font-light">
            Reach me on:{" "}
            <span
              onClick={copyToClipboard}
              className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors duration-200 relative"
              title="Click to copy email"
            >
              reslykadiri@gmail.com
              {copied && (
                <span className="absolute -top-8 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                  Copied!
                </span>
              )}
            </span>
          </p>

          <Socials></Socials>
          <h1 className="text-xl font-semibold leading-loose">
            Languages/tools I take interest In
          </h1>
          <p className="text-gray-600 font-light">
            My primary stack is anything javascript (also Tailwind, c++, Laravel
            & rust) currently experimenting switch to (Laravel & angular). Over
            time, I've dealt with different technology stacks/programming
            langauges; most times out of curiosity and other times its either
            school or work(agency).
          </p>
          <Link href={"/"}>
            <button
              className="w-full text-white bg-gradient-to-r
             from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md sm:rounded-lg text-sm sm:text-sm lg:text-base px-3 sm:px-4 lg:px-5 py-2 sm:py-2 lg:py-2.5 text-center transition-all duration-200"
            >
              Go back home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
