import { Repo } from "../Type";
import { user } from "../config";
const { github } = user;
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function MinMode(): JSX.Element {
  const { isLoading, error, data } = useQuery<Repo[]>({
    queryKey: ["repoData"],
    queryFn: () =>
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
          return Promise.all(fetchLanguages);
        })
        .catch((error) => {
          console.log("Error fetching GitHub projects:", error);
          throw new Error("Error fetching GitHub projects");
        }),
  });

  if (isLoading)
    return (
      <div className="flex justify-center">
        <button
          disabled
          type="button"
          className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-[#1d2021] dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#1C64F2"
            />
          </svg>
          Loading...
        </button>
      </div>
    );

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-fit mx-auto">
        <strong className="font-bold">Error! </strong>
        <span className="block sm:inline">
          Failed to fetch projects. Try again later
        </span>
      </div>
    );
  }

  if (!data) return <></>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2 w-full lg:w-11/12">
      {data.map((project, index) => (
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
  );
}

export function ProjectList(): JSX.Element {
  if (!github) return <></>;
  return (
    <QueryClientProvider client={queryClient}>
      <section id="projects" className="my-20">
        <div className="text-center mb-10 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-[#458588]">
          <h3 className="text-3xl font-semibold">📁 Projects</h3>
          <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
            From GitHub
          </span>
        </div>
        <MinMode />
      </section>
    </QueryClientProvider>
  );
}
