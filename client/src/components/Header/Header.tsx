import React from "react";

import "./Header.css";

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
        <h1 style={{ color: "var(--COC-Blue)" }}>COC Tech Club</h1>
        <section style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          {tabs.map((tab) => {
            return (
              <a href={"/clubwebsite/#" + tab.path} className="NavItems" key={tab.name}>
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
