import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { ReactLogo, Javascript, Html5, Css3} from 'styled-icons/boxicons-logos'
import mongodb from './my_images/mongodb.png'
import apollo from './my_images/apollo.png';
import graphql from './my_images/graphql.png';
import Flip from 'react-reveal/Flip'
// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import Arq1 from './my_images/projects/arq/arq1b.png';
import Arq2 from './my_images/projects/arq/arq2.png';
import Arq3 from './my_images/projects/arq/arq3.png';
import Arq4 from './my_images/projects/arq/arq4.png';
import Arq5 from './my_images/projects/arq/arq5.png';
import Arq6 from './my_images/projects/arq/arq6.png';
import Arq7 from './my_images/projects/arq/arq7.png';
import ArqGif from './my_images/projects/arq/arqgif.gif';

import PortfolioGif from './my_images/projects/portfolio/portfolio.gif';

import DroomHome from './my_images/projects/droom/droomHome.png';

import PPSRgif from './my_images/projects/ppsr/ppsrgif.gif';
import PPSRvalidate from './my_images/projects/ppsr/errors.jpg';
import PPSRreCaptcha from './my_images/projects/ppsr/recaptcha.jpg';
import PPSRsignup from './my_images/projects/ppsr/signup.jpg';

import MineterisGif from './my_images/projects/minetris/minetris.gif';
import MinetrisGO from './my_images/projects/minetris/minetris_go.jpg';
import MinetrisGP from './my_images/projects/minetris/minetris_gp.jpg';
import MinetrisMM from './my_images/projects/minetris/minetris_mm.jpg';

import Architect1 from './my_images/projects/architect/architect1.png';
import Architect2 from './my_images/projects/architect/architect2.png';
import Architect3 from './my_images/projects/architect/architect3.png';
import Architect4 from './my_images/projects/architect/architect4.png';

import Note1 from './my_images/projects/note/note1.png';
import Note2 from './my_images/projects/note/note2.png';
import Note3 from './my_images/projects/note/note3.png';
import Note4 from './my_images/projects/note/note4.png';

import Quizz1 from './my_images/projects/quizz/quizz1.png';
import Quizz2 from './my_images/projects/quizz/quizz2.png';
import Quizz3 from './my_images/projects/quizz/quizz3.png';
import Quizz4 from './my_images/projects/quizz/quizz4.png';

import Shopping1 from './my_images/projects/shopping/shopping1.png'
import Shopping2 from './my_images/projects/shopping/shopping2.png'

import ToDo1 from './my_images/projects/todo/todo1.png';
import ToDo2 from './my_images/projects/todo/todo2.png';
import ToDo3 from './my_images/projects/todo/todo3.png';

const ProjectsDiv = styled.div `
`

const CardContainerDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0 40px 0;
    margin-bottom: 80px;
`

const CardContainerOlderProjectsDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0 40px 0;
    margin-bottom: 10px;
`

const EachCardDiv = styled.div `
    margin: 20px 10px 20px 10px;
    width: 18.2rem;
    position: relative;
    min-height: 660px;
`

const EachCardWrapperDiv = styled.div `
    /* position: absolute; */
    position: relative;

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
        const [lgOlderProject5Show, setLgOlderProject5Show] = useState(false);
        const [lgOlderProject6Show, setLgOlderProject6Show] = useState(false);
        const [lgOlderProject7Show, setLgOlderProject7Show] = useState(false);
        const [lgOlderProject8Show, setLgOlderProject8Show] = useState(false);

        function showMoreProjectsPart2() {
            let projectsDiv = document.getElementById('olderProjectsPart2');
            let showMoreProjectsLink = document.getElementById('showMoreProjectsLink1')
            if (projectsDiv.style.display === 'none') {
                showMoreProjectsLink.style.display ='none'
                projectsDiv.style.display = 'block'
            } else {
                projectsDiv.style.display = 'none'
                showMoreProjectsLink.style.display = 'block'
            }

        }

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
                                            <img src={ArqGif} className='card-img-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='Arq Gif' />
                                        </div>
                                        <div className='card-body'>
                                            <div style={{ marginBottom: '20px'}}>
                                                <h5 className='card-title'>Arq</h5>
                                                <p className='card-text'>A team collaboration, organization, and communication tool which keeps track of a teams multi-platform documents, activity and conversations all in one place.</p>
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
                                                                <a href='https://www.youtube.com/watch?v=XI_-0z4J-n4' className='card-link' target="_blank" rel='noopener noreferrer'>Team Project Video</a>
                                                            </p>
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
                                                <a href='https://arq.community/' className='card-link' target="_blank" rel='noopener noreferrer'>New Site</a>
                                                <a href='https://sveza.app/' className='card-link' target="_blank" rel='noopener noreferrer'>Old Site</a>
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
                                            <img src={PPSRgif} className='card-img-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='Pool & Patio Screen Repair Gif' />
                                        </div>
                                        <div className='card-body'>
                                            <div style={{ marginBottom: '20px'}}>
                                                <h5 className='card-title'>Pool & Patio Screen Repair</h5>
                                                <p className='card-text'>Responsive local business site with CRUD operations for customer signup and access to restricted info.</p>
                                                <ModalLink onClick={() => setLgProject2Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                                <Modal
                                                    size="lg"
                                                    show={lgProject2Show}
                                                    onHide={() => setLgProject2Show(false)}
                                                    aria-labelledby="example-modal-sizes-title-lg"
                                                >
                                                    <Modal.Header closeButton>
                                                    <Modal.Title id="example-modal-sizes-title-lg">
                                                        Pool & Patio Screen Repair
                                                    </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                            <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={PPSRreCaptcha} className="d-block" alt="PPSR reCaptcha" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={PPSRvalidate} className="d-block" alt="PPSR Form Validation" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={PPSRsignup} className="d-block" alt="PPSR Sign Up Error Handling" />
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
                    </CardContainerDiv>
            </Container>
            <Container>
                <h4 style={{textAlign: 'left', margin: '80px 70px 30px 70px', fontFamily: 'Nunito'}}>
                    Older Projects
                </h4>
                <CardContainerOlderProjectsDiv>
                    <Flip top>
                        <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                <img src={MineterisGif} style={{maxWidth: '100%', maxHeight: '15rem'}} className='card-omg-top' alt='Tetris Clone Gif' />
                            </div>
                            <div className='card-body'>
                                <div style={{marginBottom: '15px'}}>
                                    <h5 className='card-title'>Tetris Clone</h5>
                                    <p className='card-text'>Tetris Clone with C# and XNA</p>
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
                                                                <img style={{width: '60%', margin: 'auto'}} src={MinetrisMM} className="d-block" alt="Minetris Main Menu" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img style={{width: '60%', margin: 'auto'}} src={MinetrisGP} className="d-block" alt="Minetris Gameplay" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img style={{width: '60%', margin: 'auto'}} src={MinetrisGO} className="d-block" alt="Minetris Game Over" />
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
                                                        <div style={{ margin: '30px 20px'}}>
                                                            <p>First attempt at making a game from scratch after learning the basics of C# and the XNA framework.
                                                            </p>
                                                            <p>Having built a few simple windows applications before; I had stubled across the XNA framework from Microsoft, which allowed developers to build games and apps for their phones and the Xbox.
                                                            </p>
                                                            <p>
                                                                The game is in all essence Tetris and features a particle system and a high score board. The speed of falling pieces increases as lines are cleared, and a bonus score is awarded when Tetris (clearing 4 lines) is made.
                                                            </p>
                                                            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', marginTop: '40px', fontFamily: 'Nunito'}}>
                                                                <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Frameworks</div>
                                                                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                    <span style={{margin: '0 5px'}}>C#</span>
                                                                    <span style={{margin: '0 5px'}}>XNA</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                    </Modal>                                    
                                </div>
                                <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                    <a href='https://github.com/Civoremo/MineTris/tree/master/MineTris/MineTris' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                </div>
                            </div>
                        </div>
                    </Flip>
                    <Flip bottom>
                        <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                <img src={PortfolioGif} style={{maxWidth: '100%', maxHeight: '15rem'}} className='card-omg-top' alt='Portfolio Gif' />
                            </div>
                            <div className='card-body'>
                                <div style={{marginBottom: '15px'}}>
                                    <h5 className='card-title'>Portfolio</h5>
                                    <p className='card-text'>Custom portfolio site.</p>
                                    <ModalLink onClick={() => setLgOlderProject2Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                    <Modal
                                        size="lg"
                                        show={lgOlderProject2Show}
                                        onHide={() => setLgOlderProject2Show(false)}
                                        aria-labelledby="example-modal-sizes-title-lg"
                                    >
                                        <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Portfolio Site
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
                                <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                    <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                </div>
                            </div>
                        </div>
                    </Flip>
                    <Flip top>
                        <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                <img src="https://placekitten.com/g/200/200" style={{maxWidth: '100%', maxHeight: '15rem'}} className='card-omg-top' alt='...' />
                            </div>
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
                                <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                    <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                </div>
                            </div>
                        </div>
                    </Flip>
                    <Flip bottom>
                        <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                <img src={Architect1} style={{maxWidth: '100%', maxHeight: '15rem'}} className='card-omg-top' alt='...' />
                            </div>
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
                                                                <img src={Architect1} className="d-block" alt="first slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={Architect2} className="d-block" alt="second slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={Architect3} className="d-block" alt="third slide" />
                                                                </div>
                                                                <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                <img src={Architect4} className="d-block" alt="fourth slide" />
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
                                                        <div style={{ margin: '30px 20px'}}>
                                                            <p>
                                                                Recreated a pixel-perfect version of an architect firm's site. Design files were provided along with the content and the challenge was to build the site according to the designs. 
                                                            </p>
                                                            <p>The services page contains tabs that will change the content based on the button clicked.</p>
                                                            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', marginTop: '40px', fontFamily: 'Nunito'}}>
                                                                <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Frameworks</div>
                                                                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                    <span style={{margin: '0 5px'}}>HTML 5</span>
                                                                    <span style={{margin: '0 5px'}}>CSS 3</span>
                                                                    <span style={{margin: '0 5px'}}>LESS</span>
                                                                    <span style={{margin: '0 5px'}}>Responsive</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                    </Modal> 
                                </div>
                                <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                    <a href='https://smith-jones-architect.netlify.com/' className='card-link' target="_blank" rel='noopener noreferrer'>Live</a>
                                    <a href='https://github.com/Civoremo/User-Interface-Project-Week' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                </div>
                            </div>
                        </div>
                    </Flip>
                </CardContainerOlderProjectsDiv>

                    <div id='showMoreProjectsLink1' onClick={ () => showMoreProjectsPart2()} style={{color: '#007bff', cursor: 'pointer', display: 'block', marginBottom: '64px'}}>Show more</div>

                <div id='olderProjectsPart2' style={{display: 'none'}}>
                    <CardContainerOlderProjectsDiv>
                        <Flip top>
                            <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                    <img src={Note1} className='card-omg-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='...' />
                                </div>
                                <div className='card-body'>
                                    <div style={{marginBottom: '15px'}}>
                                        <h5 className='card-title'>Note App</h5>
                                        <p className='card-text'>Note taking app with CRUD operations.</p>
                                        <ModalLink onClick={() => setLgOlderProject5Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                        <Modal
                                            size="lg"
                                            show={lgOlderProject5Show}
                                            onHide={() => setLgOlderProject5Show(false)}
                                            aria-labelledby="example-modal-sizes-title-lg"
                                        >
                                            <Modal.Header closeButton>
                                            <Modal.Title id="example-modal-sizes-title-lg">
                                                Note App
                                            </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                                <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                    <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={Note1} className="d-block" alt="first slide" />
                                                                    </div>
                                                                    <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={Note2} className="d-block" alt="second slide" />
                                                                    </div>
                                                                    <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={Note3} className="d-block" alt="third slide" />
                                                                    </div>
                                                                    <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={Note4} className="d-block" alt="fourth slide" />
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
                                                            <div style={{ margin: '30px 20px'}}>
                                                                <p>
                                                                    A note taking app that allows for all CRUD operations. Performed all API calls to a remote server that stored the created notes and kept track of all changes made to said note along with deleting notes. A search function was added to more easily look for notes.
                                                                </p>
                                                                <p>
                                                                    Site is responsive.
                                                                </p>
                                                                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', marginTop: '40px', fontFamily: 'Nunito'}}>
                                                                <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Frameworks</div>
                                                                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                    <span style={{margin: '0 5px'}}>React</span>
                                                                    <span style={{margin: '0 5px'}}>Redux</span>
                                                                    <span style={{margin: '0 5px'}}>Javascript</span>
                                                                    <span style={{margin: '0 5px'}}>HTML 5</span>
                                                                    <span style={{margin: '0 5px'}}>CSS 3</span>
                                                                    <span style={{margin: '0 5px'}}>Less</span>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </Modal.Body>
                                        </Modal>                                    
                                    </div>
                                    <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                        <a href='https://lambda-notes.netlify.com/' className='card-link' target="_blank" rel='noopener noreferrer'>Live</a>
                                        <a href='https://github.com/Civoremo/front-end-project-week' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip bottom>
                            <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                    <img src={ToDo1} className='card-omg-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='...' />
                                </div>
                                <div className='card-body'>
                                    <div style={{marginBottom: '15px'}}>
                                        <h5 className='card-title'>ToDo App</h5>
                                        <p className='card-text'>A ToDo list with search functionality.</p>
                                        <ModalLink onClick={() => setLgOlderProject6Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                        <Modal
                                            size="lg"
                                            show={lgOlderProject6Show}
                                            onHide={() => setLgOlderProject6Show(false)}
                                            aria-labelledby="example-modal-sizes-title-lg"
                                        >
                                            <Modal.Header closeButton>
                                            <Modal.Title id="example-modal-sizes-title-lg">
                                                ToDo App
                                            </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                                <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                    <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={ToDo1} className="d-block" alt="first slide" />
                                                                    </div>
                                                                    <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={ToDo2} className="d-block" alt="second slide" />
                                                                    </div>
                                                                    <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={ToDo3} className="d-block" alt="third slide" />
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
                                                            <div style={{ margin: '30px 20px'}}>
                                                                <p>
                                                                    A ToDo app that allows the user to add items that need to be done; those items that are completed can be marked as completed and with a single button all those that were marked as complete can be removed. Items are stored in local storage to persist during a refresh of the site.
                                                                </p>
                                                                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', marginTop: '40px', fontFamily: 'Nunito'}}>
                                                                <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Frameworks</div>
                                                                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                    <span style={{margin: '0 5px'}}>React</span>
                                                                    <span style={{margin: '0 5px'}}>Javascript</span>
                                                                    <span style={{margin: '0 5px'}}>HTML 5</span>
                                                                    <span style={{margin: '0 5px'}}>CSS 3</span>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </Modal.Body>
                                        </Modal> 
                                    </div>
                                    <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                        <a href='https://todo-reactapp.netlify.com' className='card-link' target="_blank" rel='noopener noreferrer'>Live</a>
                                        <a href='https://github.com/Civoremo/React-Todo' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip top>
                            <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                    <img src={Quizz1} className='card-omg-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='...' />
                                </div>
                                <div className='card-body'>
                                    <div style={{marginBottom: '15px'}}>
                                        <h5 className='card-title'>Quiz Bliss</h5>
                                        <p className='card-text'>React app for creating and taking quizzes.</p>
                                        <ModalLink onClick={() => setLgOlderProject7Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                        <Modal
                                            size="lg"
                                            show={lgOlderProject7Show}
                                            onHide={() => setLgOlderProject7Show(false)}
                                            aria-labelledby="example-modal-sizes-title-lg"
                                        >
                                            <Modal.Header closeButton>
                                            <Modal.Title id="example-modal-sizes-title-lg">
                                                Quiz Bliss
                                            </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                                <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                    <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={Quizz1} className="d-block" alt="first slide" />
                                                                    </div>
                                                                    <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={Quizz2} className="d-block" alt="second slide" />
                                                                    </div>
                                                                    <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={Quizz3} className="d-block" alt="third slide" />
                                                                    </div>
                                                                    <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={Quizz4} className="d-block" alt="fourth slide" />
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
                                                            <div style={{ margin: '30px 20px'}}>
                                                                <p>
                                                                    Worked with 3 other developers that developed the back-end for the app. I spent one week during Christmas to build the front-end. 
                                                                </p>
                                                                <p>
                                                                    Start the app by creating an account, the app allows you to create, update and delete quizzes for you and others to take. It keeps track of your highest score for each attempted quiz along with a tournament mode that combines multiple quizzes into a Japorday style game. There is a search/filter function to sort through the maze of created quizzes.
                                                                </p>
                                                                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', marginTop: '40px', fontFamily: 'Nunito'}}>
                                                                <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Frameworks</div>
                                                                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                    <span style={{margin: '0 5px'}}>React</span>
                                                                    <span style={{margin: '0 5px'}}>Redux</span>
                                                                    <span style={{margin: '0 5px'}}>JWT Token</span>
                                                                    <span style={{margin: '0 5px'}}>Javascript</span>
                                                                    <span style={{margin: '0 5px'}}>HTML 5</span>
                                                                    <span style={{margin: '0 5px'}}>CSS 3</span>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </Modal.Body>
                                        </Modal> 
                                    </div>
                                    <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                        <a href='https://quizbliss.netlify.com/' className='card-link' target="_blank" rel='noopener noreferrer'>Live</a>
                                        <a href='https://github.com/Civoremo/Quiz_Bliss' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                        <Flip bottom>
                            <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px'}}>
                                    <img src={Shopping1} className='card-omg-top' style={{maxWidth: '100%', maxHeight: '15rem'}} alt='...' />
                                </div>
                                <div className='card-body'>
                                    <div style={{marginBottom: '15px'}}>
                                        <h5 className='card-title'>Shopping Cart List</h5>
                                        <p className='card-text'>Shopping list tracking react app.</p>
                                        <ModalLink onClick={() => setLgOlderProject8Show(true)} style={{color: '#007bff'}}>Learn more</ModalLink>

                                        <Modal
                                            size="lg"
                                            show={lgOlderProject8Show}
                                            onHide={() => setLgOlderProject8Show(false)}
                                            aria-labelledby="example-modal-sizes-title-lg"
                                        >
                                            <Modal.Header closeButton>
                                            <Modal.Title id="example-modal-sizes-title-lg">
                                                Shopping Cart List
                                            </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                                                <div className="carousel-inner" style={{backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                                                                    <div className="carousel-item active" style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={Shopping1} className="d-block" alt="first slide" />
                                                                    </div>
                                                                    <div className="carousel-item"  style={{ marginRight: '0px', width: 'auto'}}>
                                                                    <img src={Shopping2} className="d-block" alt="second slide" />
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
                                                            <div style={{ margin: '30px 20px'}}>
                                                                <p>
                                                                    Built a React app that let's users keep track of a shopping list. The user can add items they need and move the items from 'Need' to "Found" and delete unnecessary items.
                                                                </p>
                                                                <p>
                                                                    Duplicate items are not allowed; it is case insensitive.
                                                                </p>
                                                                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', marginTop: '40px', fontFamily: 'Nunito'}}>
                                                                <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Frameworks</div>
                                                                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                                                    <span style={{margin: '0 5px'}}>React</span>
                                                                    <span style={{margin: '0 5px'}}>Javascript</span>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </Modal.Body>
                                        </Modal> 
                                    </div>
                                    <div className='card-body' style={{borderTop: '1px solid rgba(0,0,0,.125)'}}>
                                        <a href='https://shopping-list-reactapp.netlify.com/' className='card-link' target="_blank" rel='noopener noreferrer'>Live</a>
                                        <a href='https://github.com/Civoremo/shopping-cart-lists' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                                    </div>
                                </div>
                            </div>
                        </Flip>
                    </CardContainerOlderProjectsDiv>

                    {/* <div style={{color: '#007bff', cursor: 'pointer', display: 'block', marginBottom: '64px'}}>Show more</div> */}
                </div>
            </Container>
        </ProjectsDiv>
    )
}

export default Projects;