import React, { useEffect, useRef } from 'react';
import { TweenMax, Linear, TimelineLIte, Back } from 'gsap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const ProjectsDiv = styled.div `
    margin: 50px 0 50px 0;
`

const Projects = () => {

    return (
        <ProjectsDiv>
            <Container>
                <h2 style={{textAlign: 'left', margin: '120px 70px 30px 70px', fontFamily: 'Nunito'}}>
                    Recent Projects
                </h2>
            </Container>
        </ProjectsDiv>
    )
}

export default Projects;