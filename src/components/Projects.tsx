interface Project {
    name: string;
    description: string;
    link: string;
  }
  
  const Projects: React.FC = () => {
    const projects: Project[] = [
      {
        name: "Portfolio Website",
        description: "Built a personal portfolio using React and TypeScript.",
        link: "https://github.com/heykaru1",
      },
    ];
  
    return (
      <div>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;
  