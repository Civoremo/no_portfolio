/** @format */

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

import FeaturedProjects from "./Projects/featuredProjects";
import MoreProjects from "./Projects/moreProjects";

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
  const [projectGroupIndex, setProjectGroupIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(null);

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
          <MoreProjects
            projectGroupIndex={projectGroupIndex}
            setMaxIndex={setMaxIndex}
          />
        </CardContainerOlderProjectsDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "100px 0 0 0",
          }}
        >
          <ShowMoreSpan
            style={{
              display: projectGroupIndex >= maxIndex ? "none" : "block",
            }}
            id='showMoreProjectsLink1'
            onClick={event => setProjectGroupIndex(projectGroupIndex + 1)}
          >
            Show More Projects
          </ShowMoreSpan>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
