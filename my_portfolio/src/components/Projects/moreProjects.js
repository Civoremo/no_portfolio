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

  if (projectsData === null) {
    return <>Loading ...</>;
  }

  return (
    <div>
      {console.log("more projects", projectsData)}
      <div>More Projects Component</div>
    </div>
  );
};

export default MoreProjects;
