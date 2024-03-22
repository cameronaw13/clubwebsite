// libraries
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

// css files
import "./App.css";

// components
import HomePage from './components/HomePage/HomePage.tsx';
import Projects from './components/Projects/Projects.tsx';
import Events from './components/Events/Events.tsx';
import Foot from "./components/Footer/Foot.tsx";

// Add new paths here!
const router = createHashRouter([
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <Projects /> },
  { path: "/events", element: <Events />},
]);

function App() {
  return (
    <>
      <Foot />
      <section style={{ marginTop: '85px'}}>
      <RouterProvider router={router} />
      </section>
    </>
  );
}

export default App;
