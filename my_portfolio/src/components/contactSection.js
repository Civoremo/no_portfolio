import React, { useEffect, useRef } from 'react';
import { TweenMax, Linear, TimelineLite, Back } from 'gsap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { Github, Linkedin } from 'styled-icons/boxicons-logos'
import { FilePdf } from 'styled-icons/boxicons-solid'
import PDFResume from './assets/Nedim_Omerovic_resume.pdf';

const ContactContainerDiv = styled.div `
    background: #222;
    color: #fff;
    padding: 50px 0 50px 0;
`

const FormContainer = styled.div `
    max-width: 650px;
    margin-bottom: 30px;
`

const ContactSectionWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const SocialLinksContainer = styled.div `
    padding-left: 20px;
    min-width: 300px;
    text-align: left;

`

const TitleDiv = styled.div `
    font-family: Nunito;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 4px;
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
                <Container style={{padding: '30px 70px'}}>
                    <ContactSectionWrapper>
                        <FormContainer>
                            <form className='needs-validation' noValidate id='contact-form' method='post' action='contactSubmit.php' role='form' style={{paddingRight: '25px', paddingBottom: '30px'}}>
                                <div className='form-group' >
                                    <div className='form-row'>
                                        <div className='col' style={{minWidth: '300px', margin: '15px 0 15px 15px'}}>
                                            <label htmlFor='formGroupNameInput' style={{ textAlign: 'left', width: '100%', fontFamily: 'Open Sans Condensed', fontWeight: 'bold', fontSize: '22px', letterSpacing: '5px', padding: '0 20px'}}>Name</label>
                                            <input type='text' className='form-control' id='formGroupNameInput' required ></input>
                                        </div>
                                        <div className='col' style={{minWidth: '300px', margin: '15px 0 15px 15px'}}>
                                            <label htmlFor='formGroupEmailInput' style={{ textAlign: 'left', width: '100%', fontFamily: 'Open Sans Condensed', fontWeight: 'bold', fontSize: '22px', letterSpacing: '5px', padding: '0 20px'}}>Email</label>
                                            <input type='text' className='form-control' id='formGroupEmailInput' required></input>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='col' style={{minWidth: '300px', margin: '15px 0 15px 15px'}}>
                                            <label htmlFor='formGroupMessageInput' style={{ textAlign: 'left', width: '100%', fontFamily: 'Open Sans Condensed', fontWeight: 'bold', fontSize: '22px', letterSpacing: '5px', padding: '0 20px'}}>Message</label>
                                            <textarea type='text' className='form-control' id='formGroupMessageInput' required rows='6' style={{resize: 'none'}}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className='btn btn-danger'>Submit</button>
                            </form>
                        </FormContainer>
                        <SocialLinksContainer>
                            <TitleDiv>Current Location</TitleDiv>
                            <div style={{marginBottom: '15px', marginLeft: '10px', fontFamily: 'Open Sans Condensed', letterSpacing: '4px'}}>Orlando, Florida</div>
                            <TitleDiv>Email</TitleDiv>
                            <div style={{marginBottom: '15px', marginLeft: '10px', fontFamily: 'Open Sans Condensed', letterSpacing: '4px'}}><a href='mailto:contact@nedim.info' style={{ color: '#fff'}}>contact@nedim.info</a></div>
                            <TitleDiv>Resume</TitleDiv>
                            <div style={{marginBottom: '15px', marginLeft: '10px', fontFamily: 'Open Sans Condensed', letterSpacing: '4px'}}><a href={PDFResume} target='Nedim_Omerovic_Resume'><FilePdf  style={{width: '50px', color: '#fff'}} /></a></div>
                            <TitleDiv>Github</TitleDiv>
                            <div style={{marginBottom: '15px', marginLeft: '10px', fontFamily: 'Open Sans Condensed', letterSpacing: '4px'}}><a href='https://github.com/Civoremo' target='_blank'><Github style={{width: '50px', color: '#fff'}} /></a></div>
                            <TitleDiv>LinkedIn</TitleDiv>
                            <div style={{marginBottom: '15px', marginLeft: '10px', fontFamily: 'Open Sans Condensed', letterSpacing: '4px'}}><a href='https://www.linkedin.com/in/nedim-omerovic-46088b25' target='_blank' ><Linkedin style={{width: '50px', color: '#fff'}} /></a></div>
                        </SocialLinksContainer>
                    </ContactSectionWrapper>
                </Container>
            </Container>
        </ContactContainerDiv>
    )
}

export default ContactForm;