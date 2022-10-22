import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../../components/Utils/Particle";
import freelance1 from '../../Assets/freelance1.jpeg'
import getWalk from '../../Assets/getWalk.jpeg'
import './Freelance.css'
import AnimationPage from "../../components/Utils/AnimationPage";
const FreelanceProjects = () => {

  return (
    <AnimationPage>
      <Container fluid className="freelance-section">
        <Particle />
        <Container>
          <h1 className="freelnace-heading">
            My Recent <strong className="blue">Freelance Works </strong>
          </h1>
          <p style={{ color: "white" }}>

          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="freelance-card">
              <ProjectCard
                imgPath={freelance1}
                title="Landing Page"
                description="Landing Page for lawyer with React,bootstrap and Emailjs"
                link="https://meirhyman-adv.net/"

              />
            </Col>

            <Col md={4} className="freelance-card">
              <ProjectCard
                imgPath={getWalk}
                title="Get Walk"
                description="Feasibility study"
                link="https://getwalk.tech/"

              />
            </Col>

          </Row>

        </Container>
      </Container>
    </AnimationPage>
  )

}

export default FreelanceProjects