// libraries
import { useState } from "react";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// css files
import "./App.css";

// components
import HomePage from './components/HomePage/HomePage.tsx';
import Projects from './components/Projects/Projects.tsx';
import Events from './components/Events/Events.tsx';
import Foot from "../src/components/Footer/Foot.tsx";

// Add new paths here!
const router = createBrowserRouter([
  { path: "/COC-TECH-CLUB-Website/", element: <HomePage /> },
  { path: "/COC-TECH-CLUB-Website/projects", element: <Projects /> },
  { path: "/COC-TECH-CLUB-Website/events", element: <Events />},
]);

function App() {
  return (
    <>
      <Foot />
      <section style={{ marginTop: '10%'}}>
      <RouterProvider router={router} />
      </section>
    </>
  );
}

export default App;
