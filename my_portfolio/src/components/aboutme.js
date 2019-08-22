import React, { useEffect, useRef } from 'react';
import { TweenMax, Linear, TimelineLite, Back } from 'gsap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const AboutMeDiv = styled.div `
    background: #222;
    color: #fff;
    margin: 80px 0 30px 0;
`

const AboutMe = () => {


    return (
        <AboutMeDiv className='aboutMeSection'>
            <Container style={{borderTop: '1px solid #222', borderBottom: '1px solid #222'}}>
                <h2 style={{textAlign: 'left', margin: '30px 70px', fontFamily: 'Nunito'}}>
                    <span>
                        About
                    </span>
                </h2>
                <div style={{margin: '0 100px 30px 100px', textAlign: 'left'}}>
                    <p>
                        Creative problem solver, passionate learner and life-long tech enthusiast. 
                    </p>
                    <p>
                        Hi, my name is Nedim (Ned-eem) Omerovic; a Lambda School Full-Stack graduate currently living in Orlando, Florida. My passion lies in the creative and development process of software development, at a younger age I tried my hand at game development before discovering the wonders of web development.
                    </p>
                    <p>
                        I love spending my days working on both front-end and back-end projects and collborating with others on creative projects.
                    </p>
                    <p>
                        I also love to travel and learn about different cultures and their people; have had the fortune to live in a few different countries in Europe and learn a couple of languages along the way.
                    </p>
                </div>
            </Container>
        </AboutMeDiv>

    )

}

export default AboutMe;