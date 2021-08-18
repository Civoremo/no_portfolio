/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { Github, Linkedin } from "styled-icons/fa-brands";

const FooterDiv = styled.div`
  /* background-color: #ff3333; */
  background-color: #dc3545;
  color: #222;
  font-family: Open Sans Condensed;
  letter-spacing: 4px;
  font-weight: bold;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const TextSpacer = styled.div`
  width: 20px;

  @media (max-width: 550px) {
    display: none;
  }
`;

const SocialLinks = styled.a`
  color: #222;

  :hover {
    color: #222;
  }
`;

const FooterBar = () => {
  let dateYear = new Date();

  return (
    <FooterDiv>
      <Container>
        <FooterContent>
          <div>© Nedim Omerovic</div>
          <TextSpacer>-</TextSpacer>
          <div>All rights reserved 2019-{dateYear.getFullYear()}</div>
          <div
            style={{
              display: "flex",
              margin: "0 20px",
              justifyContent: "space-around",
              minWidth: "80px",
            }}
          >
            <SocialLinks
              href='https://github.com/Civoremo'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github
                className='github'
                style={{ width: "20px", height: "20px" }}
              />
            </SocialLinks>
            <SocialLinks
              href='https://www.linkedin.com/in/nedim-omerovic-46088b25'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin
                className='linkedin'
                style={{ width: "20px", height: "20px", zIndex: 10 }}
              />
            </SocialLinks>
          </div>
        </FooterContent>
      </Container>
    </FooterDiv>
  );
};

export default FooterBar;
