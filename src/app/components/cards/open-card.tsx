type CardProps = {
  title: string;
  description: string;
  githubLink: string;
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

export default function OpenCard({
  title,
  description,
  githubLink,
  tags,
}: CardProps) {
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
    <div className="flex flex-col text-sm justify-between px-3 py-3 rounded-xl w-full border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-400 transition duration-300 h-full bg-white dark:bg-gray-800">
      <div className="flex flex-row justify-between text-sm">
        <p className="text-gray-800 dark:text-gray-200">{title}</p>
        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-blue-600 ring-2 ring-gray-300 dark:ring-gray-500 hover:bg-blue-700 transition-colors duration-200">
          <a href={githubLink}>
            <i className="fa-brands fa-github text-white text-sm sm:text-lg lg:text-xl"></i>
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-1 mb-2">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs font-medium px-2.5 py-0.5 rounded-sm ${getTagColors(
                  tag
                )}`}
              >
                {tag}
              </span>
            ))}
        </div>
        <h3 className="text-gray-600 dark:text-gray-400">{description}</h3>
      </div>
    </div>
  );
}
