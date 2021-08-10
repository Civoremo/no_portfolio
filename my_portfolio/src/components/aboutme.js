/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const AboutMeDiv = styled.div`
  /* background: #222; */
  background-color: #222;
  color: #fff;
  margin: 200px 0 30px 0;
`;

const AboutContentDiv = styled.div`
  margin: 0 100px 120px 100px;
  text-align: left;

  @media (max-width: 414px) {
    width: 85vw;
    margin: 0 100px 120px 20px;
  }
`;

const AboutMe = () => {
  // const [aboutData, setAboutData] = useState(null);
  const [aboutMeData, setAboutMeData] = useState({});

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/about/all`,
      responseType: "json",
    })
      .then(result => {
        if (result.status === 200) {
          // console.log("about result", result.data);
          // setAboutData(result.data);
          for (let info of result.data) {
            // console.log(info);
            if (info[0].title === "ABOUT") {
              setAboutMeData(aboutMeData => ({
                ...aboutMeData,
                about: info,
              }));
            }
            if (info[0].title === "STACK") {
              setAboutMeData(aboutMeData => ({
                ...aboutMeData,
                stack: info,
              }));
            }
            if (info[0].title !== "ABOUT" && info[0].title !== "STACK") {
              setAboutMeData(aboutMeData => ({
                ...aboutMeData,
                [info[0].title]: info,
              }));
            }
          }
        }
      })
      .catch(err => {
        console.log("failed to fetch  about data");
      });
  }, []);

  const displayAboutContent = () => {
    return aboutMeData.about[1].map((content, index) => {
      if (index % 2 === 0) {
        return (
          <Fade delay={300} left key={content.id}>
            <p style={{ lineHeight: "40px" }}>{content.textContent}</p>
          </Fade>
        );
      } else {
        return (
          <Fade delay={600} right key={content.id}>
            <p style={{ lineHeight: "40px" }}>{content.textContent}</p>
          </Fade>
        );
      }
    });
  };

  const displayStackContent = () => {
    return (
      <p style={{ lineHeight: "50px" }}>
        {aboutMeData.stack[1].map((content, index) => {
          if (index !== aboutMeData.stack[1].length - 1) {
            return (
              <span key={content.id}>
                {content.textContent + " "}
                <strong style={{ fontSize: "20px", color: "#DC3545" }}>
                  |
                </strong>{" "}
              </span>
            );
          } else {
            return <span key={content.id}>{content.textContent}</span>;
          }
        })}
      </p>
    );
  };

  if (
    !aboutMeData.hasOwnProperty("about") ||
    !aboutMeData.hasOwnProperty("stack")
  ) {
    return <>Loading ...</>;
  }

  return (
    <AboutMeDiv className='about'>
      {/* {console.log("about data", aboutMeData)} */}
      <Container
        style={{ borderTop: "1px solid #222", borderBottom: "1px solid #222" }}
      >
        <h2
          style={{
            textAlign: "left",
            margin: "120px 70px 30px 70px",
            fontFamily: "Nunito",
          }}
        >
          <span style={{ color: "#DC3545" }}>{aboutMeData.about[0].title}</span>
        </h2>
        <AboutContentDiv>{displayAboutContent()}</AboutContentDiv>
        <h2
          style={{
            textAlign: "left",
            margin: "120px 70px 30px 70px",
            fontFamily: "Nunito",
          }}
        >
          <span style={{ color: "#DC3545" }}>{aboutMeData.stack[0].title}</span>
        </h2>
        <AboutContentDiv>
          <Fade delay={500} bottom>
            {displayStackContent()}
          </Fade>
        </AboutContentDiv>
      </Container>
    </AboutMeDiv>
  );
};

export default AboutMe;
