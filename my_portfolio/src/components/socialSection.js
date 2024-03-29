/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SocialLinksContainer = styled.div`
  padding-left: 64px;
  min-width: 300px;
  text-align: left;
  padding-top: 25px;
`;

const TitleDiv = styled.div`
  font-family: Nunito;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 4px;
`;

const SocialSection = () => {
  const [socialData, setSocialData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/contact/info`,
      responseType: "json",
    })
      .then(result => {
        if (result.status === 200) {
          setSocialData(result.data);
        } else {
          console.log("Something went wrong with fetching Contact data!");
        }
      })
      .catch(err => {
        console.log("Failed to fetch Contact data!");
      });
  }, []);

  const displaySocials = () => {
    return socialData[1].map(social => {
      return (
        <div key={social.id}>
          <TitleDiv>{social.platform_title}</TitleDiv>
          <div
            style={{
              marginBottom: "15px",
              marginLeft: "10px",
              fontFamily: "Open Sans Condensed",
              letterSpacing: "4px",
            }}
          >
            <a href={social.link} target='_blank' rel='noopener noreferrer'>
              <img
                src={social.image}
                alt={social.platform_title}
                style={{ width: "50px", height: "auto" }}
              />
            </a>
          </div>
        </div>
      );
    });
  };

  if (socialData === null) {
    return <>Loading ...</>;
  }

  return (
    <SocialLinksContainer>
      <TitleDiv>Current Location</TitleDiv>
      <div
        style={{
          marginBottom: "15px",
          marginLeft: "10px",
          fontFamily: "Open Sans Condensed",
          letterSpacing: "4px",
        }}
      >
        {socialData[0].location}
      </div>
      <TitleDiv>Email</TitleDiv>
      <div
        style={{
          marginBottom: "15px",
          marginLeft: "10px",
          fontFamily: "Open Sans Condensed",
          letterSpacing: "4px",
        }}
      >
        {socialData[0].email}
      </div>
      {displaySocials()}
    </SocialLinksContainer>
  );
};

export default SocialSection;
