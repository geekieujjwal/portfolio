import { lazy } from "react";
import { Analytics } from "@vercel/analytics/react";

import HeroComponent from "../Components/HeroComponent";
import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Tech from "./Tech";

const LazyProjects = lazy(() => import("./Projects"));
const LazyServices = lazy(() => import("./Services"));

const Home = () => {
	return (
		<div>
			<HeroComponent />
			<About />
			<LazyProjects />
			<Tech />
			<LazyServices />
			<Blogs />
			<Contact />
			<Analytics />
		</div>
	);
};

export default Home;
