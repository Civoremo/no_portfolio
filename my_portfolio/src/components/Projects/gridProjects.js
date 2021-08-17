/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  width: 160px;
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   border: 1px solid green;
`;

const ProjectCard = styled.div`
  //   border: 2px solid red;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
`;

const ProjectImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  //   border: 1px solid red;
`;

const ProjectOverlay = styled.div`
  width: 150px;
  maxheight: 70px;
  position: absolute;
  opacity: 0;
  bottom: 0;
  background: #222;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  transition: 0.5s ease;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const GridProjects = () => {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/projects/all`,
      responseType: "json",
    }).then(result => {
      if (result.status === 200) {
        let tempProjects = [];
        let tempIndexes = {};
        let assignedIndex = 0;

        for (let project of result.data) {
          if (project.featured === false) {
            if (tempProjects.length % 4 === 0 && tempProjects.length !== 0) {
              assignedIndex += 1;
            }
            tempProjects.push(project);

            tempIndexes = { ...tempIndexes, [project.id]: assignedIndex };
          }
        }
        setProjectsData(tempProjects);
      }
    });
  }, []);

  const displayProjectsContainers = () => {
    return projectsData.map(project => {
      return (
        <ProjectContainer key={project.id}>
          <ProjectCard>
            <ProjectImage
              src={project.gifImage}
              alt={project.id + " " + project.title}
            />
            <ProjectOverlay>
              <h4 style={{ fontSize: "12px" }}>{project.title}</h4>
              <p style={{ fontSize: "10px" }}>{project.description}</p>
            </ProjectOverlay>
          </ProjectCard>
        </ProjectContainer>
      );
    });
  };

  if (projectsData === null) {
    return <>Loading ...</>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        maxWidth: "1000px",
        // border: "3px solid black",
      }}
    >
      {console.log("PROJECTS\n", projectsData)}
      {displayProjectsContainers()}
    </div>
  );
};

export default GridProjects;
