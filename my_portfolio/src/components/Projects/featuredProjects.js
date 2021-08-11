/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import {
  EachCardDiv,
  EachCardWrapperDiv,
  ModalLink,
  CarouselImage,
} from "./styledCompProjects";

const CardContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0 40px 0;
  // margin-bottom: 80px;
`;

const FeaturedProjects = () => {
  const [lgProject, setLgProject] = useState(false);
  const [projectsData, setProjectsData] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [extendedProjectInfo, setExtendedProjectInfo] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/projects/all`,
      responseType: "json",
    })
      .then(result => {
        if (result.status === 200) {
          let tempProjects = [];

          for (let project of result.data) {
            if (project.featured === true) {
              tempProjects.push(project);
            }
          }

          setProjectsData(tempProjects);
        }
      })
      .catch(err => {
        console.log("failed to fetch projects data");
      });
  }, []);

  useEffect(() => {
    if (selectedProjectId !== null) {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/projects/info/${selectedProjectId}`,
        responseType: "json",
      })
        .then(result => {
          console.log("extended info", result);
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

  const displayCard = project => {
    return (
      <EachCardDiv>
        <EachCardWrapperDiv>
          <div className='card' style={{ minWidth: "18rem" }}>
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
                className='card-img-top'
                style={{ maxWidth: "100%", maxHeight: "13rem" }}
                alt={project.title + "Gif"}
              />
            </div>
            <div className='card-body'>
              <div style={{ marginBottom: "20px" }}>
                <h5 className='card-title'>{project.title}</h5>
                <p className='card-text' style={{ minHeight: "10rem" }}>
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
              <ul className='list-group list-group-flush'>
                <li className='list-group-item' style={{ minHeight: "12rem" }}>
                  <h4 style={{ fontSize: "1.2rem" }}>Stack</h4>
                  <p>{project.stack}</p>
                </li>
              </ul>
              <div
                className='card-body'
                style={{
                  minHeight: "7rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <a
                    href={project.liveLink}
                    className='card-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      display: project.liveLink !== null ? "block" : "none",
                    }}
                  >
                    Live
                  </a>
                </div>
                <div>
                  <a
                    href={project.frontendLink}
                    className='card-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      display: project.frontendLink !== null ? "block" : "none",
                    }}
                  >
                    Github FE
                  </a>
                </div>
                <div>
                  <a
                    href={project.backendLink}
                    className='card-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      display: project.backendLink !== null ? "block" : "none",
                    }}
                  >
                    Github BE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </EachCardWrapperDiv>
      </EachCardDiv>
    );
  };

  const displayFeaturedProjects = () => {
    return projectsData.map((project, index) => {
      // return <Flip left key={project.id}></Flip>;
      if (index % 2 === 0) {
        return (
          <Flip left key={project.id}>
            {displayCard(project)}
          </Flip>
        );
      } else {
        return (
          <Flip right key={project.id}>
            {displayCard(project)}
          </Flip>
        );
      }
    });
  };

  const displayModal = () => {
    // console.log("id", selectedProjectId, " info", extendedProjectInfo);

    if (selectedProjectId === null && extendedProjectInfo === null) {
      return (
        <Modal
          size='lg'
          show={lgProject}
          onHide={event => setLgProject(false)}
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
          {/* {console.log(project)} */}
          <Modal.Header closeButton>
            <Modal.Title id='example-modal-sizes-title-lg'>
              {projectInfo[0].title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>{displayCarouselImages()}</div>
              <div style={{ margin: "30px 20px" }}>{displayExtendedInfo()}</div>
            </div>
          </Modal.Body>
        </Modal>
      );
    }
  };

  const displayCarouselImages = () => {
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
          <p style={{ whiteSpace: "pre-wrap" }}>
            {extendedProjectInfo[0].description}
          </p>
        </div>
      );
    }
  };

  if (projectsData === null) {
    return <>Loading ...</>;
  }

  return <CardContainerDiv>{displayFeaturedProjects()}</CardContainerDiv>;
};

export default FeaturedProjects;
