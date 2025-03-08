
const opportunities = [
  {
    title: "Software Engineer Intern",
    location: "Remote",
    description: "An internship opportunity for software engineering students to work on real-world projects.",
    deadline: "March 20, 2025",
  },
  {
    title: "Data Science Fellowship",
    location: "New York, NY",
    description: "A 6-month fellowship program for aspiring data scientists to gain industry experience.",
    deadline: "April 10, 2025",
  },
  {
    title: "Frontend Developer",
    location: "San Francisco, CA",
    description: "We are looking for a frontend developer with React experience to join our team.",
    deadline: "May 5, 2025",
  },
];

const Opportunities = () => {
  return (
    <div className="content">
      <div className="opportunities-container">
        <h1>Current Opportunities</h1>
        {opportunities.map((opportunity, index) => (
          <div className="opportunity-card" key={index}>
            <h2>{opportunity.title}</h2>
            <p className="opportunity-location">{opportunity.location}</p>
            <p className="opportunity-description">{opportunity.description}</p>
            <p className="opportunity-deadline"><strong>Deadline:</strong> {opportunity.deadline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
