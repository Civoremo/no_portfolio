/** @format */

import React, { useEffect, useRef } from "react";
import { TweenMax, Linear, TimelineLite } from "gsap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import left_bracket from "./my_images/left_bracket.png";
import right_bracket from "./my_images/right_bracket.png";
import rsScroller from "react-smooth-scroller";
// import NavLink from "react-bootstrap/esm/NavLink";

const NavBG = styled.nav`
  background-color: #fff;
  margin-bottom: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #afafaf;
  /* box-shadow: inset 0 -15px 15px -15px #797979; */
  box-shadow: 0 3px 10px #a7a7a7;
`;
const NavLinkColor = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;

  :hover {
    color: #c9c9c9;
    /* color: "#FF3333" !important; */
  }
`;

const NavBar = () => {
  let logoElement = useRef(null);
  let rightBracket = useRef(null);
  let linkElementHome = useRef(null);
  let linkElementAbout = useRef(null);
  let linkElementProjects = useRef(null);
  let linkElementContact = useRef(null);
  let linkElementGithub = useRef(null);
  let linkElementLinkedin = useRef(null);

  let tlStart = new TimelineLite();
  let tlOpen = new TimelineLite();

  // const onScrollTargetHome = () => {
  // 	rsScroller.onScrollTargetHome('home', { easing: 'linear', duration: 1500, frame: 20, revise: 100 })
  // }

  function onScrollTargetHomeTop() {
    rsScroller.scrollToTarget("hometop", { easing: "linear", duration: 500 });
  }

  function onScrollTargetHome() {
    rsScroller.scrollToTarget("home", { easing: "linear", duration: 500 });
  }

  function onScrollTargetAbout() {
    rsScroller.scrollToTarget("about", { easing: "linear", duration: 500 });
  }

  function onScrollTargetProjects() {
    rsScroller.scrollToTarget("projects", { easing: "linear", duration: 500 });
  }

  function onScrollTargetContact() {
    rsScroller.scrollToTarget("contact", { easing: "linear", duration: 500 });
  }

  const logoAnimation = () => {
    tlOpen
      .to(".shortName", 0.5, { width: 0, ease: Linear.easeNone }, "closeSmall")
      .to(rightBracket, 0.5, { x: 0, ease: Linear.easeNone }, "closeSmall")
      .to(logoElement, 0.7, { repeat: 0, rotation: 0, ease: Linear.easeNone })
      .to(".longName", 0.7, { width: 170, ease: Linear.easeNone }, "openLong")
      .to(rightBracket, 0.7, { x: 170, ease: Linear.easeNone }, "openLong");
  };

  const logoAnimationInitial = () => {
    tlStart
      .set([".shortName", ".longName"], { width: 0 })
      .to(
        rightBracket,
        0.7,
        { x: 170, ease: Linear.easeNone, delay: 0.7 },
        "revealLong"
      )
      .to(
        ".longName",
        0.7,
        { width: 170, ease: Linear.easeNone, delay: 0.7 },
        "revealLong"
      )
      .to(
        rightBracket,
        0.7,
        { x: 0, ease: Linear.easeNone, delay: 1.5 },
        "closeLong"
      )
      .to(
        ".longName",
        0.7,
        { width: 0, ease: Linear.easeNone, delay: 1.5 },
        "closeLong"
      )
      .to(logoElement, 0.7, {
        repeat: 0,
        rotation: -360,
        ease: Linear.easeNone,
      })
      .to(rightBracket, 0.5, { x: 50, ease: Linear.easeNone }, "reveal")
      .to(".shortName", 0.5, { width: 50, ease: Linear.easeNone }, "reveal");
  };

  useEffect(() => {
    logoAnimationInitial();
  });

  function openLogoBig() {
    if (!tlStart.isActive()) {
      if (tlOpen.totalProgress !== 1) {
        tlOpen.play();
        logoAnimation();
      }
    } else {
      return null;
    }

    // console.log(tlStart.time());
  }

  function closeLogoSmall() {
    if (!tlStart.isActive()) {
      tlOpen.reverse();
    } else {
      return null;
    }
  }

  function scaleLinkUpHome() {
    TweenMax.to(linkElementHome, 0.1, { scale: 1.1, ease: Linear.ease });
  }

  function scaleLinkDownHome() {
    TweenMax.to(linkElementHome, 0.05, { scale: 1, ease: Linear.ease });
  }

  function scaleLinkUpAbout() {
    TweenMax.to(linkElementAbout, 0.1, { scale: 1.1, ease: Linear.ease });
  }

  function scaleLinkDownAbout() {
    TweenMax.to(linkElementAbout, 0.05, { scale: 1, ease: Linear.ease });
  }

  function scaleLinkUpProjects() {
    TweenMax.to(linkElementProjects, 0.1, { scale: 1.1, ease: Linear.ease });
  }

  function scaleLinkDownProjects() {
    TweenMax.to(linkElementProjects, 0.05, { scale: 1, ease: Linear.ease });
  }

  function scaleLinkUpContact() {
    TweenMax.to(linkElementContact, 0.1, { scale: 1.1, ease: Linear.ease });
  }

  function scaleLinkDownContact() {
    TweenMax.to(linkElementContact, 0.05, { scale: 1, ease: Linear.ease });
  }

  function scaleLinkUpGithub() {
    TweenMax.to(linkElementGithub, 0.1, { scale: 1.1, ease: Linear.ease });
  }

  function scaleLinkDownGithub() {
    TweenMax.to(linkElementGithub, 0.05, { scale: 1, ease: Linear.ease });
  }

  function scaleLinkUpLinkedin() {
    TweenMax.to(linkElementLinkedin, 0.1, { scale: 1.1, ease: Linear.ease });
  }

  function scaleLinkDownLinkedin() {
    TweenMax.to(linkElementLinkedin, 0.05, { scale: 1, ease: Linear.ease });
  }

  let logoWrapper = {
    position: "absolute",
    width: "200px",
    height: "40px",
    zIndex: "100",
  };

  let logoStyle = {
    display: "flex",
    position: "relative",
    // border: '1px solid red'
  };

  let shortLogoName = {
    color: "rgba(0,0,0,.5)",
    fontWeight: "bold",
    position: "absolute",
    overflow: "hidden",
  };

  let longLogoName = {
    color: "rgba(0,0,0,.5)",
    fontWeight: "bold",
    position: "absolute",
    overflow: "hidden",
  };

  return (
    <NavBG>
      <Navbar sticky='top' expand='sm'>
        <Container>
          <Navbar.Brand
            href='#hometop'
            className='hometop'
            onClick={() => onScrollTargetHomeTop()}
          >
            <div
              style={logoWrapper}
              onMouseEnter={openLogoBig}
              onMouseLeave={closeLogoSmall}
            ></div>
            <div
              ref={element => {
                logoElement = element;
              }}
              style={logoStyle}
            >
              <div>
                <img
                  src={left_bracket}
                  alt={"left bracket"}
                  style={{ width: 8, marginRight: 5, position: "relative" }}
                />
              </div>
              <div>
                <span className='shortName' style={shortLogoName}>
                  <span style={{ color: "#DC3545" }}>O</span>.
                  <span style={{ color: "#DC3545" }}>N</span>.
                </span>
                <span className='longName' style={longLogoName}>
                  <span style={{ color: "#DC3545" }}>O</span>merovic,{" "}
                  <span style={{ color: "#DC3545" }}>N</span>edim
                </span>
              </div>
              <div ref={element => (rightBracket = element)}>
                <img
                  src={right_bracket}
                  alt={"right bracket"}
                  style={{ width: 8, marginleft: 5 }}
                />
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto' />
            <Nav>
              <Nav.Link href='#home' onClick={() => onScrollTargetHome()}>
                <div
                  ref={element => {
                    linkElementHome = element;
                  }}
                  onMouseEnter={scaleLinkUpHome}
                  onMouseLeave={scaleLinkDownHome}
                >
                  <NavLinkColor>Home</NavLinkColor>
                </div>
              </Nav.Link>
              <Nav.Link href='#about' onClick={() => onScrollTargetAbout()}>
                <div
                  ref={element => {
                    linkElementAbout = element;
                  }}
                  onMouseEnter={scaleLinkUpAbout}
                  onMouseLeave={scaleLinkDownAbout}
                >
                  <NavLinkColor>About</NavLinkColor>
                </div>
              </Nav.Link>
              <Nav.Link
                href='#projects'
                onClick={() => onScrollTargetProjects()}
              >
                <div
                  ref={element => {
                    linkElementProjects = element;
                  }}
                  onMouseEnter={scaleLinkUpProjects}
                  onMouseLeave={scaleLinkDownProjects}
                >
                  <NavLinkColor>Projects</NavLinkColor>
                </div>
              </Nav.Link>
              <Nav.Link href='#contact' onClick={() => onScrollTargetContact()}>
                <div
                  ref={element => {
                    linkElementContact = element;
                  }}
                  onMouseEnter={scaleLinkUpContact}
                  onMouseLeave={scaleLinkDownContact}
                >
                  <NavLinkColor>Contact</NavLinkColor>
                </div>
              </Nav.Link>
              <Nav.Link
                href='https://github.com/Civoremo'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div
                  ref={element => {
                    linkElementGithub = element;
                  }}
                  onMouseEnter={scaleLinkUpGithub}
                  onMouseLeave={scaleLinkDownGithub}
                >
                  <NavLinkColor>Github</NavLinkColor>
                </div>
              </Nav.Link>
              <Nav.Link
                href='https://www.linkedin.com/in/nedim-omerovic-46088b25'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div
                  ref={element => {
                    linkElementLinkedin = element;
                  }}
                  onMouseEnter={scaleLinkUpLinkedin}
                  onMouseLeave={scaleLinkDownLinkedin}
                >
                  <NavLinkColor>LinkedIn</NavLinkColor>
                </div>
              </Nav.Link>
              {/* <Nav.Link>Twitter</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavBG>
  );
};

export default NavBar;
