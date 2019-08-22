import React from "react";
import "./App.css";

import NavBar from "./components/navbar";
import MainHeader from './components/mainHeader';
import AboutMe from './components/aboutme';

function App() {
	return (
		<div className="App">
			<NavBar />
			<MainHeader />
			<AboutMe />
			{/* <p>This is temp text</p> */}
		</div>
	);
}

export default App;
