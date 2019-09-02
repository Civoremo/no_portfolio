import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import {Redux, ReactLogo, Javascript, Html5, Css3} from 'styled-icons/boxicons-logos'
import mongodb from './my_images/mongodb.png'
import apollo from './my_images/apollo.png';
import graphql from './my_images/graphql.png';
import Flip from 'react-reveal/Flip'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ProjectsDiv = styled.div `
`

const CardContainerDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0 40px 0;
    margin-bottom: 80px;
`

const EachCardDiv = styled.div `
    margin: 20px 10px 20px 10px;
    width: 18.2rem;
    position: relative;
    min-height: 660px;
`

const EachCardWrapperDiv = styled.div `
    position: absolute;

    :hover {
        box-shadow: 5px 5px 5px #dadada;
        z-index: 10;
    }
`

const ModalLink = styled.a `
    color: #007bff;

    :hover {
        cursor: pointer;
    }
`
    
    const Projects = () => {
        const [lgProject1Show, setLgProject1Show] = useState(false);
        const [lgProject2Show, setLgProject2Show] = useState(false);
        const [lgProject3Show, setLgProject3Show] = useState(false);
        const [lgOlderProject1Show, setLgOlderProject1Show] = useState(false);
        const [lgOlderProject2Show, setLgOlderProject2Show] = useState(false);
        const [lgOlderProject3Show, setLgOlderProject3Show] = useState(false);
        const [lgOlderProject4Show, setLgOlderProject4Show] = useState(false);

    return (
        <ProjectsDiv className='projects'>
            <Container>
                <h2 style={{textAlign: 'left', margin: '120px 70px 30px 70px', fontFamily: 'Nunito'}}>
                    Recent Projects
                </h2>
                    <CardContainerDiv>
                        <Flip right>
                            <EachCardDiv>
                                <EachCardWrapperDiv>
                                    <div className='card' style={{minWidth: '18rem'}}>
                                        <img src='https://placekitten.com/g/200/300' className='card-img-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='project 1' />
                                        <div className='card-body'>
                                            <div style={{ marginBottom: '20px'}}>
                                                <h5 className='card-title'>Arq</h5>
                                                <p className='card-text'>Worked with team to add features and refactor old code.</p>
                                                <ModalLink onClick={() => setLgProject1Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                                <Modal
                                                    size="lg"
                                                    show={lgProject1Show}
                                                    onHide={() => setLgProject1Show(false)}
                                                    aria-labelledby="example-modal-sizes-title-lg"
                                                    scrollable='true'
                                                >
                                                    <Modal.Header closeButton>
                                                    <Modal.Title id="example-modal-sizes-title-lg">
                                                        Arq
                                                    </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                            <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/200/300" className="d-block" alt="first slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/300/500" className="d-block" alt="second slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/400/300" className="d-block" alt="third slide" />
                                                                </div>
                                                            </div>
                                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                        <div style={{ border: '1px solid red', margin: '30px 20px'}}>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                            <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                    <ReactLogo className='reactlogo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    {/* <Redux className='reduxlogo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} /> */}
                                                    <img className='mongodblogo' src={mongodb} alt={'mongodb icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <img className='apollo' src={apollo} alt={'apollo icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <img className='graphql' src={graphql} alt={'graphql icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <Javascript className='javascriptlogo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <Html5 className='html5logo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <Css3 className='css3logo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                </li>
                                            </ul>   
                                            <div className='card-body'>
                                                <a href='https://arq.community/' className='card-link' target="_blank" rel='noopener noreferrer'>Live Site</a>
                                                <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                            </div>
                                        </div>
                                    </div>
                                </EachCardWrapperDiv>
                            </EachCardDiv>
                        </Flip>
                        <Flip right>
                            <EachCardDiv>
                                <EachCardWrapperDiv>
                                    <div className='card' style={{minWidth: '18rem'}}>
                                        <img src='https://placekitten.com/g/200/300' className='card-img-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='project 1' />
                                        <div className='card-body'>
                                            <div style={{ marginBottom: '20px'}}>
                                                <h5 className='card-title'>Droom</h5>
                                                <p className='card-text'>Built the Front-end for a job-posting and job-searching site.</p>
                                                <ModalLink onClick={() => setLgProject2Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                                <Modal
                                                    size="lg"
                                                    show={lgProject2Show}
                                                    onHide={() => setLgProject2Show(false)}
                                                    aria-labelledby="example-modal-sizes-title-lg"
                                                >
                                                    <Modal.Header closeButton>
                                                    <Modal.Title id="example-modal-sizes-title-lg">
                                                        Droom
                                                    </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                            <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/200/300" className="d-block" alt="first slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/300/500" className="d-block" alt="second slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/400/300" className="d-block" alt="third slide" />
                                                                </div>
                                                            </div>
                                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                        <div style={{ border: '1px solid red', margin: '30px 20px'}}>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                            <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                    <ReactLogo className='reactlogo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    {/* <Redux className='reduxlogo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} /> */}
                                                    <img className='mongodblogo' src={mongodb} alt={'mongodb icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <img className='apollo' src={apollo} alt={'apollo icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <img className='graphql' src={graphql} alt={'graphql icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <Javascript className='javascriptlogo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <Html5 className='html5logo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <Css3 className='css3logo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                </li>
                                            </ul>   
                                            <div className='card-body'>
                                                <a href='https://arq.community/' className='card-link' target="_blank" rel='noopener noreferrer'>Live Site</a>
                                                <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                            </div>
                                        </div>
                                    </div>
                                </EachCardWrapperDiv>
                            </EachCardDiv>
                        </Flip>
                        <Flip right>
                            <EachCardDiv>
                                <EachCardWrapperDiv>
                                    <div className='card' style={{minWidth: '18rem'}}>
                                        <img src='https://placekitten.com/g/200/300' className='card-img-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='project 1' />
                                        <div className='card-body'>
                                            <div style={{ marginBottom: '20px'}}>
                                                <h5 className='card-title'>Luncher</h5>
                                                <p className='card-text'>Built the Front-end and Back-end for a school lunch fundraising site.</p>
                                                <ModalLink onClick={() => setLgProject3Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                                <Modal
                                                    size="lg"
                                                    show={lgProject3Show}
                                                    onHide={() => setLgProject3Show(false)}
                                                    aria-labelledby="example-modal-sizes-title-lg"
                                                >
                                                    <Modal.Header closeButton>
                                                    <Modal.Title id="example-modal-sizes-title-lg">
                                                        Luncher
                                                    </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                            <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/200/300" className="d-block" alt="first slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/300/500" className="d-block" alt="second slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/400/300" className="d-block" alt="third slide" />
                                                                </div>
                                                            </div>
                                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                        <div style={{ border: '1px solid red', margin: '30px 20px'}}>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                            <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                    <ReactLogo className='reactlogo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    {/* <Redux className='reduxlogo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} /> */}
                                                    <img className='mongodblogo' src={mongodb} alt={'mongodb icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <img className='apollo' src={apollo} alt={'apollo icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <img className='graphql' src={graphql} alt={'graphql icon'} style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <Javascript className='javascriptlogo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <Html5 className='html5logo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                    <Css3 className='css3logo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} />
                                                </li>
                                            </ul>   
                                            <div className='card-body'>
                                                <a href='https://arq.community/' className='card-link' target="_blank" rel='noopener noreferrer'>Live Site</a>
                                                <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                            </div>
                                        </div>
                                    </div>
                                </EachCardWrapperDiv>
                            </EachCardDiv>
                        </Flip>
                    </CardContainerDiv>
            </Container>
            <Container>
                <h4 style={{textAlign: 'left', margin: '80px 70px 30px 70px', fontFamily: 'Nunito'}}>
                    Older Projects
                </h4>
                <CardContainerDiv>
                    <Flip top>
                        <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                            <img src="https://placekitten.com/g/200/200" className='card-omg-top' alt='...' />
                            <div className='card-body'>
                                <div style={{marginBottom: '15px'}}>
                                    <h5 className='card-title'>Tetris Clone</h5>
                                    <p className='card-text'>Tetris clone made with the XNA framework.</p>
                                    <ModalLink onClick={() => setLgOlderProject1Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                    <Modal
                                        size="lg"
                                        show={lgOlderProject1Show}
                                        onHide={() => setLgOlderProject1Show(false)}
                                        aria-labelledby="example-modal-sizes-title-lg"
                                    >
                                        <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Tetris Clone
                                        </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                            <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/200/300" className="d-block" alt="first slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/300/500" className="d-block" alt="second slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/400/300" className="d-block" alt="third slide" />
                                                                </div>
                                                            </div>
                                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                        <div style={{ border: '1px solid red', margin: '30px 20px'}}>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                    </Modal>                                    
                                </div>
                                <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                    <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                </div>
                            </div>
                        </div>
                    </Flip>
                    <Flip bottom>
                        <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                            <img src="https://placekitten.com/g/200/200" className='card-omg-top' alt='...' />
                            <div className='card-body'>
                                <div style={{marginBottom: '15px'}}>
                                    <h5 className='card-title'>Orbit Denfender</h5>
                                    <p className='card-text'>Orbital earth defender made with Unity.</p>
                                    <ModalLink onClick={() => setLgOlderProject2Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                    <Modal
                                        size="lg"
                                        show={lgOlderProject2Show}
                                        onHide={() => setLgOlderProject2Show(false)}
                                        aria-labelledby="example-modal-sizes-title-lg"
                                    >
                                        <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Orbit Defender
                                        </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                            <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/200/300" className="d-block" alt="first slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/300/500" className="d-block" alt="second slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/400/300" className="d-block" alt="third slide" />
                                                                </div>
                                                            </div>
                                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                        <div style={{ border: '1px solid red', margin: '30px 20px'}}>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                    </Modal> 
                                </div>
                                <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                    <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                </div>
                            </div>
                        </div>
                    </Flip>
                    <Flip top>
                        <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                            <img src="https://placekitten.com/g/200/200" className='card-omg-top' alt='...' />
                            <div className='card-body'>
                                <div style={{marginBottom: '15px'}}>
                                    <h5 className='card-title'>Lottery Luck</h5>
                                    <p className='card-text'>Are you lucky enough to win the lottery?</p>
                                    <ModalLink onClick={() => setLgOlderProject3Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                    <Modal
                                        size="lg"
                                        show={lgOlderProject3Show}
                                        onHide={() => setLgOlderProject3Show(false)}
                                        aria-labelledby="example-modal-sizes-title-lg"
                                    >
                                        <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Lottery Luck
                                        </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                            <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/200/300" className="d-block" alt="first slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/300/500" className="d-block" alt="second slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/400/300" className="d-block" alt="third slide" />
                                                                </div>
                                                            </div>
                                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                        <div style={{ border: '1px solid red', margin: '30px 20px'}}>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                    </Modal> 
                                </div>
                                <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                    <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                </div>
                            </div>
                        </div>
                    </Flip>
                    <Flip bottom>
                        <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                            <img src="https://placekitten.com/g/200/200" className='card-omg-top' alt='...' />
                            <div className='card-body'>
                                <div style={{marginBottom: '15px'}}>
                                    <h5 className='card-title'>Architect Site</h5>
                                    <p className='card-text'>Responsive site for a make-shift architect firm.</p>
                                    <ModalLink onClick={() => setLgOlderProject4Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                    <Modal
                                        size="lg"
                                        show={lgOlderProject4Show}
                                        onHide={() => setLgOlderProject4Show(false)}
                                        aria-labelledby="example-modal-sizes-title-lg"
                                    >
                                        <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Architect Site
                                        </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                            <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/200/300" className="d-block" alt="first slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/300/500" className="d-block" alt="second slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src="https://placekitten.com/g/400/300" className="d-block" alt="third slide" />
                                                                </div>
                                                            </div>
                                                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                        <div style={{ border: '1px solid red', margin: '30px 20px'}}>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <p>Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            Some text here with a more detailed explanation
                                                            </p>
                                                            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                                <span>framework</span>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                    </Modal> 
                                </div>
                                <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                    <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                </div>
                            </div>
                        </div>
                    </Flip>
                </CardContainerDiv>
            </Container>
        </ProjectsDiv>
    )
}

export default Projects;