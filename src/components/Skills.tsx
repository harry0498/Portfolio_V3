import { getSkills } from "@/data/data";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="section-heading">
        <div>
          <h2 id="skills-heading">
            Skills<span aria-hidden="true">/</span>
          </h2>
        </div>
      </div>
      <div className="skills-grid">
        {getSkills().map((skill) => (
          <div className="skill-group" key={skill.category}>
            <h3>{skill.category}</h3>
            <ul className="skill-list">
              {skill.skills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
