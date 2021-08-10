/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
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
  margin-bottom: 80px;
`;

const FeaturedProjects = () => {
  const [lgProject, setLgProject] = useState(false);
  const [projectsData, setProjectsData] = useState(null);

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

  const displayFeaturedProjects = () => {
    return projectsData.map(project => {
      return (
        <Flip key={project.id}>
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
                    style={{ maxWidth: "100%", maxHeight: "25rem" }}
                    alt={project.title + "Gif"}
                  />
                </div>
                <div className='card-body'>
                  <div style={{ marginBottom: "20px" }}>
                    <h5 className='card-title'>{project.title}</h5>
                    <p className='card-text' style={{ height: "120px" }}>
                      {project.description}
                    </p>
                    <ModalLink onClick={event => setLgProject(true)}>
                      Learn more
                    </ModalLink>
                    {displayModal(project.id)}
                  </div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <h4 style={{ fontSize: "1.2rem" }}>Stack</h4>
                      <p>{project.stack}</p>
                    </li>
                  </ul>
                  <div className='card-body'>
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
                    <a
                      href={project.frontendLink}
                      className='card-link'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        display:
                          project.frontendLink !== null ? "block" : "none",
                      }}
                    >
                      Github FE
                    </a>
                    <a
                      href={project.backendLink}
                      className='card-link'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        display:
                          project.backendLink !== null ? "block" : "none",
                      }}
                    >
                      Github BE
                    </a>
                  </div>
                </div>
              </div>
            </EachCardWrapperDiv>
          </EachCardDiv>
        </Flip>
      );
    });
  };

  const displayModal = projectId => {
    return (
      <Modal
        size='lg'
        show={lgProject}
        onHide={event => setLgProject(false)}
        aria-labelledby='example-modal-sizes-title-lg'
        scrollable='true'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            Project title goes here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-ride='carousel'
          >
            <div
              className='carousel-inner'
              style={{
                backgroundColor: "#222",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
                // minHeight: "400px",
                // maxHeight: "400px",
              }}
            >
              {displayCarouselImages()}
              <a
                className='carousel-control-prev'
                href='#carouselExampleControls'
                role='button'
                data-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExampleControls'
                role='button'
                data-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
            <div style={{ margin: "30px 20px" }}>{displayExtendedInfo()}</div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  const displayCarouselImages = () => {
    return (
      <div>
        <div
          className='carousel-item active'
          style={{ marginRight: "0px", width: "auto" }}
        >
          {/* <CarouselImage src= /> */}
        </div>
      </div>
    );
  };

  const displayExtendedInfo = () => {
    return (
      <div>
        <div>
          <a>Additional Link Title</a>
        </div>
        <p>Extended Project info goes here</p>
      </div>
    );
  };

  if (projectsData === null) {
    return <>Loading ...</>;
  }

  return (
    <div>
      {/* {console.log("projects", projectsData)} */}
      {/* <div>Feature Project Component</div> */}
      <CardContainerDiv>{displayFeaturedProjects()}</CardContainerDiv>
    </div>
  );
};

export default FeaturedProjects;