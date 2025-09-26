"use client";
import { useState } from "react";

type CardProps = {
  title: string;
  date: string;
  image: string;
  tags?: (
    | "javascript"
    | "python"
    | "C++"
    | "php"
    | "react"
    | "nextjs"
    | "typescript"
    | "tailwind"
    | "flask"
    | "mongodb"
    | "vercel"
    | "nodejs"
    | "express"
    | "postgresql"
    | "mysql"
    | "docker"
    | "git"
    | "aws"
    | "firebase"
    | "vue"
    | "angular"
    | "java"
    | "csharp"
    | "golang"
    | "rust"
    | "html"
    | "css"
  )[];
};

export default function ({ title, date, image, tags }: CardProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const getTagColors = (tag: string) => {
    const colorMap: Record<string, string> = {
      javascript: "bg-yellow-100 text-yellow-800",
      python: "bg-blue-100 text-blue-800",
      "C++": "bg-purple-100 text-purple-800",
      php: "bg-indigo-100 text-indigo-800",
      react: "bg-cyan-100 text-cyan-800",
      nextjs: "bg-gray-100 text-gray-800",
      typescript: "bg-blue-100 text-blue-800",
      tailwind: "bg-teal-100 text-teal-800",
      flask: "bg-green-100 text-green-800",
      mongodb: "bg-emerald-100 text-emerald-800",
      vercel: "bg-slate-100 text-slate-800",
      nodejs: "bg-lime-100 text-lime-800",
      express: "bg-gray-100 text-gray-800",
      postgresql: "bg-blue-100 text-blue-800",
      mysql: "bg-orange-100 text-orange-800",
      docker: "bg-sky-100 text-sky-800",
      git: "bg-red-100 text-red-800",
      aws: "bg-amber-100 text-amber-800",
      firebase: "bg-yellow-100 text-yellow-800",
      vue: "bg-green-100 text-green-800",
      angular: "bg-red-100 text-red-800",
      java: "bg-orange-100 text-orange-800",
      csharp: "bg-purple-100 text-purple-800",
      golang: "bg-cyan-100 text-cyan-800",
      rust: "bg-orange-100 text-orange-800",
      html: "bg-orange-100 text-orange-800",
      css: "bg-blue-100 text-blue-800",
    };
    return colorMap[tag] || "bg-gray-100 text-gray-800";
  };

  return (
    // <div classNameName="flex flex-col text-sm justify-between px-3 py-3 rounded-xl w-full border border-gray-200 hover:border-violet-500 transition duration-300 h-full">
    //   <div classNameName="bg-red-900 align-middle">
    //     <Image src={`${image}`} alt="alt image" width={50} height={50}></Image>
    //   </div>

    //   <div classNameName="flex flex-row justify-between text-sm">
    //     <p classNameName="">{`${title}`}</p>
    //   </div>
    //   <div>
    //     <div classNameName="flex flex-wrap gap-1 mb-2"></div>
    //     <h3>{`${date}`}</h3>
    //   </div>
    //   <div classNameName="flex flex-wrap gap-1 mb-2">
    //     {tags &&
    //       tags.map((tag, index) => (
    //         <span
    //           key={index}
    //           classNameName={`text-xs font-medium px-2.5 py-0.5 rounded-sm ${getTagColors(
    //             tag
    //           )}`}
    //         >
    //           {tag}
    //         </span>
    //       ))}
    //   </div>
    // </div>
    <>
      <div className="w-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition duration-300 hover:border-green-500">
        <div
          className="block overflow-hidden rounded-t-lg cursor-pointer"
          onClick={openFullscreen}
        >
          <img
            className="rounded-t-lg w-full h-64 object-cover scale-[1.03] hover:scale-100 transition-transform duration-300"
            src={`${image}`}
            alt=""
          />
        </div>
        <div className="p-3">
          <a>
            <h5 className="mb-1 text-sm font-semibold tracking-tight text-gray-900 line-clamp-1">
              {`${title}`}
            </h5>
          </a>
          <a>
            <h5 className="mb-2 text-xs font-normal text-gray-600">
              {`${date}`}
            </h5>
          </a>
          <div className="flex flex-wrap gap-1">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-xs font-medium px-2 py-0.5 rounded-sm ${getTagColors(
                    tag
                  )}`}
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-90 flex items-center justify-center z-50 px-40"
          onClick={closeFullscreen}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
            >
              ×
            </button>
            <img
              src={`${image}`}
              alt={title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
