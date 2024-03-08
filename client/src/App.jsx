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
import Foot from "./components/Footer/Foot.tsx";

// add new paths here!
const repoName = `COC-ACM-Website`

const router = createBrowserRouter([
  { path: `/${repoName}/`, element: <HomePage /> },
  { path: `/${repoName}/projects`, element: <Projects /> },
  { path: `/${repoName}/events`, element: <Events />},
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
