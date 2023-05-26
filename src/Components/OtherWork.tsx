import { otherWorks } from "../config1";

export function OtherWork(): JSX.Element {
  if (!otherWorks) return <></>;
  return (
    <section id="otherWork" className="my-20">
      <div className="">
        <div className="text-center  mb-10 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-[#458588]">
          <h3 className="text-3xl font-semibold">📁 Other Works</h3>
          <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
            Mostly Designs
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2 w-full lg:w-11/12">
          {otherWorks.map((work, index) => (
            <div
              key={index}
              className="rounded-lg p-4 flex flex-col items-center border border-[#383838] dark:bg-[#1e1e1f] bg-gray-500 text-white "
            >
              <img
                src={work.imageUrl}
                alt={work.name}
                className="mb-4 rounded-lg"
              />
              <a
                className="font-bold text-lg mb-2"
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {work.name}
              </a>
              <p className="text-sm text-center mb-2">{work.description}</p>
              <div className="text-sm mt-2">
                {work.toolsUsed &&
                  work.toolsUsed.map((tool, index) => (
                    <span
                      key={index}
                      className="inline-block dark:bg-gray-500 bg-[#1e1e1f] rounded-full px-2 py-1 mr-1 mt-1"
                    >
                      {tool}
                    </span>
                  ))}
              </div>
              <div className="flex justify-end w-full mt-auto pt-1">
                <span className="text-sm text-gray-500 mr-2">{work.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
