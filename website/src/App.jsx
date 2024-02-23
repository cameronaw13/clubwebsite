import { useState } from 'react'
import { 
  BrowserRouter as Router, 
  createBrowserRouter,
  RouterProvider,
  Routes, 
  Route, 
  Link 
} from 'react-router-dom';

import './App.css';

// Add new components here!
import HomePage from './components/HomePage/HomePage.tsx';
import Projects from './components/Projects/Projects.tsx';

// Add new paths here!
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <Projects /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
