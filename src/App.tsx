import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import Members from "./components/Members";
import Publications from "./components/Publications"; // Fixed import
import Events from "./components/Events";
import Opportunities from "./components/Opportunities"; // Fixed spelling


const App = () => {
  return (
    <BrowserRouter>
      <section>
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/members" element={<Members />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/events" element={<Events />} />
            <Route path="/opportunities" element={<Opportunities />} />
            </Routes>
        </div>
        <Foot /> {/* Footer placed correctly */}
      </section>
            </BrowserRouter>
  );
};

export default App;
