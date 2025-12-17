type SkillProps = {
  skills?: (
    | "html"
    | "css"
    | "javascript"
    | "php"
    | "react"
    | "laravel"
    | "python"
    | "flask"
    | "mysql"
    | "sqlite"
    | "vercel"
    | "firebase"
    | "flutter"
    | "java"
    | "C++"
    | "dart"
    | "render"
    | "railway"
    | "nextjs"
    | "typescript"
    | "rust"
  )[];
};

export default function Skill({ skills }: SkillProps) {
  const getSkillColors = (skill: string) => {
    const colorMap: Record<string, string> = {
      html: "bg-orange-100 text-orange-800",
      css: "bg-blue-100 text-blue-800",
      javascript: "bg-yellow-100 text-yellow-800",
      php: "bg-indigo-100 text-indigo-800",
      react: "bg-cyan-100 text-cyan-800",
      laravel: "bg-red-100 text-red-800",
      python: "bg-blue-100 text-blue-800",
      flask: "bg-green-100 text-green-800",
      mysql: "bg-orange-100 text-orange-800",
      sqlite: "bg-orange-100 text-orange-800",
      vercel: "bg-slate-100 text-slate-800",
      firebase: "bg-yellow-100 text-yellow-800",
      flutter: "bg-sky-100 text-sky-800",
      java: "bg-orange-100 text-orange-800",
      "C++": "bg-purple-100 text-purple-800",
      dart: "bg-blue-100 text-blue-800",
      render: "bg-purple-100 text-purple-800",
      railway: "bg-gray-100 text-gray-800",
      nextjs: "bg-gray-100 text-gray-800",
      typescript: "bg-blue-100 text-blue-800",
      rust: "bg-orange-100 text-orange-800",
    };
    return colorMap[skill] || "bg-gray-100 text-gray-800";
  };

  const defaultSkills = [
    "html",
    "css",
    "javascript",
    "php",
    "react",
    "laravel",
    "python",
    "flask",
    "mysql",
    "sqlite",
    "vercel",
    "firebase",
    "flutter",
    "java",
    "C++",
    "dart",
    "render",
    "railway",
    "nextjs",
    "typescript",
    "rust",
  ] as const;

  const skillsToShow = skills || defaultSkills;

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
      {skillsToShow.map((skill, index) => (
        <span
          key={index}
          className={`text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg transition-transform duration-200 hover:scale-105 ${getSkillColors(
            skill
          )}`}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
