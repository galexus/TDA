import { Link } from "react-router-dom";
// Import the AppRoutes type - TypeScript will use this for type checking
import { AppRoutes } from "../../types/client/routes";
 
const Navbar = () => {
  // You can use AppRoutes in your code for stronger type checking
  const homeRoute: AppRoutes = "/";
  const membersRoute: AppRoutes = "/members";
  
  return (
    <header className="header">
      <Link to="/" className="logo">
        <div>
          <img
            src={require("./assets/logo.png")}
            alt="TopML - Centre of Topological Machine Learning and Innovation "
          />
        </div>
        <div className="Htext">
          TopML Centre of Topological Machine Learning and Innovation
        </div>
      </Link>
 
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/members">Members</Link>
        <Link to="/publications">Publication</Link>
        <Link to="/events">Events</Link>
        <Link to="/opportunities">Opportunities</Link>
      </nav>
    </header>
  );
};
 
export default Navbar;