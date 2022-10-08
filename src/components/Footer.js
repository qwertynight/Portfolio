import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Col, Row,Navbar, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center logo-container">
          <Col size={12} sm={6}>
          <Navbar.Brand href="/">
            <h1>Portfolio</h1>
          </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-5">
            <div className="social-icon ">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
