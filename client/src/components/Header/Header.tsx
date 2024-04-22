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

const Header: React.FC = () => {
  return (
    <nav className="Header">
      <main className="HeaderContainer">
        <p>
          <h1 className="HeaderTitle">COC Tech Club</h1>
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

export default Header;
