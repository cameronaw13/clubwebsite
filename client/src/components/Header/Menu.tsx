import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Menu.css"
import { MenuIcon } from "../../assets/Header/MenuIcon.tsx";
import "../../assets/Header/MenuAssets.css";

const Menu: React.FC<{routes: {name: string, path: string}[]}> = ({routes}) => {
  const [isMenu, setMenu] = useState(false);
  
  const handleMenu = () => {
    setMenu(!isMenu);
  }
  
  return (
    <div className="Menu">
      <button onClick={handleMenu} className="MenuBtn">
        <MenuIcon />
      </button>
      { isMenu ? (
        <div className="MenuDiv">
          <section style={{ display: "flex", flexDirection: "column", gap: "0.25em" }}>
            {routes.map((route) => {
              return (
              <NavLink
                key={route.name}
                to={route.path}
                className="MenuItems"
              >
                {route.name}
              </NavLink>
              );
            })}
          </section>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Menu;