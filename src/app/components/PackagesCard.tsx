import OpenCard from "./OpenCard";

export default function () {
  return (
    <div className="w-full h-full px-10 py-10 lg:px-10 lg:py-5 bg-white border shadow-lg border-violet-  lg:border-violet-500 rounded-3xl mt-15">
      <div className="flex flex-col text-start gap-4">
        <h1 className="text-violet-500">Open Source </h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <OpenCard
            title="Anonymous Communication System"
            description="Server-Relay P2P"
            githubLink="https://github.com/Qhaleed/ADZU-CHAT"
            tags={["python", "javascript"]}
          />
          <OpenCard
            title="Zamcelco Web Scraper"
            description="Page Data Extraction"
            githubLink="https://github.com/Qhaleed/Zamcelco-Alert-Service"
            tags={["typescript", "tailwind", "react", "vercel", "nodejs"]}
          />
          <OpenCard
            title="Match-making System"
            description="Automated Queue Matchmaking"
            githubLink="https://github.com/Qhaleed/ADZU-CHAT"
            tags={["flask", "typescript", "python", "nodejs"]}
          />
        </div>
      </div>
    </div>
  );
}
