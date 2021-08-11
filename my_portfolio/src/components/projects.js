/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import * as ProjectComponents from "./Projects/indexProjects";

import FeaturedProjects from "./Projects/featuredProjects";
import MoreProjects from "./Projects/moreProjects";

const {
  // ARQ,
  // PPSR,
  // LUNCHER,
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
  margin-bottom: 40px;
`;

const CardContainerOlderProjectsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0 40px 0;
  margin-bottom: 10px;
`;

const ShowMoreSpan = styled.span`
  color: #dc3545;
  display: block;
  margin-bottom: 64px;
  font-size: 1.2rem;

  :hover {
    cursor: pointer;
    color: #007bff;
  }
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
    <div className='projects'>
      {/* RECENT PROJECTS SECTION */}
      <Container>
        <h2
          style={{
            textAlign: "left",
            margin: "120px 70px 30px 70px",
            fontFamily: "Nunito",
          }}
        >
          Featured Projects
        </h2>
        <CardContainerDiv>
          <FeaturedProjects />
          {/* <ARQ /> */}
          {/* <PPSR />
          <LUNCHER /> */}
        </CardContainerDiv>
      </Container>

      {/* OLDER PROJECTS SECTION */}
      <Container>
        <h2
          style={{
            textAlign: "left",
            margin: "80px 70px 30px 70px",
            fontFamily: "Nunito",
          }}
        >
          Projects
        </h2>
        <CardContainerOlderProjectsDiv>
          <MoreProjects />
          <TETRIS />
          {/* <PORTFOLIO />
          <BACKYARDSPORTLEAGUE />
          <ARCHITECT /> */}
        </CardContainerOlderProjectsDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "100px 0 0 0",
          }}
        >
          <ShowMoreSpan
            id='showMoreProjectsLink1'
            onClick={() => showMoreProjectsPart2()}
          >
            Show More Projects
          </ShowMoreSpan>
        </div>

        <div id='olderProjectsPart2' style={{ display: "none" }}>
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
