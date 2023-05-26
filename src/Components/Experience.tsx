import { experiences } from "../config";

export function Experience(): JSX.Element {
  if (!experiences) return <></>;
  return (
    <section id="experience" className="my-20">
      <div className="container max-w-5xl md:px-4">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-10 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#b8bb26]">
              <h1 className="text-3xl font-semibold">💼 Experience</h1>
            </div>
          </div>
          <div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#b8bb26]"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {exp.company}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    {exp.years}
                  </time>
                  <p className="mt-3">{exp.title}</p>
                  <p className="text-sm dark:text-gray-400">
                    {exp.description}
                  </p>
                  <div className="text-sm mt-2">
                    {exp.toolsUsed &&
                      exp.toolsUsed.map((tool, index) => (
                        <span
                          key={index}
                          className="inline-block dark:bg-gray-500 bg-[#1e1e1f] rounded-full px-2 py-1 mr-1 mt-1"
                        >
                          {tool}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
