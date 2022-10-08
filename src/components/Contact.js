import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fgpfdlt",
        "template_q8s1t0c",
        form.current,
        "oGMLM4A9A2btGGti6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
          <section className="contact" id="connect">
            <Container>
              <Row className="align-items-center">
                <Col size={12} md={6}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                    }
                  </TrackVisibility>
                </Col>
                <Col size={12} md={6}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Get In Touch</h2>
                      <form ref={form} onSubmit={sendEmail}>
                        <Row>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text" placeholder="First Name" name="user_name" />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="email" placeholder="Email Address" name="user_email" />
                          </Col>
                          <Col size={12} className="px-1">
                            <textarea rows="6" placeholder="Message" name='message'></textarea>
                            <button type="submit">Submit</button>
                          </Col>
                        </Row>
                      </form>
                    </div>}
                  </TrackVisibility>
                </Col>
              </Row>
            </Container>
          </section>
  );
};

export default Contact;