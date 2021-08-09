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
          setProjectsData(result.data);
        }
      })
      .catch(err => {
        console.log("failed to fetch projects data");
      });
  }, []);

  if (projectsData === null) {
    return <>Loading ...</>;
  }

  return (
    <div>
      {console.log("projects", projectsData)}
      <div>Feature Project Component</div>
    </div>
  );
};

export default FeaturedProjects;
