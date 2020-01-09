import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import * as ProjectComponents from "./Projects/indexProjects";

const {
	ARQ,
	PPSR,
	LUNCHER,
	TETRIS,
	PORTFOLIO,
	BACKYARDSPORTLEAGUE,
	ARCHITECT,
	NOTES,
	ORBITDANGER,
	QUIZBLISS,
	BRICKBREAKER,
} = ProjectComponents;

const CardContainerDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 10px 0 40px 0;
	margin-bottom: 80px;
`;

const CardContainerOlderProjectsDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 10px 0 40px 0;
	margin-bottom: 10px;
`;

const Projects = () => {
	function showMoreProjectsPart2() {
		let projectsDiv = document.getElementById("olderProjectsPart2");
		let showMoreProjectsLink = document.getElementById("showMoreProjectsLink1");
		if (projectsDiv.style.display === "none") {
			showMoreProjectsLink.style.display = "none";
			projectsDiv.style.display = "block";
		} else {
			projectsDiv.style.display = "none";
			showMoreProjectsLink.style.display = "block";
		}
	}

	return (
		<div>
			{/* RECENT PROJECTS SECTION */}
			<Container>
				<h2 style={{ textAlign: "left", margin: "120px 70px 30px 70px", fontFamily: "Nunito" }}>
					Recent Projects
				</h2>
				<CardContainerDiv>
					<ARQ />
					<PPSR />
					<LUNCHER />
				</CardContainerDiv>
			</Container>

			{/* OLDER PROJECTS SECTION */}
			<Container>
				<h2 style={{ textAlign: "left", margin: "80px 70px 30px 70px", fontFamily: "Nunito" }}>
					Older Projects
				</h2>
				<CardContainerOlderProjectsDiv>
					<TETRIS />
					<PORTFOLIO />
					<BACKYARDSPORTLEAGUE />
					<ARCHITECT />
				</CardContainerOlderProjectsDiv>
				<div
					id="showMoreProjectsLink1"
					onClick={() => showMoreProjectsPart2()}
					style={{ color: "#007bff", cursor: "pointer", display: "block", marginBottom: "64px" }}
				>
					Show more
				</div>

				<div id="olderProjectsPart2" style={{ display: "none" }}>
					<CardContainerOlderProjectsDiv>
						<NOTES />
						<ORBITDANGER />
						<QUIZBLISS />
						<BRICKBREAKER />
					</CardContainerOlderProjectsDiv>
				</div>
			</Container>
		</div>
	);
};

export default Projects;
