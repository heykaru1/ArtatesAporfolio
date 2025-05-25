interface Job {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      title: "Software Developer",
      company: "Java Oracle",
      duration: "Dec 2026 - Present",
      responsibilities: [
        "Developed web applications using React and Node.js.",
        "Implemented RESTful APIs and database optimizations.",
        "Collaborated with cross-functional teams to deliver high-quality software.",
      ],
    },
  ];

  return (
    <div>
      <h2>Experience</h2>
      {jobs.map((job, index) => (
        <div key={index}>
          <h4>{job.title}</h4>
          <p>
            <strong>{job.company}</strong> | {job.duration}
          </p>
          <ul>
            {job.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
