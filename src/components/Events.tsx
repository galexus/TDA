 
const events = [
  {
    date: "March 10, 2025",
    title: "Tech Conference 2025",
    description:
      "A conference discussing the latest advancements in AI and robotics.",
  },
  {
    date: "February 5, 2025",
    title: "Startup Pitch Night",
    description:
      "An evening where startups pitch their ideas to investors and industry leaders.",
  },
  {
    date: "January 15, 2025",
    title: "Web Development Bootcamp",
    description:
      "A hands-on workshop covering modern web development technologies.",
  },
];
 
const Events = () => {
  return (
    <div className="content">
      {" "}
      {/* Wrap content with "content" class */}
      <div className="events-container">
        <h1>Upcoming Events</h1>
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h2>{event.title}</h2>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Events;
 
 