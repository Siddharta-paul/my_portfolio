import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/bg remove high2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/siddharta-paul-99a0891bb/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/siddharta.paul.71/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/sidd__paul/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>&#169; Siddharta Shankar Paul</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
