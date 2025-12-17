import Socials from "../ui/socials";

export default function () {
  return (
    <footer className="w-full mt-16 sm:mt-20 lg:mt-10">
      <Socials />

      <div className="text-black dark:text-gray-300 flex justify-center mt-3 sm:mt-4 lg:mt-5">
        <h3 className="text-sm sm:text-base lg:text-lg">
          @ 2025 Resly Kadiri.{" "}
          <span className="text-sm text-gray-400">
            --this portfolio is best on mobile
          </span>
        </h3>
      </div>
    </footer>
  );
}
