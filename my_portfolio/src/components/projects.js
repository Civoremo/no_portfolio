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
  margin-bottom: 20px;
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
  transition: 0.3s ease;
  border: 1px solid #dc3545;

  :hover {
    cursor: pointer;
    color: #007bff;
    background: whitesmoke;
    border: 1px solid #007bff;
    border-radius: 10px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
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
          Projects
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
          Even More Projects
        </h2>
        <CardContainerOlderProjectsDiv>
          <MoreProjects
            projectGroupIndex={projectGroupIndex}
            setMaxIndex={setMaxIndex}
          />
          {/* <GridProjects /> */}
        </CardContainerOlderProjectsDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // margin: "50px 0 0 0",
          }}
        >
          <ShowMoreSpan
            style={{
              display: projectGroupIndex >= maxIndex ? "none" : "block",
              padding: "10px 20px",
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
