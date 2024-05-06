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
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const [startingPage] = useState(location.pathname)
  const [opacity, setOpacity] = useState(isHomePage ? 0 : 1)
  const [isMenu, setMenu] = useState(false);
    
  useEffect(() => {
    setOpacity(isHomePage ? 0 : 1)
    if(isHomePage) {
      document.addEventListener("scroll", handleScroll)
      return () => {
        document.removeEventListener("scroll", handleScroll)
      }
    }
  }, [location])

  const handleScroll = () => {
    const header = 70; // header height 
    const welcome = window.innerHeight * (window.innerWidth < 768 ? 0.75 : 0.9); // current WelcomePage height
    const length = welcome / 8; // transition length

    setOpacity(Math.max(0, // scrollY linearly increases from 0 to 1 if transitionStart < scrollY < transitionEnd
              Math.min(1,
              (welcome - window.scrollY - (header+length)) / -length
    )));
  }

  const handleMenu = () => {
    setMenu(!isMenu);
  }

  return (
    <>
      <CSSTransition
          in={location.pathname === "/"}
          timeout={100}
          classNames="trans-div"
        >
      <nav className="Header" style={{ position: startingPage === "/" ? "fixed" : "sticky" }}>
        <CSSTransition
          in={location.pathname === "/"}
          timeout={{
            enter: 100,
            exit: 600,
          }}
          classNames="trans-bg"
        >
          <div className="HeaderBg" style={{ opacity: opacity }}/>
        </CSSTransition>
        <main className="HeaderDiv">
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
            <button onClick={handleMenu} className="NavButton">
              <MenuIcon />
            </button>
          </section>
        </main>
      </nav>
      </CSSTransition>
      { isMenu ? (
        <Menu tabs={tabs} repoName={repoName}/>
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
