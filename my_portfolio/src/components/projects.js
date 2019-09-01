import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import {Redux, ReactLogo, Javascript, Html5, Css3} from 'styled-icons/boxicons-logos'
import mongodb from './my_images/mongodb.png'
import apollo from './my_images/apollo.png';
import graphql from './my_images/graphql.png';
import Flip from 'react-reveal/Flip'

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

const Projects = () => {

    return (
        <ProjectsDiv>
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
                                                <p className='card-text'>Worked with a team to add additional features and refactor old code.</p>
                                                <a href='#'>Learn More</a>
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
                                                <h5 className='card-title'>Arq</h5>
                                                <p className='card-text'>Worked with a team to add additional features and refactor old code.</p>
                                                <a href='#'>Learn More</a>
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
                                                <h5 className='card-title'>Arq</h5>
                                                <p className='card-text'>Worked with a team to add additional features and refactor old code.</p>
                                                <a href='#'>Learn More</a>
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
                    <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                        <img src="https://placekitten.com/g/200/200" className='card-omg-top' alt='...' />
                        <div className='card-body'>
                            <p className='card-text'>Some project description text</p>
                            <div className='card-body' style={{borderTop: '1px solid whitesmoke'}}>
                                <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                            </div>
                        </div>
                    </div>
                    <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                        <img src="https://placekitten.com/g/200/200" className='card-omg-top' alt='...' />
                        <div className='card-body'>
                            <p className='card-text'>Some project description text</p>
                            <div className='card-body' style={{borderTop: '1px solid whitesmoke'}}>
                                <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                            </div>
                        </div>
                    </div>
                    <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                        <img src="https://placekitten.com/g/200/200" className='card-omg-top' alt='...' />
                        <div className='card-body'>
                            <p className='card-text'>Some project description text</p>
                            <div className='card-body' style={{borderTop: '1px solid whitesmoke'}}>
                                <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                            </div>
                        </div>
                    </div>
                    <div className='card' style={{width: '14rem', margin: '3px 3px'}}>
                        <img src="https://placekitten.com/g/200/200" className='card-omg-top' alt='...' />
                        <div className='card-body'>
                            <p className='card-text'>Some project description text</p>
                            <div className='card-body' style={{borderTop: '1px solid whitesmoke'}}>
                                <a href='https://github.com/Civoremo/Arq' className='card-link' target="_blank" rel='noopener noreferrer'>Github</a>
                            </div>
                        </div>
                    </div>
                </CardContainerDiv>
            </Container>
        </ProjectsDiv>
    )
}

export default Projects;