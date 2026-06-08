import { volunteering } from "../config";
import { SectionHeading } from "./SectionHeading";

export function Volunteering() {
  if (!volunteering) return <></>;

  return (
    <section id="volunteering" className="my-20">
      <div className="container max-w-5xl md:px-4">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <SectionHeading
              title="💼 Volunteering Experience"
              barColor="before:bg-[#b16286]"
            />
          </div>
          <div className="col-span-12 md:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3">
              <ul>
                {volunteering.map((item) => (
                  <li key={`${item.title}-${item.organization}`}>
                    <article className="p-4 rounded-xl lg:p-6 hover:dark:bg-[#383839] hover:text-[#b16286] duration-200">
                      <h3 className="font-semibold text-lg">
                        <span className="font-bold">{item.title}</span>,{" "}
                        {item.organization}
                      </h3>
                      <ul className="list-disc ml-6 mt-2 text-gray-300 space-y-1">
                        {item.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
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
