/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import {
  EachCardDiv,
  EachCardWrapperDiv,
  ModalLink,
  CarouselImage,
} from "./styledCompProjects";

const MoreProjects = () => {
  const [lgProjects, setLgProjects] = useState(false);
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/projects/all`,
      responseType: "json",
    }).then(result => {
      if (result.status === 200) {
        let tempProjects = [];

        for (let project of result.data) {
          if (project.featured === false) {
            tempProjects.push(project);
          }
        }

        setProjectsData(tempProjects);
      }
    });
  }, []);

  const displayProjectData = project => {
    console.log(project);
    return (
      <EachCardWrapperDiv style={{ margin: "10px 10px 85px 10px" }}>
        <div className='card' style={{ width: "14rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "250px",
            }}
          >
            <img
              src={project.gifImage}
              style={{ maxWidth: "100%", maxHeight: "10rem" }}
              className='card-omg-top'
              alt={project.title + " " + project.id + " gif"}
            />
          </div>
          <div className='card-body'>
            <div style={{ marginBottom: "15px", minHeight: "10rem" }}>
              <h5 className='card-title'>{project.title}</h5>
              <p className='card-text' style={{ minHeight: "6rem" }}>
                {project.description}
              </p>
              <ModalLink>Learn more</ModalLink>
            </div>
            <div
              className='card-body'
              style={{
                borderTop: "1px solid rgba(0,0,0,.125)",
                minHeight: "7rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: project.liveLink !== null ? "block" : "none",
                }}
              >
                <a
                  href={project.liveLink}
                  className='card-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Live Site
                </a>
              </div>
              <div
                style={{
                  display: project.frontendLink !== null ? "block" : "none",
                }}
              >
                <a
                  href={project.frontendLink}
                  className='card-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github FE
                </a>
              </div>
              <div
                style={{
                  display: project.backendLink !== null ? "block" : "none",
                }}
              >
                <a
                  href={project.backendLink}
                  className='card-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github BE
                </a>
              </div>
            </div>
          </div>
        </div>
      </EachCardWrapperDiv>
    );
  };

  const displayProjectCards = () => {
    return projectsData.map((project, index) => {
      if (index % 2 === 0) {
        return (
          <Flip key={project.id} top delay={index * 100}>
            {displayProjectData(project)}
          </Flip>
        );
      } else {
        return (
          <Flip key={project.id} bottom delay={index * 100}>
            {displayProjectData(project)}
          </Flip>
        );
      }
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
      }}
    >
      {displayProjectCards()}
    </div>
  );
};

export default MoreProjects;
