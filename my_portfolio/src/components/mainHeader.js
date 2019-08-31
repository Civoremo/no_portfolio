import React, { useEffect, useRef } from 'react';
import { Linear, TimelineLite, Back } from 'gsap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import {Python, Node} from 'styled-icons/fa-brands';
import {Redux, ReactLogo, Javascript, Html5, Css3, Github } from 'styled-icons/boxicons-logos';
import mongodb from './my_images/mongodb.png'
import postgresql from './my_images/postgresql.png'

const MainLogoText = styled.div `
    background-color: #fff;
    margin: 10px 0 10px 60px;
    font-size: 3rem;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;
    letter-spacing: 20px;
    position: relative;
    overflow: hidden;
`

const MainSubText = styled.div `
    background-color: #fff;
    margin: 10px 0 10px 60px;
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    letter-spacing: 5px;
    position: relative;
    overflow: hidden;
`

const MainLogo = () => {
    let developerName = useRef(null);
    let developerSubHeader = useRef(null);
    let lineSegmentSeperator = useRef(null);

    let tlStart = new TimelineLite();
    let tlCards = new TimelineLite();

    const initialHeaderAnimation = () => {
        tlStart
            .set(['.lineSeperator', '.nameText', '.subText'], {height: 0})
            .from(lineSegmentSeperator, 1, { x: -800, ease: Linear.easeNone}, 'revealLineFrom')
            .from(developerName, 1, { y:200, ease: Linear.easeNone}, 'revealNameFrom')
            .from(developerSubHeader, 1, { y: -100, ease: Linear.easeNone}, 'reavelSubTextFrom')
            .to(lineSegmentSeperator, 1.2, { x: 0, ease: Linear.easeNone}, 'revealLine')
            // .delay(.45)
            .to(developerName, 1, { y: 0, ease: Linear.easeNone}, 'revealName')
            .to(developerSubHeader, 1, { y: 0, ease: Linear.easeNone}, 'revealSubText')
    }

    const cardFlipAnimation = () => {
        tlCards
        .set(['.python', '.javascript', '.html5', '.css3', '.node', '.redux', '.react', '.github', '.mongodb', '.postgresql'], {rotationY:-180, backfaceVisibility: 'hidden'})
        .to('.react', .3, {rotationY: 0, ease: Back.easeOut})
            .to('.redux', .3, {rotationY: 0, ease: Back.easeOut})
            .to('.node', .3, {rotationY: 0, ease: Back.easeOut})
            .to('.javascript', .3, {rotationY: 0, ease: Back.easeOut})
            .to('.python', .3, {rotationY: 0, ease: Back.easeOut})
            .to('.mongodb', .3, {rotationY: 0, ease: Back.easeOut})
            .to('.postgresql', .3, {rotationY: 0, ease: Back.easeOut})
            .to('.html5', .3, {rotationY: 0, ease: Back.easeOut})
            .to('.css3', .3, {rotationY: 0, ease: Back.easeOut})
            .to('.github', .3, {rotationY: 0, ease: Back.easeOut})
    }

    useEffect(() => {
        initialHeaderAnimation();
        cardFlipAnimation()
    })

    let mainWrapper = {
        height: '400px',
        display: 'flex',
        justifyContent: 'left',
    }
    
    let textWrapper = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
    }

    let lineWrapper = {
        margin: '0 30px 0 30px',
        minWidth: '400px',
        maxWidth: '600px',
        overflow: 'hidden',
        position: 'relative',
        zIndex: '10',
        height: '10px'
    }
    
    return (
        <section style={{margin: '130px 0 0 0'}}>
            <Container className='text-left'>
                <div style={mainWrapper}>
                    <div style={textWrapper}>
                        <MainLogoText>
                            <div ref={element => (developerName = element)}>
                                <span className="nameText" style={{zIndex: '8'}}>
                                    Nedim Omerovic
                                </span>
                            </div>
                        </MainLogoText>
                        <div style={lineWrapper} >
                            <div className="lineSeperator" style={{position: 'absolute', border: '5px solid red', width: '100%'}} ref={element => (lineSegmentSeperator = element)} ></div>
                        </div>
                        <MainSubText>
                            <div ref={element => (developerSubHeader = element)}>
                                <span className="subText" style={{zIndex: 5}}>
                                    Full-stack Web Developer
                                </span>
                            </div>
                        </MainSubText>
                        <div style={{ minWidth: '350px', maxWidth: '600px', margin: '0 30px 0 30px', padding: "0 20px 0  20px 0", textAlign: 'center'}}>
                            <ReactLogo className='react' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                            <Redux className='redux' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                            <Node className='node' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px', position: 'relative', top: '13px'}} />
                            <Javascript className='javascript' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                            <Python className='python' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px', position: 'relative', top: '13px'}} />
                            <img className='mongodb' src={mongodb} alt={'mongodb icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                            <img className='postgresql' src={postgresql} alt={'postgresql icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                            <Html5 className='html5' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                            <Css3 className='css3' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                            <Github className='github' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default MainLogo;
