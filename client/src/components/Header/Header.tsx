import React, { useEffect, useState, createRef } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./Header.css";

const Header: React.FC<{routes: {name: string, path: string, element: React.JSX.Element, nodeRef: React.RefObject<any>}[]}> = ({routes}) => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const [startingPage] = useState(location.pathname)
  const [opacity, setOpacity] = useState(isHomePage ? 0 : 1)

  const headerRef = createRef<any>();
  const bgRef = createRef<any>();
    
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
          nodeRef={headerRef}
      >
        <nav className="Header" ref={headerRef} style={{ position: startingPage === "/" ? "fixed" : "sticky" }}>
          <CSSTransition
            in={location.pathname === "/"}
            timeout={{
              enter: 100,
              exit: 600,
            }}
            classNames="trans-bg"
            nodeRef={bgRef}
          >
            <div className="HeaderBg" ref={bgRef} style={{ opacity: opacity }}/>
          </CSSTransition>
          <main className="HeaderMain">
            <Link
              to="/"
              onClick={() => window.scrollTo(0,0)}
            >
              <h1 className="HeaderTitle">COC Tech Club</h1>
            </Link>
            <section className="HeaderSection">
              {routes.map((route) => {
                return (
                    <NavLink
                      key={route.name}
                      to={route.path}
                      className="NavItems"
                      onClick={() => {
                        if(location.pathname === route.path)
                          window.scrollTo(0,0)
                      }}
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
