import Image from "next/image";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl text-center flex justify-start flex-col">
        <Navbar />
        <div className="mt-20 sm:mt-10">
          <h1 className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-gray-700">
            Res
          </h1>
          <p className="text-xs sm:text-sm mb-4 sm:mb-5 text-gray-600">
            (Rescoderer)
          </p>

          <button className="bg-gray-100 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-1 border-gray-300 text-sm sm:text-base">
            Software Engineer
          </button>
        </div>

        <div className="flex flex-row gap-10 sm:gap-4 lg:gap-6 mt-12 sm:mt-16 lg:mt-20 justify-center items-center">
          <Card
            label="About-Me"
            rotate="left"
            href="about"
            src="Mini.png"
          ></Card>
          <Card
            label="Projects"
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
