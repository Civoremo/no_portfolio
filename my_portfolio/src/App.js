import React from "react";
import "./App.css";

import NavBar from "./components/navbar";
import MainHeader from "./components/mainHeader";
import AboutMe from "./components/aboutme";
import Projects from "./components/projects";
import ContactForm from "./components/contactSection";
import FooterBar from "./components/footerBar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<MainHeader />
			<AboutMe />
			<Projects />
			<ContactForm />
			<FooterBar />
		</div>
	);
}

export default App;
