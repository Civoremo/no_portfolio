import React, { useEffect, useRef } from "react";
import { Linear, TimelineLite, Back } from "gsap";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { Python, Node } from "styled-icons/fa-brands";
import { Redux, ReactLogo, Javascript, Html5, Css3, Github } from "styled-icons/boxicons-logos";
import mongodb from "./my_images/mongodb1.png";
import postgresql from "./my_images/postgresql1.png";

const MainLogoText = styled.div`
	background-color: #fff;
	margin: 10px 0 10px 60px;
	font-size: 2.5rem;
	font-family: "Open Sans Condensed", sans-serif;
	font-weight: bold;
	letter-spacing: 20px;
	position: relative;
	overflow: hidden;

	@media (max-width: 400px) {
		margin: 0 30px 0 30px;
	}

	@media (max-width: 320px) {
		font-size: 1.7rem;
	}
`;

const MainSubText = styled.div`
	background-color: #fff;
	margin: 10px 0 10px 60px;
	font-size: 1.6rem;
	font-family: "Nunito", sans-serif;
	letter-spacing: 5px;
	position: relative;
	overflow: hidden;

	@media (max-width: 400px) {
		margin: 0 30px 0 30px;
	}

	@media (max-width: 320px) {
		font-size: 1.4rem;
	}
`;

const TechIconsDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	max-width: 600px;
	margin: 0 30px 0 30px;
	text-align: center;

	@media (max-width: 400px) {
		margin: 0;
	}
`;

const MainLogo = () => {
	let developerName = useRef(null);
	let developerSubHeader = useRef(null);
	let lineSegmentSeperator = useRef(null);

	let tlStart = new TimelineLite();
	let tlCards = new TimelineLite();

	const initialHeaderAnimation = () => {
		tlStart
			.set([".lineSeperator", ".nameText", ".subText"], { height: 0 })
			.from(lineSegmentSeperator, 1, { x: -800, ease: Linear.easeNone }, "revealLineFrom")
			.from(developerName, 1, { y: 200, ease: Linear.easeNone }, "revealNameFrom")
			.from(developerSubHeader, 1, { y: -100, ease: Linear.easeNone }, "reavelSubTextFrom")
			.to(lineSegmentSeperator, 1.2, { x: 0, ease: Linear.easeNone }, "revealLine")
			// .delay(.45)
			.to(developerName, 1, { y: 0, ease: Linear.easeNone }, "revealName")
			.to(developerSubHeader, 1, { y: 0, ease: Linear.easeNone }, "revealSubText");
	};

	const cardFlipAnimation = () => {
		tlCards
			.set(
				[
					".python",
					".javascript",
					".html5",
					".css3",
					".node",
					".redux",
					".react",
					".github",
					".mongodb",
					".postgresql",
				],
				{ rotationY: -180, backfaceVisibility: "hidden" }
			)
			.to(".react", 0.3, { rotationY: 0, ease: Back.easeOut })
			.to(".redux", 0.3, { rotationY: 0, ease: Back.easeOut })
			.to(".node", 0.3, { rotationY: 0, ease: Back.easeOut })
			.to(".javascript", 0.3, { rotationY: 0, ease: Back.easeOut })
			.to(".python", 0.3, { rotationY: 0, ease: Back.easeOut })
			.to(".mongodb", 0.3, { rotationY: 0, ease: Back.easeOut })
			.to(".postgresql", 0.3, { rotationY: 0, ease: Back.easeOut })
			.to(".html5", 0.3, { rotationY: 0, ease: Back.easeOut })
			.to(".css3", 0.3, { rotationY: 0, ease: Back.easeOut })
			.to(".github", 0.3, { rotationY: 0, ease: Back.easeOut });
	};

	useEffect(() => {
		initialHeaderAnimation();
		cardFlipAnimation();
	});

	let mainWrapper = {
		height: "400px",
		display: "flex",
		justifyContent: "left",
	};

	let textWrapper = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "100%",
	};

	let lineWrapper = {
		margin: "0 30px 0 30px",
		// minWidth: '400px',
		maxWidth: "600px",
		overflow: "hidden",
		position: "relative",
		zIndex: "10",
		height: "10px",
	};

	return (
		<section style={{ margin: "130px 0 0 0" }} className="home">
			<Container className="text-left">
				<div style={mainWrapper}>
					<div style={textWrapper}>
						<MainLogoText>
							<div ref={element => (developerName = element)}>
								<span className="nameText" style={{ zIndex: "8" }}>
									Nedim Omerovic
								</span>
							</div>
						</MainLogoText>
						<div style={lineWrapper}>
							<div
								className="lineSeperator"
								style={{ position: "absolute", border: "5px solid red", width: "100%" }}
								ref={element => (lineSegmentSeperator = element)}
							></div>
						</div>
						<MainSubText>
							<div ref={element => (developerSubHeader = element)}>
								<span className="subText" style={{ zIndex: 5 }}>
									Full-stack Developer
								</span>
							</div>
						</MainSubText>
						<TechIconsDiv>
							<ReactLogo
								className="react"
								style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
							/>
							<Redux
								className="redux"
								style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
							/>
							<Node
								className="node"
								style={{
									height: "40px",
									width: "40px",
									margin: "5px 10px 0 10px",
									position: "relative",
									// top: "13px",
								}}
							/>
							<Javascript
								className="javascript"
								style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
							/>
							<Python
								className="python"
								style={{
									height: "40px",
									width: "40px",
									margin: "5px 10px 0 10px",
									position: "relative",
									// top: "13px",
								}}
							/>
							<div
								className="mongodb"
								style={{
									backgroundColor: "#fff",
									border: "1px solid #fff",
									// border: "1px solid red",
									height: "40px",
									width: "40px",
									margin: "5px 10px 0 10px",
									position: "relative",
								}}
							>
								<img
									src={mongodb}
									alt={"mongodb icon"}
									style={{
										height: "40px",
										width: "40px",
										// margin: "5px 10px 0 10px",
										// position: "absolute",
									}}
								/>
							</div>
							<div
								className="postgresql"
								style={{
									backgroundColor: "#fff",
									border: "1px solid #fff",
									// border: "1px solid red",
									height: "40px",
									width: "40px",
									margin: "5px 10px 0 10px",
									position: "relative",
								}}
							>
								<img
									// className="postgresql"
									src={postgresql}
									alt={"postgresql icon"}
									style={{ height: "40px", width: "40px" }}
								/>
							</div>
							<Html5
								className="html5"
								style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
							/>
							<Css3
								className="css3"
								style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
							/>
							<Github
								className="github"
								style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
							/>
						</TechIconsDiv>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default MainLogo;
