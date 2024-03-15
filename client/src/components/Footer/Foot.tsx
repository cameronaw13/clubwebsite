import React from "react";
import "./Foot.css";

const tabs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Events",
    path: "/events",
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
