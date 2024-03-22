import React from "react";
import "./Foot.css";

const repoName = `clubwebsite`

const tabs = [
  {
    name: `Home`,
    path: `/`,
  },
  {
    name: `Projects`,
    path: `/projects`,
  },
  {
    name: `Events`,
    path: `/events`,
  }
];

const Foot: React.FC = () => {
  return (
    <nav className="Foot">
      <main className="FootContainer">
        <a href={`/${repoName}/#/`} className="FootTitleButton">
          <h1 className="FootTitle">COC Tech Club</h1>
        </a>
        <section style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          {tabs.map((tab) => {
            return (
              <a href={`/${repoName}/#` + tab.path} className="NavItems" key={tab.name}>
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
