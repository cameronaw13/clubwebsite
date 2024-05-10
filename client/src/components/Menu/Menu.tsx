import React, { useState, useEffect, createRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Menu.css"
import { MenuIcon } from "../../assets/Header/MenuIcon.tsx";
import "../../assets/Header/MenuAssets.css";

const Menu: React.FC<{routes: {name: string, path: string}[]}> = ({routes}) => {
  const location = useLocation();
  const [isMenu, setMenu] = useState(false);
  const [width, setWidth] = useState(Number.MAX_VALUE);

  const nodeRef = createRef<any>();
  const menuRef = createRef<any>();

  const handleMenu = () => {
    setMenu(!isMenu);
  }

  useEffect(() => {
    const handleClick = (event) => {
      if(!nodeRef.current?.contains(event.target)) {
        setMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, [nodeRef]);

  useEffect(() => {
    setWidth(menuRef.current?.offsetWidth);
  }, [menuRef]);
  
  return (
    <div ref={nodeRef}>
      <button className="MenuBtn" onClick={handleMenu}>
        <MenuIcon open={isMenu}/>
      </button>
      <div className="Menu" ref={menuRef} style={{ right: isMenu ? 0 : -width }}>
        <section className="MenuSection">
          {routes.map((route) => {
            return (
            <NavLink
              key={route.name}
              to={route.path}
              className="MenuItems"
              onClick={() => {
                if(location.pathname === route.path)
                  window.scrollTo(0,0)
                setMenu(false)
              }}
            >
              {route.name}
            </NavLink>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Menu;