import { useState } from "react";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Foot from "../src/components/Footer/Foot.tsx";
import "./App.css";

import HomePage from './components/HomePage/HomePage.tsx';
import Projects from './components/Projects/Projects.tsx';
import Events from './components/Events/Events.tsx';

// Add new paths here!
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <Projects /> },
  { path: "/events", element: <Events />},
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
