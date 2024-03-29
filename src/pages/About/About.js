import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './About.css'
import Techstack from '../../components/About/Techstak'
import Toolstack from "../../components/About/ToolStack";
import AboutCard from "../../components/About/AboutCard";
import Lottie from "../../components/Lottie/LottieAbout";
import AnimationPage from "../../components/Utils/AnimationPage";

const About = () => {
  return (
    <AnimationPage>
      <Container fluid className="about-section">
        <Container>

          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="blue">I'M</strong>
              </h1>
              <AboutCard />
            </Col>

            <Col
              md={5}
              style={{ paddingTop: "5px", paddingBottom: "20px" }}
            >
              <Lottie />
            </Col>
          </Row>

          <Techstack />
          <Toolstack />

        </Container>
      </Container>
    </AnimationPage>

  );
};

export default About;