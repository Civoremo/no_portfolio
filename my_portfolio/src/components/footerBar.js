import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const FooterDiv = styled.div `
    background-color: red;
    color: #222
    font-family: Open Sans Condensed;
    letter-spacing: 4px;
    font-weight: bold;
    padding: 20px 0;
`

const FooterBar = () => {

    let dateYear = new Date();

    return (
        <FooterDiv>
            <Container>
                <span>© Nedim Omerovic - All rights reserved {dateYear.getFullYear()}</span>
            </Container>
        </FooterDiv>
    );
};

export default FooterBar;