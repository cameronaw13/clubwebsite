import React, { useEffect, useState, /* useRef */ } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./Header.css";

const Header: React.FC<{routes: {name: string, path: string, element: React.JSX.Element, nodeRef: React.RefObject<any>}[]}> = ({routes}) => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const [startingPage] = useState(location.pathname)
  const [opacity, setOpacity] = useState(isHomePage ? 0 : 1)
    
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
    const welcome = Math.max(window.innerHeight * 0.7,
                    Math.min(window.innerHeight * 0.9,
                    (window.innerWidth * 0.75)
    )); // current WelcomePage height
    const length = welcome / 8; // transition length

    setOpacity(Math.max(0, // scrollY linearly increases from 0 to 1 if transitionStart < scrollY < transitionEnd
              Math.min(1,
              (welcome - window.scrollY - (header+length)) / -length
    )));
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
          <Link to="/">
            <h1 className="HeaderTitle">COC Tech Club</h1>
          </Link>
          <section style={{ display: "flex", flexDirection: "row", gap: "0.25em" }}>
            {routes.map((route) => {
              return (
                  <NavLink
                    key={route.name}
                    to={route.path}
                    className="NavItems"
                  >
                    {route.name}
                  </NavLink>
              );
            })}
          </section>
        </main>
      </nav>
      </CSSTransition>
    </>
  );
};

export default Header;
