import WebAppCard from "./WebAppCard";
export default function () {
  return (
    <div className="w-full h-full px-10 py-5 bg-white border shadow-lg  border-green-500 text-green-500 rounded-3xl mt-15">
      <div className="flex flex-col text-start gap-4">
        <h1 className="text-green-500">Web Apps</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center h-full ">
          <WebAppCard
            title="Adzu Chat  "
            image="/assets/adzuChat1.png"
            date="Febuary 2025"
            tags={["python", "javascript", "react"]}
          />
          <WebAppCard
            title="Boost Buddy"
            image="/assets/boostBuddy1.png"
            date="September 2025"
            tags={["php"]}
          />
          <WebAppCard
            title="Ateneo Forum"
            image="/assets/ateneoForum2.png"
            date="In progress"
            tags={["php", "mysql"]}
          />
          <WebAppCard
            title="Formation System"
            image="/assets/faculty1.png"
            date="In progress"
            tags={["nextjs", "javascript", "typescript"]}
          />
        </div>
      </div>
    </div>
  );
}
