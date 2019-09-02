import React, {Component } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { Github, Linkedin } from 'styled-icons/boxicons-logos'
import { FilePdf } from 'styled-icons/boxicons-solid'
import PDFResume from './assets/Nedim_Omerovic_resume.pdf';
import * as emailjs from 'emailjs-com';

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
    padding-left: 64px;
    min-width: 300px;
    text-align: left;

`

const TitleDiv = styled.div `
    font-family: Nunito;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 4px;
`

class ContactForm extends Component {

        state = {
            senderName: "",
            senderEmail: "",
            senderMessage: "",
            error: {
                name: '',
                email: '',
                message: ''
            }
        }

    handleInputChange = (event) => {
        // event.preventDefault();
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validateEmail () {
        let errors = {};
        let formIsValid = true;

        if (!this.state.senderName || this.state.senderName.length < 3) {
            errors.name = 'Minimum 3 symbols';
            formIsValid = false;
        }

        if (!this.state.senderMessage || this.state.senderMessage.length < 10) {
            errors.message = 'Minimum 10 symbols';
            formIsValid = false;
        }

        if (!this.state.senderEmail || this.state.senderEmail.length < 3) {
            errors.email = 'Minimum 3 symbols';
            formIsValid = false;
        }

        let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

        if (!pattern.test(this.state.senderEmail)) {
            errors.email = 'This is not a valid email';
            formIsValid = false
        }

        this.setState({
            error: errors
        })

        return formIsValid;
    }

    sentMessage = (event) => {
        event.preventDefault();

        if (!this.validateEmail()) {
            alert('Submit failed; check all fields and try again.')
            return
        }

        let templateParams = {
            from_name: this.state.senderName + ' ( ' + this.state.senderEmail + ' ) ',
            to_name: 'Nedim',
            subject: 'Nedim Protfolio Contact Form',
            message_html: this.state.senderMessage
        }

        emailjs.send('gmail', 'template_yWpCOl7P', templateParams, 'user_zHXZbcrZAQtCtTpoktzEk')
        .then((response) => {
            alert('Message sent successfully.')
            console.log('SUCCESS', response.status, response.text);
        }, (err) => {
            alert(err)
            console.log('FAILED...', err)
        });

        this.setState({
            senderName: '',
            senderEmail: '',
            senderMessage: ''
        })
    }

    render () {
        return (
            <ContactContainerDiv className='contact'>
                <Container>
                    <h2 style={{textAlign: 'left', margin: '40px 70px 30px 70px', fontFamily: 'Nunito'}}>
                        <span>
                            Get in Contact
                        </span>
                    </h2>
                    <Container style={{padding: '30px 70px'}}>
                        <ContactSectionWrapper>
                            <FormContainer>
                                <form id='contact-form' name='contact-form-group' method='post' action='submit' style={{paddingRight: '25px', paddingBottom: '30px'}}>
                                    <div className='form-group' >
                                        <div className='form-row'>
                                            <div className='col' style={{minWidth: '300px', margin: '15px 0 15px 15px'}}>
                                                <label htmlFor='formGroupNameInput' style={{ textAlign: 'left', width: '100%', fontFamily: 'Open Sans Condensed', fontWeight: 'bold', fontSize: '22px', letterSpacing: '5px', padding: '0 20px'}}>Name</label>
                                                <input 
                                                    type='text' 
                                                    name='senderName' 
                                                    className='form-control' 
                                                    required='required' 
                                                    onChange={this.handleInputChange} 
                                                    value={this.state.senderName} 
                                                    error={this.state.error.name} >
                                                </input>
                                            </div>
                                            <div className='col' style={{minWidth: '300px', margin: '15px 0 15px 15px'}}>
                                                <label htmlFor='formGroupEmailInput' style={{ textAlign: 'left', width: '100%', fontFamily: 'Open Sans Condensed', fontWeight: 'bold', fontSize: '22px', letterSpacing: '5px', padding: '0 20px'}}>Email</label>
                                                <input 
                                                    type='text' 
                                                    className='form-control' 
                                                    name='senderEmail' 
                                                    required='required'
                                                    onChange={this.handleInputChange}
                                                    value={this.state.senderEmail}
                                                    error={this.state.error.email}>
                                                </input>
                                            </div>
                                        </div>
                                        <div className='form-row'>
                                            <div className='col' style={{minWidth: '300px', margin: '15px 0 15px 15px'}}>
                                                <label htmlFor='formGroupMessageInput' style={{ textAlign: 'left', width: '100%', fontFamily: 'Open Sans Condensed', fontWeight: 'bold', fontSize: '22px', letterSpacing: '5px', padding: '0 20px'}}>Message</label>
                                                <textarea 
                                                    type='text' 
                                                    className='form-control' 
                                                    name='senderMessage' 
                                                    required='required'
                                                    onChange={this.handleInputChange}
                                                    value={this.state.senderMessage}
                                                    error={this.state.error.message}
                                                    rows='6' 
                                                    style={{resize: 'none'}}>
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={this.sentMessage}
                                        type="button"
                                        name='submit' 
                                        className='btn btn-danger' 
                                        required='required'
                                        >
                                            Submit
                                    </button>
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
                                <div style={{marginBottom: '15px', marginLeft: '10px', fontFamily: 'Open Sans Condensed', letterSpacing: '4px'}}><a href='https://github.com/Civoremo' target='_blank' rel='noopener noreferrer'><Github style={{width: '50px', color: '#fff'}} /></a></div>
                                <TitleDiv>LinkedIn</TitleDiv>
                                <div style={{marginBottom: '15px', marginLeft: '10px', fontFamily: 'Open Sans Condensed', letterSpacing: '4px'}}><a href='https://www.linkedin.com/in/nedim-omerovic-46088b25' target='_blank' rel='noopener noreferrer' ><Linkedin style={{width: '50px', color: '#fff'}} /></a></div>
                            </SocialLinksContainer>
                        </ContactSectionWrapper>
                    </Container>
                </Container>
            </ContactContainerDiv>
        )

    }
}

export default ContactForm;