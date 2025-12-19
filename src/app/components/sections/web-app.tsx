import { WebAppCard } from "../cards";

export default function () {
  return (
    <div className="w-full h-full px-10 py-5 bg-white dark:bg-gray-900 border shadow-lg border-green-500 dark:border-green-400 text-green-500 dark:text-green-400 rounded-3xl mt-15">
      <div className="flex flex-col text-start gap-4">
        <h1 className="text-green-500 dark:text-green-400">Web Apps</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center h-full ">
          <WebAppCard
            title="Adzu Chat  "
            image="/assets/adzuChat1.png"
            description="Anonymous Chat Web Application for Ateneans"
            date="Febuary 2025"
            tags={["python", "javascript", "react"]}
          />
          <WebAppCard
            title="Boost Buddy"
            image="/assets/boostBuddy1.png"
            description="Duo-Finding Web App for Competitive Gamers"
            date="September 2025"
            tags={["php"]}
          />
          <WebAppCard
            title="Ateneo Forum"
            image="/assets/ateneoForum2.png"
            description="An Online Forum with Strict Anonymity via Alias"
            date="In progress"
            tags={["php", "mysql"]}
          />
          <WebAppCard
            title="Formation System"
            description="Faculty and Formation Management System"
            image="/assets/faculty1.png"
            date="In progress"
            tags={["nextjs", "javascript", "typescript"]}
          />
        </div>
      </div>
    </div>
  );
}
