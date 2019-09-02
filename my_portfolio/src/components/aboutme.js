import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'

const AboutMeDiv = styled.div `
    background: #222;
    color: #fff;
    margin: 200px 0 30px 0;
`

const AboutMe = () => {


    return (
        <AboutMeDiv className='aboutMeSection' className='about'>
            <Container style={{borderTop: '1px solid #222', borderBottom: '1px solid #222'}}>
                <h2 style={{textAlign: 'left', margin: '120px 70px 30px 70px', fontFamily: 'Nunito'}}>
                    <span>
                        About
                    </span>
                </h2>
                <div style={{margin: '0 100px 120px 100px', textAlign: 'left'}}>
                    <Fade left>
                        <p>
                            Creative problem solver, passionate learner and life-long tech enthusiast. 
                        </p>
                    </Fade>
                    <Fade right>
                        <p>
                            Hi, my name is Nedim (Ned-eem) Omerovic; a Lambda School Full-Stack graduate currently living in Orlando, Florida. My passion lies in the creative and development process of software development, at a younger age I tried my hand at game development before discovering the wonders of web development.
                        </p>
                    </Fade>
                    <Fade left>
                        <p>
                            I love spending my days working on both the front-end and back-end and collborating with others on creative projects.
                        </p>
                    </Fade>
                    <Fade right>
                        <p>
                            I also love to travel and experience the various cultures around the world; I've had the fortune to live in a few different countries in Europe and learn a couple of languages along the way.
                        </p>
                    </Fade>
                </div>
            </Container>
        </AboutMeDiv>

    )

}

export default AboutMe;