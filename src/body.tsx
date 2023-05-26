import { Skills } from "./Components/Skills";
import { Education } from "./Components/Education";
import { Experience } from "./Components/Experience";
import { Awards } from "./Components/Awards";
import { ProjectList } from "./Components/Projects";
import { OtherWork } from "./Components/OtherWork";
import { user } from "./config";

function StringToJSX({ htmlString }: { htmlString: string }): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export function Body(): JSX.Element {
  return (
    <main className="lg:w-3/5 lg:m-10  m-6">
      <div className="flex justify-between">
        <div className="text-3xl text-emerald-500 font-bold">Portfolio</div>
        <div className="text-white md:flex hidden justify-between bg-[#383839] rounded-bl-xl rounded-tr-xl border border-[#666666]">
          {[
            ["About", "#about"],
            ["Education", "#education"],
            ["Projects", "#projects"],
          ].map(([title, url]) => (
            <a
              href={url}
              className="text-lg p-5 hover:text-[#d6d6d6b2] duration-500"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
      <div>
        <section id="about" className="my-5">
          <h1 className="text-3xl font-semibold">🧑 About Me</h1>
          <StringToJSX htmlString={user.about} />
        </section>
        <Skills />
        <Education />
        <Experience />
        <Awards />
        <ProjectList />
        <OtherWork />
      </div>
    </main>
  );
}
