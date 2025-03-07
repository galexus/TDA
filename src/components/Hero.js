import React from "react";
 
const Hero = () => {
  return (
    <React.Fragment>
      <section>
        <div className="centered h-screen -mt-20">
          <div>
            <div className="text-white">
              <p className="text-4xl md:text-6xl Carousel">
                <img src={require("./assets/hero.jpg")} alt="cat" />
              </p>
            </div>
 
            <div className="space-x-10 mt-9 centered about">
              <div className="bg-red-500">
                <h1>About</h1>
                <br></br>
                <h3>MIssion and Aim</h3>
                <br></br>
                <p>
                  <strong> Mission.</strong> To support and foster knowledge
                  creators in mathematically inspired and underpinned AI and
                  Machine Learning for enterprising applications with a strong
                  purpose for the public good.
                </p>
                <p>
                  <strong> Aim.</strong> Promoting innovative research to
                  leverage the wealth of rigorous knowledge established over
                  centuries in Topology and Group Theory for developing highly
                  efficient Explainable Artificial Intelligence (XAI) algorithms
                  of data-driven applications of ever increasing complex
                  enterprises.{" "}
                </p>
                <br></br>
                <p>
                  The turn of the 21st century witnessed the rapid advancement
                  of Machine Learning (ML) and Artificial Intelligence (AI)
                  models for data analysis while the field of Topological Data
                  Analysis (TDA) began to emerge as a new paradigm in computing
                  the topological profile (spatial distribution or shape) of
                  high dimensional data. TDA stipulates that Data have Shapes
                  determined by data similarity. Recently, there has been rising
                  interest in combining the underpinning theories and techniques
                  of TDA and AI to deal with the emerging challenges primarily
                  associated with trustworthy analysis of data of high dimension
                  and/or complexity. This is more urgent in relation to
                  explainability of Deep Learning (DL) decisions in healthcare
                  systems and other critical applications.
                </p>
                <p>
                  The center for Topological Machine Learning and Innovation
                  (TMLI) has been recently initiated at University of Buckingham
                  as a culmination of decades of successful mathematically
                  inspired research into the development of innovative machine
                  learning and artificial intelligence in safety critical
                  applications. Challenging applications of current interest
                  relate to developing smart efficient ML and AI algorithms in
                  the field of security and healthcare (e.g. detection of
                  deepfake videos, morphing attacks on Face biometrics, and
                  tumor diagnostics from tissue/organ scans). Our work is based
                  on the emerging paradigm shift of TDA, and is primarily
                  influenced by our pioneering landmark-based TDA approach for
                  the analysis of image dataset that have been demonstrated to
                  succeed in detecting signs of tiny imperceptible
                  distortions/changes.
                </p>
              </div>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
 
export default Hero;
 
 