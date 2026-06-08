import { extraProjects } from "../config";
import { SectionHeading } from "./SectionHeading";
import { Tag } from "./Tag";
import { ProjectImage } from "./ProjectImage";

export function ExtraProjects() {
  if (!extraProjects) return <></>;
  return (
    <section id="extraProjects" className="my-20">
      <SectionHeading
        title="📁 Extra Projects"
        subtitle="Mostly Designs"
        barColor="before:bg-[#83a598]"
        variant="center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2 w-full lg:w-11/12">
        {extraProjects.map((work) => (
          <div
            key={work.name}
            className="rounded-lg p-4 flex flex-col items-center border border-[#383838] dark:bg-[#1e1e1f] bg-gray-500 text-white "
          >
            <ProjectImage src={work.imageUrl} name={work.name} />
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
              {work.toolsUsed?.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
            <div className="flex justify-end w-full mt-auto pt-1">
              <span className="text-sm text-gray-500 mr-2">{work.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
