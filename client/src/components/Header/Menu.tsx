import React from "react";

import "./Menu.css"

const Menu: React.FC<{tabs: {name: string, path: string}[], repoName: string}> = ({tabs, repoName}) => {
  return (
    <div className="MenuDiv">
      <section style={{ display: "flex", flexDirection: "column" }}>
        {tabs.map((tab) => {
          return (
            <a href={`/${repoName}/#` + tab.path} className="MenuItems" key={tab.name}>
              {tab.name}
            </a>
          );
        })}
      </section>
    </div>
  );
}

export default Menu;