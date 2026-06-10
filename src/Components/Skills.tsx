import { skills } from "../config";
export function Skills() {
  if (!skills) return <></>;
  return (
    <section id="skills" className="my-20">
      <h2 className="text-3xl font-semibold">
        <span aria-hidden="true">🧠 </span>Skills
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-10 gap-4 mt-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <i className={`${skill.icon} fa-3x mb-2`} aria-hidden="true"></i>
            <div className="text-sm">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
