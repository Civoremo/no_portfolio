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

import Arq1 from './my_images/projects/arq/arq1b.png';
import Arq2 from './my_images/projects/arq/arq2.png';
import Arq3 from './my_images/projects/arq/arq3.png';
import Arq4 from './my_images/projects/arq/arq4.png';
import Arq5 from './my_images/projects/arq/arq5.png';
import Arq6 from './my_images/projects/arq/arq6.png';
import Arq7 from './my_images/projects/arq/arq7.png';
import ArqHome from './my_images/projects/arq/arqHome.png';

import DroomHome from './my_images/projects/droom/droomHome.png';

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
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                            <img src={ArqHome} className='card-img-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='project 1' />
                                        </div>
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
                                                            <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px', maxHeight: '400px'}}>
                                                                <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={Arq1} className="d-block" alt="first slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={Arq2} className="d-block" alt="second slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={Arq3} className="d-block" alt="third slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={Arq4} className="d-block" alt="fourth slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={Arq5} className="d-block" alt="fifth slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={Arq6} className="d-block" alt="sixth slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={Arq7} className="d-block" alt="seventh slide" />
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
                                                        <div style={{ margin: '30px 20px', fontFamily: 'Nunito', letterSpacing: '2px'}}>
                                                            <p>
                                                                Team was tasked with adding new features to an already existing codebase.
                                                            </p>
                                                            <p>
                                                                New features included the ability to add files, to be able to organize files into folders, move files between folders, edit and delete files and folders.
                                                            </p>
                                                            <p>
                                                                I was tasked with redeploying the back-end and adding the necessary code for the creation, editing, updating and deleting of files and folders.
                                                            </p>
                                                            <p>
                                                                The first hurdle I had to overcome was the inadequate documentation for redeployment. After spending some hours familiarizing myself with the existing code and trying to follow the documentation for deployment, I kept running into the issue of the back-end working on local machines but not on the server.<br />
                                                                Combing through all of the code, the issue was discovered; an undocumented environment variable.
                                                            </p>
                                                            <p>
                                                                The real work could finally begin; learning about mongoDB, mongoose and graphQL.<br /><br />
                                                                The following 4 weeks were some of the intense and most rewarding time; while constantly under the pressure to build out the back-end so the rest of the team could work on the front-end features, I had the opportunity to learn unfamiliar frameworks.
                                                            </p>
                                                            <p>
                                                                Once the back-end was complete, I jumped to the front-end to help the team build out all the necessary components. My initial focus was on the the Drag-n-Drop functionality of files and folders. Next I chose to work on the editing of files and folders. Lastly I focused on my attention on the filter system of our newly implemented "Activity Timeline".
                                                            </p>
                                                            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', marginTop: '40px', fontFamily: 'Nunito'}}>
                                                                <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Frameworks</div>
                                                                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                    <span style={{margin: '0 5px'}}>GraphQL</span>
                                                                    <span style={{margin: '0 5px'}}>MongoDB</span>
                                                                    <span style={{margin: '0 5px'}}>Mongoose</span>
                                                                    <span style={{margin: '0 5px'}}>Material UI</span>
                                                                    <span style={{margin: '0 5px'}}>React</span>
                                                                    <span style={{margin: '0 5px'}}>Apollo</span>
                                                                    <span style={{margin: '0 5px'}}>Auth0</span>
                                                                </div>
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
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                            <img src={DroomHome} className='card-img-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='project 1' />
                                        </div>
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
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                            <img src='https://placekitten.com/g/200/300' className='card-img-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='project 1' />
                                        </div>
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