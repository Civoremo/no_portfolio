/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import {
  // EachCardDiv,
  EachCardWrapperDiv,
  ModalLink,
  // CarouselImage,
} from "./styledCompProjects";

const MoreProjects = ({ projectGroupIndex, setMaxIndex }) => {
  const [lgProject, setLgProject] = useState(false);
  const [projectsData, setProjectsData] = useState(null);
  const [projectIndexes, setProjectIndexes] = useState({});
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [extendedProjectInfo, setExtendedProjectInfo] = useState(null);

  // load projects
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

        setMaxIndex(assignedIndex);
        setProjectsData(tempProjects);
        setProjectIndexes(tempIndexes);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // render quantity of project cards based on index
  useEffect(() => {
    if (projectsData !== null) {
      displayProjectCards();
    }
  }, [projectGroupIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // extended project info
  useEffect(() => {
    if (selectedProjectId !== null) {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/projects/info/${selectedProjectId}`,
        responseType: "json",
      })
        .then(result => {
          // console.log("extended info", result);
          if (result.status === 200) {
            setExtendedProjectInfo(result.data);
          } else {
            console.log("Something went wrong fetching extended project info.");
          }
        })
        .catch(err => {
          console.log("failed to fetch extended info");
        });
    }
  }, [selectedProjectId]);

  const displayProjectData = project => {
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
              <ModalLink
                onClick={event => {
                  setLgProject(true);
                  setSelectedProjectId(project.id);
                }}
              >
                Learn more
              </ModalLink>
              {displayModal()}
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
    if (projectsData !== null) {
      return projectsData.map((project, index) => {
        if (index % 2 === 0) {
          return (
            <Flip key={project.id} top>
              <div
                style={{
                  display:
                    projectIndexes[project.id] <= projectGroupIndex
                      ? "block"
                      : "none",
                }}
              >
                {displayProjectData(project)}
              </div>
            </Flip>
          );
        } else {
          return (
            <Flip key={project.id} bottom>
              <div
                style={{
                  display:
                    projectIndexes[project.id] <= projectGroupIndex
                      ? "block"
                      : "none",
                }}
              >
                {displayProjectData(project)}
              </div>
            </Flip>
          );
        }
      });
    }
  };

  const displayModal = () => {
    if (selectedProjectId === null && extendedProjectInfo === null) {
      return (
        <Modal
          size='lg'
          show={lgProject}
          onHide={event => {
            setLgProject(false);
            setSelectedProjectId(null);
            setExtendedProjectInfo(null);
          }}
          aria-labelledby='example-modal-sizes-title-lg'
          scrollable='true'
        >
          <Modal.Body>Loading ...</Modal.Body>
        </Modal>
      );
    } else {
      let projectInfo = projectsData.filter(
        project => project.id === selectedProjectId
      );

      return (
        <Modal
          size='lg'
          show={lgProject}
          onHide={event => {
            setLgProject(false);
            setSelectedProjectId(null);
            setExtendedProjectInfo(null);
          }}
          aria-labelledby='example-modal-sizes-title-lg'
          scrollable='true'
        >
          <Modal.Header closeButton>
            <Modal.Title id='example-modal-sizes-title-lg'>
              {projectInfo[0].title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>{displayCarousel()}</div>
              <div style={{ margin: "30px 20px" }}>{displayExtendedInfo()}</div>
            </div>
          </Modal.Body>
        </Modal>
      );
    }
  };

  const displayCarousel = () => {
    if (extendedProjectInfo === null) {
      return <>Loading ...</>;
    } else {
      return (
        <Carousel
          pause={true}
          interval={2000}
          slide={false}
          style={{
            backgroundColor: "#222",
            height: "400px",
          }}
        >
          {extendedProjectInfo[1].map((image, index) => {
            return (
              <Carousel.Item
                key={image.id}
                style={{
                  maxHeight: "400px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    width='auto'
                    height={400}
                    src={extendedProjectInfo[1][index].image}
                    // className='d-block w-100'
                    alt={extendedProjectInfo[1][index].id + " carousel image"}
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      );
    }
  };

  const displayExtendedInfo = () => {
    if (extendedProjectInfo === null) {
      return <>Loading ...</>;
    } else {
      let mainProjectInfo = projectsData.filter(
        project => project.id === selectedProjectId
      );
      return (
        <div>
          <div
            style={{
              display: extendedProjectInfo[0].link !== null ? "block" : "none",
            }}
          >
            <a href={extendedProjectInfo[0].link}>Click for Additional Info</a>
          </div>
          <br />
          <div>
            <h5>Stack</h5>
            <div>{mainProjectInfo[0].stack}</div>
          </div>
          <hr />
          <div>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {extendedProjectInfo[0].description}
            </p>
          </div>
        </div>
      );
    }
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
      {/* {displayProjectsContainers()} */}
    </div>
  );
};

export default MoreProjects;
