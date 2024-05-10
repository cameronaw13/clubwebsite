// libraries
import { createRef } from "react";
import { createHashRouter, RouterProvider, useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

// css files
import "./App.css";

// components
import Header from "./components/Header/Header.tsx";
import Menu from "./components/Menu/Menu.tsx";
import Footer from "./components/Footer/Footer.tsx"
import HomePage from './components/HomePage/HomePage.tsx';
import Projects from './components/Projects/Projects.tsx';
import Events from './components/Events/Events.tsx';
import JoinForm from "./components/JoinForm/JoinForm.tsx";

const Page = () => {
	const location = useLocation();
	const outlet = useOutlet();
	const pageRef = createRef();
	
	return (
		<>
			<Header routes={routes}/>
			<Menu routes={routes}/>
			<SwitchTransition>
				<CSSTransition
					key={location.pathname}
					timeout={{
						enter: 200,
						exit: 100,
					}}
					classNames="page"
					nodeRef={pageRef}
					unmountOnExit
				>
					<div ref={pageRef}>
						{outlet}
					</div>
				</CSSTransition>
			</SwitchTransition>
			<Footer />
		</>
	)
}

const routes = [
	{
		name: "Home",
		path: "/",
		element: <HomePage />
	},
	{
		name: "Projects",
		path: "/projects",
		element: <Projects />
	},
	{
		name: "Events",
		path: "/events",
		element: <Events />
	},
	{
		name: "Join",
		path: "/join",
		element: <JoinForm />
	}
];

// Add new paths here!
const router = createHashRouter([
	{
		element: <Page />,
		children: routes.map((route) => ({
			path: route.path,
			element: route.element,
		}))
	},
]);

const App = () => {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
