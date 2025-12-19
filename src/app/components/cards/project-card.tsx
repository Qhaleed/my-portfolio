import Link from "next/link";

export default function () {
  return (
    <div className="w-full h-full px-10 py-5 bg-white dark:bg-gray-900 border shadow-lg border-gray-300 dark:border-gray-700 rounded-3xl">
      <div className="flex flex-col text-start gap-4">
        <h1 className="text-blue-500 dark:text-blue-400">Web Portfolio</h1>
        <h1 className="text-3xl text-gray-700 dark:text-gray-200 font-bold">
          Visit my Web Exploration
        </h1>
        <h1 className="text-lg text-gray-700 dark:text-gray-300 font-thin">
          See some of my website experiments I've been working on my spare time
        </h1>
        <Link href={"https://github.com/Qhaleed?tab=repositories"}>
          <button className="w-xs text-blue-500 dark:text-blue-400 text-start hover:cursor-pointer hover:text-blue-300 dark:hover:text-blue-300 transition duration-200">
            {" "}
            Check it out
          </button>
        </Link>
      </div>
    </div>
  );
}
