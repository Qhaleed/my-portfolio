import PackagesCard from "../components/PackagesCard";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  return (
    <main className="w-full h-screen max-h-screen">
      <div className="flex flex-row text-start w-full  justify-center align-middle px-10 lg:p-0">
        <div className="max-w-4xl text-start gap-2 flex flex-col">
          <h1 className="text-7xl text-gray-600 font-bold leading-loose">
            Projects
          </h1>
          <p className="text-gray-600 font-light mb-10">
            My fun projects, jobs, cool experiments, serious endeavors and
            everything in between, here's a glimpse into what I work on in my
            spare time
          </p>
          <ProjectCard />
          <PackagesCard />
        </div>
      </div>
    </main>
  );
}
