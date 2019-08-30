import React, { useEffect, useRef } from 'react';
import { TweenMax, Linear, TimelineLite, Back } from 'gsap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const ContactContainerDiv = styled.div `
    background: #222;
    color: #fff;
    padding: 50px 0 50px 0;
`

const FormContainer = styled.div `
    max-width: 650px;
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
                <Container style={{border: '1px solid red', padding: '30px 70px'}}>
                    <FormContainer>
                        <form action='/contact_page.php' style={{paddingRight: '25px', paddingBottom: '30px', borderRight: '5px solid red'}}>
                            <div className='form-group' >
                                <div className='form-row'>
                                    <div className='col' style={{minWidth: '300px', margin: '15px 0 15px 15px'}}>
                                        <label for='formGroupNameInput' style={{ textAlign: 'left', width: '100%', fontFamily: 'Open Sans Condensed', fontWeight: 'bold', fontSize: '22px', letterSpacing: '5px', padding: '0 20px'}}>Name</label>
                                        <input type='text' className='form-control' id='formGroupNameInput' required ></input>
                                    </div>
                                    <div className='col' style={{minWidth: '300px', margin: '15px 0 15px 15px'}}>
                                        <label for='formGroupEmailInput' style={{ textAlign: 'left', width: '100%', fontFamily: 'Open Sans Condensed', fontWeight: 'bold', fontSize: '22px', letterSpacing: '5px', padding: '0 20px'}}>Email</label>
                                        <input type='text' className='form-control' id='formGroupEmailInput' required></input>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className='col' style={{minWidth: '300px', margin: '15px 0 15px 15px'}}>
                                        <label for='formGroupMessageInput' style={{ textAlign: 'left', width: '100%', fontFamily: 'Open Sans Condensed', fontWeight: 'bold', fontSize: '22px', letterSpacing: '5px', padding: '0 20px'}}>Message</label>
                                        <textarea type='text' className='form-control' id='formGroupMessageInput' required rows='6' style={{resize: 'none'}}></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className='btn btn-danger'>Submit</button>
                        </form>
                    </FormContainer>
                </Container>
            </Container>
        </ContactContainerDiv>
    )
}

export default ContactForm;