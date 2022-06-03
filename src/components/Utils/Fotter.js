import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Fotter.css'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Amir</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} ABS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/amir1824"
                className="icon-colour  home-social-icons"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://www.facebook.com/amir.benshimol"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
          
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/amir-ben-shimol-5121731aa/"
                className="icon-colour  home-social-icons"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;