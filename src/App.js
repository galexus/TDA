import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import Members from "./components/Members";
import Publications from "./components/Publications"; // Fixed import
import Events from "./components/Events";
import Opportunities from "./components/Opportunities"; // Fixed spelling

const App = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default App;
