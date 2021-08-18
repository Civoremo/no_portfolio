/** @format */

import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import * as emailjs from "emailjs-com";
import Reaptcha from "reaptcha";

import SocialSection from "./socialSection";

const ContactContainerDiv = styled.div`
  background: #222;
  color: #fff;
  padding: 50px 0 50px 0;
  // margin-top: 100px;
`;

const FormContainer = styled.div`
  max-width: 650px;
  margin-bottom: 30px;
`;

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class ContactForm extends Component {
  state = {
    senderName: "",
    senderEmail: "",
    senderMessage: "",
    error: {
      name: "",
      email: "",
      message: "",
    },
    verified: false,
  };

  handleInputChange = event => {
    // event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validateEmail() {
    let errors = {};
    let formIsValid = true;

    if (!this.state.senderName || this.state.senderName.length < 3) {
      errors.name = "Minimum 3 symbols";
      formIsValid = false;
    }

    if (!this.state.senderMessage || this.state.senderMessage.length < 10) {
      errors.message = "Minimum 10 symbols";
      formIsValid = false;
    }

    if (!this.state.senderEmail || this.state.senderEmail.length < 3) {
      errors.email = "Minimum 3 symbols";
      formIsValid = false;
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(this.state.senderEmail)) {
      errors.email = "This is not a valid email";
      formIsValid = false;
    }

    this.setState({
      error: errors,
    });

    return formIsValid;
  }

  onVerify = recaptchaResponse => {
    // let reResponse = `${document.querySelector("#g-recaptcha-response").value}`;
    // console.log(reResponse);

    fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        secret: `${process.env.REACT_APP_CAPTCHASECRET}`,
        response: `${document.querySelector("#g-recaptcha-response").value}`,
      }),
    })
      .then(res => {
        // console.log("recaptcha res: " + JSON.stringify(res));
        this.setState({
          verified: true,
        });
      })
      .catch(err => {
        console.log("recaptcha error " + err);
      });
  };

  sentMessage = event => {
    event.preventDefault();

    if (!this.validateEmail()) {
      alert("Submit failed; check all fields and try again.");
      return;
    }

    let templateParams = {
      from_name: this.state.senderName,
      sender_email: this.state.senderEmail,
      to_name: "Nedim",
      subject: "Portfolio Contact",
      message_html: this.state.senderMessage,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER
      )
      .then(response => {
        alert("Message sent successfully.");
        console.log("SUCCESS", response.status, response.text);
      })
      .catch(err => {
        alert("Failed ", err);
        console.log("FAILED...", err);
      });

    this.setState({
      senderName: "",
      senderEmail: "",
      senderMessage: "",
    });
  };

  render() {
    return (
      <ContactContainerDiv className='contact'>
        <Container>
          <h2
            style={{
              textAlign: "left",
              margin: "40px 70px 30px 70px",
              fontFamily: "Nunito",
            }}
          >
            <span style={{ color: "#DC3545" }}>Get in Contact</span>
          </h2>
          <Container style={{ padding: "30px 70px" }}>
            <ContactSectionWrapper>
              <FormContainer>
                <form
                  id='contact-form'
                  name='contact-form-group'
                  method='post'
                  action='submit'
                  style={{ paddingRight: "25px", paddingBottom: "30px" }}
                >
                  <div className='form-group'>
                    <div className='form-row'>
                      <div
                        className='col'
                        style={{
                          minWidth: "300px",
                          margin: "15px 0 15px 15px",
                        }}
                      >
                        <label
                          htmlFor='formGroupNameInput'
                          style={{
                            textAlign: "left",
                            width: "100%",
                            fontFamily: "Open Sans Condensed",
                            fontWeight: "bold",
                            fontSize: "22px",
                            letterSpacing: "5px",
                            padding: "0 20px",
                          }}
                        >
                          Name
                        </label>
                        <input
                          type='text'
                          name='senderName'
                          className='form-control'
                          required='required'
                          onChange={this.handleInputChange}
                          value={this.state.senderName}
                          error={this.state.error.name}
                        ></input>
                      </div>
                      <div
                        className='col'
                        style={{
                          minWidth: "300px",
                          margin: "15px 0 15px 15px",
                        }}
                      >
                        <label
                          htmlFor='formGroupEmailInput'
                          style={{
                            textAlign: "left",
                            width: "100%",
                            fontFamily: "Open Sans Condensed",
                            fontWeight: "bold",
                            fontSize: "22px",
                            letterSpacing: "5px",
                            padding: "0 20px",
                          }}
                        >
                          Email
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          name='senderEmail'
                          required='required'
                          onChange={this.handleInputChange}
                          value={this.state.senderEmail}
                          error={this.state.error.email}
                        ></input>
                      </div>
                    </div>
                    <div className='form-row'>
                      <div
                        className='col'
                        style={{
                          minWidth: "300px",
                          margin: "15px 0 15px 15px",
                        }}
                      >
                        <label
                          htmlFor='formGroupMessageInput'
                          style={{
                            textAlign: "left",
                            width: "100%",
                            fontFamily: "Open Sans Condensed",
                            fontWeight: "bold",
                            fontSize: "22px",
                            letterSpacing: "5px",
                            padding: "0 20px",
                          }}
                        >
                          Message
                        </label>
                        <textarea
                          type='text'
                          className='form-control'
                          name='senderMessage'
                          required='required'
                          onChange={this.handleInputChange}
                          value={this.state.senderMessage}
                          error={this.state.error.message}
                          rows='6'
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      margin: "10px auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Reaptcha
                      sitekey={process.env.REACT_APP_RECAPTCHA}
                      onVerify={this.onVerify}
                    />
                  </div>
                  <button
                    onClick={this.sentMessage}
                    type='button'
                    name='submit'
                    className='btn btn-danger'
                    required='required'
                    disabled={!this.state.verified}
                  >
                    Submit
                  </button>
                </form>
              </FormContainer>

              {/* <SocialSection /> */}
            </ContactSectionWrapper>
          </Container>
        </Container>
      </ContactContainerDiv>
    );
  }
}

export default ContactForm;
