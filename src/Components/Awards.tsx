import { awards } from "../config";
import { SectionHeading } from "./SectionHeading";

const cardClass =
  "grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-[#383839] hover:text-[#fabd2f] duration-200";

export function Awards() {
  if (!awards) return <></>;
  return (
    <section id="awards" className="my-20">
      <div className="container max-w-5xl md:px-4">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <SectionHeading
              title="Awards and Certification"
              icon="🏆"
              barColor="before:bg-[#fabd2f]"
            />
          </div>
          <div className="col-span-12 md:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3">
              <ul>
                {awards.map((award) => {
                  const content = (
                    <>
                      <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                        {award.name} - {award.issuedBy}
                      </h3>
                      <time className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">
                        {award.date}
                      </time>
                      {award.description && (
                        <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                          {award.description}
                        </p>
                      )}
                    </>
                  );
                  return (
                    <li key={award.name}>
                      <article>
                        {award.url ? (
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={award.url}
                            className={cardClass}
                          >
                            {content}
                          </a>
                        ) : (
                          <div className={cardClass}>{content}</div>
                        )}
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
