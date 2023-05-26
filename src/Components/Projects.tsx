import { useState, useEffect } from "react";
import { Repo } from "../Type";
import { user } from "../config1";
const { github } = user;

function MinMode(): JSX.Element {
  const [projects, setProjects] = useState<Repo[]>([]);

  useEffect(() => {
    const cachedData = localStorage.getItem("cachedProjects");
    if (cachedData) {
      setProjects(JSON.parse(cachedData));
    } else {
      fetch(`https://api.github.com/users/${github}/repos`)
        .then((response) => response.json())
        .then((data) => {
          const projectList: Repo[] = data
            .filter((repo: Repo) => !repo.private)
            .map((repo: Repo) => ({
              name: repo.name,
              description: repo.description,
              stars: repo.stargazers_count,
              forks: repo.forks,
              image: `https://opengraph.githubassets.com/HASH/${repo.owner.login}/${repo.name}`,
              html_url: repo.html_url,
              languages_url: repo.languages_url,
            }));

          const fetchLanguages = projectList.map((project: Repo) => {
            return fetch(project.languages_url)
              .then((response) => response.json())
              .then((languages) => {
                const totalBytes = Object.values(languages || {}).reduce(
                  (sum: number, value: unknown) => sum + (value as number),
                  0
                );
                return {
                  ...project,
                  languages,
                  totalBytes,
                };
              });
          });

          Promise.all(fetchLanguages)
            .then((projects) => {
              setProjects(projects);
              localStorage.setItem("cachedProjects", JSON.stringify(projects));
            })
            .catch((error) => {
              console.log("Error fetching GitHub projects:", error);
            });
        })
        .catch((error) => {
          console.log("Error fetching GitHub projects:", error);
        });
    }
  }, []);

  if (projects.length === 0) {
    return <></>;
  }

  return (
    <div className="">
      <div className="text-center mb-10 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-[#458588]">
        <h3 className="text-3xl font-semibold">📁 Projects</h3>
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
          From GitHub
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2 w-full lg:w-11/12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg p-4 flex flex-col items-center border border-[#383838] dark:bg-[#1e1e1f] bg-gray-500 text-white"
          >
            <img
              src={project.image}
              alt={project.name}
              className="mb-4 rounded-lg"
            />
            <a
              className="font-bold text-lg mb-2"
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
            <p className="text-sm text-center mb-2">{project.description}</p>
            <div className="text-sm mt-2">
              {project.languages &&
                Object.entries(project.languages)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([language, bytes]) => (
                    <span
                      key={bytes}
                      className="inline-block dark:bg-gray-500 bg-[#1e1e1f] rounded-full px-2 py-1 mr-1 mt-1"
                    >
                      {language}
                    </span>
                  ))}
            </div>
            <div className="flex justify-end w-full mt-auto pt-1">
              <span className="text-sm text-gray-500 mr-2">
                <i className="fa fa-star"></i> {project.stars}
              </span>
              <span className="text-sm text-gray-500">
                <i className="fa fa-code-fork"></i> {project.forks}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectList(): JSX.Element {
  if (!github) return <></>;
  return (
    <section id="projects" className="my-20">
      <MinMode />
    </section>
  );
}
