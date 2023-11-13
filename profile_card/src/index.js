import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Zayra Thomas",
  intro:
    "Software developer who is currently honing her skills in React. I like doing makeup art on the side and pretending to be the hardended protagonist of a 80s sci-fi",
  icon: "me.jpg",
};
const skillData = [
  {
    language: "React.Js",
    level: "beginner",
    color: "red",
  },
  {
    language: "HTML + CSS",
    level: "advanced",
    color: "blue",
  },
  {
    language: "Jacascript",
    level: "advanced",
    color: "magenta",
  },
  {
    language: "Jetpack Compose",
    level: "intermediate",
    color: "cyan",
  },
  {
    language: "Kotlin",
    level: "intermediate",
    color: "orange",
  },
  {
    language: "PHP",
    level: "intermediate",
    color: "yellow",
  },
];

function App() {
  const currentProfile = profile;
  return (
    <div className="card">
      <Avatar icon={currentProfile.icon} name={currentProfile.name} />
      <div className="data">
        <Intro name={currentProfile.name} intro={currentProfile.intro} />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar({ icon, name }) {
  return <img className="avatar" src={icon} alt={name} />;
}

//descructured props by passing in direct object prop
function Intro({ name, intro }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{intro}</p>
    </div>
  );
}

function SkillList() {
  const skills = skillData;
  /*
  return (
    <ul className="skill-list">
      <Skill skill={skills[0]} skillColor="red" emoji="🤖" />
      <Skill skill={skills[1]} skillColor="orange" emoji="👽" />
      <Skill skill={skills[2]} skillColor="cyan" emoji="🤛" />
      <Skill skill={skills[3]} skillColor="green" emoji="👩‍🎓" />
      <Skill skill={skills[4]} skillColor="yellow" emoji="🍔" />
    </ul>
  );
  */
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          language={skill.language}
          key={index}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </ul>
  );
}

function Skill({ language, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{language}</span>
      <span>
        {level === "beginner" && "👽"}
        {level === "intermediate" && "🤖"}
        {level === "advanced" && "🤛"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
