import Socials from "../components/Socials";
import Link from "next/link";
export default function About() {
  return (
    <main className="w-full h-screen max-h-screen">
      <div className="flex flex-row text-center justify-center align-middle mt-15 px-10 lg:p-0">
        <div className="max-w-2xl text-start gap-5 flex flex-col">
          <h1 className="text-3xl font-bold leading-loose">Hi , I'm Resly</h1>
          <p className="text-gray-600 font-light">
            I'm a full stack developer who have been a fanatic of computers
            since time immemorial. you will find me reading manhwa, watching
            anime or exploring new technologies, while i spend the rest of my
            time building and maintaing loupp .
          </p>
          <p className="text-gray-600 font-light">
            I'm a yapper and introvert who writes less and enjoys argument, so
            here is my blog . I hope i soon talk less and write more.
          </p>

          <p className="text-gray-600 font-light">Reach me on:</p>
          <Socials></Socials>
          <h1 className="text-xl font-semibold leading-loose">
            Languages/tools i take interest In
          </h1>
          <p className="text-gray-600 font-light">
            My primary stack is the TALL Stack (Tallwind, AlpineJs, Laravel &
            Livewire) currently experimenting switch to (react, Laravel &
            inertiajs). Over time, i've dealt with diferent technology
            stacks/programming langauges; most times out of curiosity and other
            times its either school or work(agency).
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
