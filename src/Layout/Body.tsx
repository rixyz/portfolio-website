import { Skills } from "../Components/Skills";
import { Education } from "../Components/Education";
import { Work } from "../Components/Work";
import { Awards } from "../Components/Awards";
import { ProjectList } from "../Components/Projects";
import { ExtraProjects } from "../Components/ExtraProjects";
import { user } from "../config";
import { Volunteering } from "../Components/Volunteering";
import { Footer } from "../Components/Footer";

function StringToJSX({ htmlString }: { htmlString: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlString }}
      className="text-left whitespace-pre-line"
    />
  );
}

export function Body() {
  return (
    <main className="lg:w-3/5 lg:m-10 m-6">
      <div className="flex justify-between">
        <h1 className="text-3xl text-emerald-500 font-bold">Portfolio</h1>
        <div className="text-white md:flex hidden justify-between bg-[#383839] rounded-bl-xl rounded-tr-xl border border-[#666666]">
          {[
            ["Experience", "#experience"],
            ["Education", "#education"],
            ["Projects", "#projects"],
          ].map(([title, url]) => (
            <a
              href={url}
              key={title}
              className="text-lg p-5 hover:text-[#d6d6d6b2] duration-500"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
      <div>
        <section id="about" className="my-5">
          <h2 className="text-3xl font-semibold">
            <span aria-hidden="true">🧑 </span>About Me
          </h2>
          <StringToJSX htmlString={user.about} />
        </section>
        <Skills />
        <Work />
        <Education />
        <ProjectList />
        <Awards />
        <Volunteering />
        <ExtraProjects />
      </div>
      <Footer />
    </main>
  );
}
