const Skills: React.FC = () => {
  const skills: string[] = [
    "JavaScript (React, Node.js)",
    "Python & Django",
    "Database Management (SQL, MongoDB)",
    "Cloud Computing (AWS, Azure)",
    "Version Control (Git, GitHub)",
  ];

  return (
    <div>
      <h3>Skills</h3>
      <ul className="list-unstyled">
        {skills.map((skill, index) => (
          <li key={index}>🔹 {skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
