/** @format */

import React from "react";
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
  return (
    <AboutMeDiv className='about'>
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
          <span style={{ color: "#DC3545" }}>About</span>
        </h2>
        <AboutContentDiv>
          <Fade left>
            <p>
              Creative problem solver, passionate learner and lifelong tech
              enthusiast.
            </p>
          </Fade>
          <Fade right>
            <p>
              Hi, my name is Nedim (Ned-eem) Omerovic, a Lambda School
              Full-Stack graduate currently living in Orlando, Florida. My
              passions lie in the creative and development process of software
              development.
            </p>
          </Fade>
          <Fade left>
            <p>
              I enjoy working on both the front-end and back-end and
              collborating with others on creative projects.
            </p>
          </Fade>
          {/* <Fade right>
                        <p>
												I also love to travel and experience the various cultures around the world; I've had the fortune to live in a few different countries in Europe and learn a couple of languages along the way.
                        </p>
											</Fade> */}
        </AboutContentDiv>
        <h2
          style={{
            textAlign: "left",
            margin: "120px 70px 30px 70px",
            fontFamily: "Nunito",
          }}
        >
          <span style={{ color: "#DC3545" }}>Stack</span>
        </h2>
        <AboutContentDiv>
          <Fade bottom>
            <p style={{ lineHeight: "50px" }}>
              HTML{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              CSS{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              JavaScript{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              React{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              Hooks{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              Redux{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              Python{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              C{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              C#{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              Styled Components{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              Responsive Design{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              UI/UX{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              Animation{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              Node{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              GraphQL{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              Apollo{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              Prisma{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              RDBMS{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              SQL{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              PostgreSQL{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              JWT{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              RESTful API{" "}
              <strong style={{ fontSize: "20px", color: "#DC3545" }}>|</strong>{" "}
              Git{" "}
            </p>
          </Fade>
        </AboutContentDiv>
      </Container>
    </AboutMeDiv>
  );
};

export default AboutMe;
