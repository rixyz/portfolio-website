import { awards } from "../config";

export function Awards(): JSX.Element {
  if (!awards) return <></>;
  return (
    <section id="awards" className="my-20">
      <div className="container max-w-5xl md:px-4">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-10 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#fabd2f]">
              <h1 className="text-3xl font-semibold">
                🏆 Awards and Certification{" "}
              </h1>
            </div>
          </div>
          <div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3">
              <ul>
                {awards.map((award, index) => (
                  <li key={index}>
                    <article>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={award.url}
                        className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-[#383839] hover:text-[#fabd2f] duration-200"
                      >
                        <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                          {award.name} - {award.issuedBy}
                        </h3>
                        <time className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">
                          {award.date}
                        </time>
                        <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                          {award.description}
                        </p>
                      </a>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
