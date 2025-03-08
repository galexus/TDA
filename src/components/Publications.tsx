import React from "react";
 
const publications = [
  {
    year: "2016",
    entries: [
      {
        title:
          "EFFECT OF VARYING THE COMPOSITION AND NANOSTRUCTURE OF ORGANIC CARBONATE-CONTAINING LYOTROPIC LIQUID CRYSTAL POLYMER ELECTROLYTES ON THEIR IONIC CONDUCTIVITY",
        authors:
          "R.L. Kerr, J.P. Edwards (University of Colorado at Boulder), S.C. Jones (Contour Energy Systems), B.J. Elliott (TDA Research, Inc.), D.L. Gin (University of Colorado at Boulder)",
        journal: "Polymer Journal, October 2016, 48, 635-643",
      },
    ],
  },
  {
    year: "2015",
    entries: [
      {
        title:
          "COMPOSITE SAMPLING APPROACHES FOR BACILLUS ANTHRACIS SURROGATE EXTRACTED FROM SOIL",
        authors: "Author names here",
        journal: "Journal details here",
      },
    ],
  },
];
 
const Publications = () => {
  return (
    <div className="content">
      {" "}
      {/* Wrap content with "content" class */}
      <div className="publications-container">
        <h1>Publications</h1>
        {publications.map((section) => (
          <div key={section.year}>
            <div className="year-header">{section.year}</div>
            {section.entries.map((entry, index) => (
              <div className="publication-entry" key={index}>
                <h3>{entry.title}</h3>
                <p className="authors">{entry.authors}</p>
                <p className="journal">{entry.journal}</p>
                <button className="abstract-button">Abstract</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Publications;