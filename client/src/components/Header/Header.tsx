import React, { useEffect, useState, /* useRef */ } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./Header.css";
import "../../assets/Header/HeaderAssets.css";
import { MenuIcon } from "../../assets/Header/MenuIcon.tsx";
import Menu from "./Menu.tsx";

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
  },
  {
    name: `Join`,
    path: `/join`,
  },
];

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = () => { return location.pathname === "/" }
  const [opacity, setOpacity] = useState(isHomePage() ? 0 : 1)
  const [isMenu, setMenu] = useState(false);
  //const nodeRef = useRef(null);
    
  useEffect(() => {
    setOpacity(isHomePage() ? 0 : 1)
    if(isHomePage()) {
      document.addEventListener("scroll", handleScroll)
      return () => {
        document.removeEventListener("scroll", handleScroll)
      }
    }
  }, [location])

  const handleScroll = () => {
    const bottom = 70; // header height
    const height = window.innerHeight / 8; // transition height
    if(window.scrollY < window.innerHeight - (bottom+height)) setOpacity(0)
    else if(window.scrollY > window.innerHeight - bottom) setOpacity(1)
    else {
      setOpacity(Math.abs(window.innerHeight - window.scrollY - (bottom+height)) / height)
    }
  }

  const handleMenu = () => {
    setMenu(!isMenu);
  }

  return (
    <>
      <nav className="Header">
        <CSSTransition
          in={location.pathname === "/"}
          timeout={{
            enter: 100,
            exit: 600,
          }}
          classNames="headerbg"
          //nodeRef={nodeRef}
        >
          <div className="HeaderBackground" style={{ opacity: opacity }}/>
        </CSSTransition>
        <main className="HeaderContainer">
          <a href={`/${repoName}/#/`}>
            <h1 className="HeaderTitle">COC Tech Club</h1>
          </a>
          <section style={{ display: "flex", flexDirection: "row" }}>
            {tabs.map((tab) => {
              return (
                  <a href={`/${repoName}/#` + tab.path} className="NavItems" key={tab.name}>
                    {tab.name}
                  </a>
              );
            })}
            <button onClick={handleMenu} className="NavMenu">
              <MenuIcon />
            </button>
          </section>
        </main>
      </nav>
      { isMenu ? (
        <Menu />
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
