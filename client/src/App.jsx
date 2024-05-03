// libraries
//import { createRef } from "react";
import { createHashRouter, RouterProvider, useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

// css files
import "./App.css";

// components
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx"
import HomePage from './components/HomePage/HomePage.tsx';
import Projects from './components/Projects/Projects.tsx';
import Events from './components/Events/Events.tsx';
import JoinForm from "./components/JoinForm/JoinForm.tsx";

const Page = () => {
	const location = useLocation();
	const outlet = useOutlet();
	//const nodeRef = createRef(null);
	return (
		<>
			<Header />
			<SwitchTransition>
				<CSSTransition
					key={location.pathname}
					timeout={{
						enter: 200,
						exit: 100,
					}}
					classNames="page"
					//nodeRef={nodeRef}
					unmountOnExit
				>
				{outlet}
				</CSSTransition>
			</SwitchTransition>
			<Footer />
		</>
	)
}

// Add new paths here!
const router = createHashRouter([
	{
		element: <Page />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/projects", element: <Projects /> },
			{ path: "/events", element: <Events /> },
			{ path: "/join", element: <JoinForm /> },
		],
	},
]);

const App = () => {
	return (
		<>
			<section style={{ marginTop: '70px' }}>
				<RouterProvider router={router} />
			</section>
		</>
	);
}

export default App;
