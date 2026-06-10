import { experiences } from "../config";
import { SectionHeading } from "./SectionHeading";
import { Tag } from "./Tag";

export function Work() {
  if (!experiences) return <></>;
  return (
    <section id="experience" className="my-20">
      <div className="container max-w-5xl md:pl-4">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <SectionHeading
              title="Experience"
              icon="💼"
              barColor="before:bg-[#b8bb26]"
            />
          </div>
          <div className="col-span-12 md:pl-4 sm:col-span-9">
            <div className="col-span-12 relative md:pl-4 sm:col-span-8  sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              {experiences.map((exp, index, array) => {
                const isNewCompany =
                  index === 0 || exp.company !== array[index - 1]?.company;
                const isCurrent = exp.duration?.end.toLowerCase() === "present";
                const spacing =
                  index === 0 ? "" : isNewCompany ? "mt-7" : "mt-4";

                return (
                  <div
                    key={`${exp.company}-${exp.title}-${exp.duration?.start ?? ""}`}
                    className={`flex flex-col sm:relative sm:before:absolute sm:before:top-2 ${spacing}
                      ${
                        isNewCompany
                          ? "sm:before:w-4 sm:before:h-4"
                          : "sm:before:w-4 sm:before:h-2"
                      }
                      sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#b8bb26]`}
                  >
                    <div className="">
                      {isNewCompany && exp.company && (
                        <h3
                          className={`text-xl font-semibold tracking-wide ${
                            isCurrent ? "text-[#b8bb26]" : ""
                          }`}
                        >
                          {exp.company}
                        </h3>
                      )}
                      <p className="">{exp.title}</p>
                      {exp.duration && (
                        <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                          {exp.duration.start} -{" "}
                          {isCurrent ? (
                            <span className="text-[#b8bb26]">
                              {exp.duration.end}
                            </span>
                          ) : (
                            exp.duration.end
                          )}
                        </time>
                      )}
                      <ul className="list-disc ml-6 mt-2 text-gray-300 space-y-1 whitespace-pre-line">
                        {exp.description?.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                      <div className="text-sm my-2">
                        {exp.toolsUsed?.map((tool) => (
                          <Tag key={tool}>{tool}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
