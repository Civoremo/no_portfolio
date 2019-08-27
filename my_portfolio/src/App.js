import React from "react";
import "./App.css";

import NavBar from "./components/navbar";
import MainHeader from './components/mainHeader';
import AboutMe from './components/aboutme';
import Projects from './components/projects';

function App() {
	return (
		<div className="App">
			<NavBar />
			<MainHeader />
			<AboutMe />
			<Projects />
			{/* <p>This is temp text</p> */}
		</div>
	);
}

export default App;
