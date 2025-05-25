const Certifications: React.FC = () => {
    const certifications: string[] = [
      "AWS Certified Cloud Practitioner - 2026",
    ]
  
    return (
      <div>
        <h2>Certifications</h2>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Certifications;
  