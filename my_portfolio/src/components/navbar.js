import React, { useEffect, useRef } from "react";
import { TweenMax, Linear, TimelineLite } from "gsap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const NavBG = styled.nav`
	background-color: #222222;
`;
const NavLinkColor = styled.span`
	color: #fff;

	:hover {
		color: #c9c9c9;
	}
`;

const NavBar = () => {
	let logoElement = useRef(null);
	let linkElementHome = useRef(null);
	let linkElementAbout = useRef(null);
	let linkElementProjects = useRef(null);
	let linkElementContact = useRef(null);

	useEffect(() => {
		TweenMax.to(logoElement, 1, { repeat: 0, rotation: 360, ease: Linear.easeNone });
	});

	function scaleUp() {
		TweenMax.to(logoElement, 1, {
			scale: 1.25,
			ease: Linear.ease,
		});
	}

	function scaleDown() {
		TweenMax.to(logoElement, 1, {
			scale: 0.75,
		});
	}

	function scaleLinkUpHome() {
		// console.log(linkElement.current.focus());
		TweenMax.to(linkElementHome, 0.1, { scale: 1.05, ease: Linear.ease });
	}

	function scaleLinkDownHome() {
		TweenMax.to(linkElementHome, 0.05, { scale: 1, ease: Linear.ease });
	}

	function scaleLinkUpAbout() {
		// console.log(linkElement.current.focus());
		TweenMax.to(linkElementAbout, 0.1, { scale: 1.05, ease: Linear.ease });
	}

	function scaleLinkDownAbout() {
		TweenMax.to(linkElementAbout, 0.05, { scale: 1, ease: Linear.ease });
	}

	function scaleLinkUpProjects() {
		// console.log(linkElement.current.focus());
		TweenMax.to(linkElementProjects, 0.1, { scale: 1.05, ease: Linear.ease });
	}

	function scaleLinkDownProjects() {
		TweenMax.to(linkElementProjects, 0.05, { scale: 1, ease: Linear.ease });
	}

	function scaleLinkUpContact() {
		// console.log(linkElement.current.focus());
		TweenMax.to(linkElementContact, 0.1, { scale: 1.05, ease: Linear.ease });
	}

	function scaleLinkDownContact() {
		TweenMax.to(linkElementContact, 0.05, { scale: 1, ease: Linear.ease });
	}

	return (
		<NavBG>
			<Navbar sticky="top" expand="sm">
				<Container>
					<Navbar.Brand href="#home">
						<div
							ref={element => {
								logoElement = element;
							}}
							onMouseEnter={scaleUp}
							onMouseLeave={scaleDown}
						>
							<img src="http://localhost:3000/components/left_bracket.png" alt="left_bracket" />
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto" />
						<Nav>
							<Nav.Link href="#home">
								<div
									ref={element => {
										linkElementHome = element;
									}}
									onMouseEnter={scaleLinkUpHome}
									onMouseLeave={scaleLinkDownHome}
								>
									<NavLinkColor>Home</NavLinkColor>
								</div>
							</Nav.Link>
							<Nav.Link href="#link">
								<div
									ref={element => {
										linkElementAbout = element;
									}}
									onMouseEnter={scaleLinkUpAbout}
									onMouseLeave={scaleLinkDownAbout}
								>
									<NavLinkColor>About</NavLinkColor>
								</div>
							</Nav.Link>
							<Nav.Link href="#link">
								<div
									ref={element => {
										linkElementProjects = element;
									}}
									onMouseEnter={scaleLinkUpProjects}
									onMouseLeave={scaleLinkDownProjects}
								>
									<NavLinkColor>Projects</NavLinkColor>
								</div>
							</Nav.Link>
							<Nav.Link href="#link">
								<div
									ref={element => {
										linkElementContact = element;
									}}
									onMouseEnter={scaleLinkUpContact}
									onMouseLeave={scaleLinkDownContact}
								>
									<NavLinkColor>Contact</NavLinkColor>
								</div>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</NavBG>
	);
};

export default NavBar;
