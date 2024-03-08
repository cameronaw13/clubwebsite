import React from "react";
import "./Foot.css";

const repoName = `COC-ACM-Website`

const tabs = [
  {
    name: `Home`,
    path: `/${repoName}/`,
  },
  {
    name: `Projects`,
    path: `/${repoName}/projects`,
  },
  {
    name: `Events`,
    path: `/${repoName}/events`,
  }
];

const Foot: React.FC = () => {
  return (
    <nav className="Foot">
      <main className="FootContainer">
        <p>
          <h1 style={{ color: "white" }}>COC Tech Club</h1>
        </p>
        <section style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          {tabs.map((tab) => {
            return (
              <a href={tab.path} className="NavItems" key={tab.name}>
                {tab.name}
              </a>
            );
          })}
        </section>
      </main>
    </nav>
  );
};

export default Foot;
