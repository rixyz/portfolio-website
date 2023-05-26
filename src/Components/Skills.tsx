import { skills } from "../config1";
export function Skills(): JSX.Element {
  if (!skills) return <></>;
  return (
    <section id="skills" className="my-20">
      <h1 className="text-3xl font-semibold">🧠 Skills</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <i className={`${skill.icon} fa-3x mb-2`}></i>
            <div className="text-sm">{skill.skillName}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
