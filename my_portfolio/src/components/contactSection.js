import React, { useEffect, useRef } from 'react';
import { TweenMax, Linear, TimelineLite, Back } from 'gsap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const ContactContainerDiv = styled.div `
    background: #222;
    color: #fff;
    padding: 50px 0 50px 0;
`

const ContactForm = () => {

    return (
        <ContactContainerDiv>
            <Container>
                <h2 style={{textAlign: 'left', margin: '40px 70px 30px 70px', fontFamily: 'Nunito'}}>
                    <span>
                        Get in Contact
                    </span>
                </h2>
                contact form section
            </Container>
        </ContactContainerDiv>
    )
}

export default ContactForm;