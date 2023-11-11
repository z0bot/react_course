import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Zayra Thomas",
  intro:
    "Software developer who is currently honing her skills in React. I like doing makeup art on the side and pretending to be the hardended protagonist of a 80s sci-fi",
  icon: "me.jpg",
  skills: ["React.Js", "Kotlin", "Jetpack Compose", "PHP", "HTML + CSS"],
};

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
        <SkillList skills={currentProfile.skills} />
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

function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      <Skill skill={skills[0]} skillColor="red" emoji="🤖" />
      <Skill skill={skills[1]} skillColor="orange" emoji="👽" />
      <Skill skill={skills[2]} skillColor="cyan" emoji="🤛" />
      <Skill skill={skills[3]} skillColor="green" emoji="👩‍🎓" />
      <Skill skill={skills[4]} skillColor="yellow" emoji="🍔" />
    </ul>
  );
  /*
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <Skill skill={skill} key={index} skillColor="red" />
      ))}
    </ul>
  );
  */
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.skillColor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
