import { educations } from "../config";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  if (!educations) return <></>;
  return (
    <section id="education" className="my-20">
      <div className="container max-w-5xl md:px-4">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <SectionHeading
              title="Education"
              icon="🎓"
              barColor="before:bg-[#fb4934]"
            />
          </div>
          <div className="col-span-12 md:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              {educations.map((edu) => (
                <div
                  key={edu.school}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#fb4934]"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {edu.school}
                  </h3>
                  {edu.graduation && (
                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                      {edu.graduation}
                    </time>
                  )}
                  <p className="mt-1">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
