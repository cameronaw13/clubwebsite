// libraries
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

// css files
import "./App.css";

// components
import Header from "./components/Header/Header.tsx";
import HomePage from './components/HomePage/HomePage.tsx';
import Projects from './components/Projects/Projects.tsx';
import Events from './components/Events/Events.tsx';
import JoinForm from './components/JoinForm/JoinForm.tsx'

// Add new paths here!
const router = createHashRouter([
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <Projects /> },
  { path: "/events", element: <Events />},
  { path: "/join", element: <JoinForm />}
]);

function App() {
  return (
    <>
      <Header />
      <section style={{ marginTop: '10%'}}>
      <RouterProvider router={router} />
      </section>
    </>
  );
}

export default App;
