import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Utils/Particle";
import ChatApp from '../../Assets/ChatApp.png'
import recipesapp from '../../Assets/veganrecipes.png'
import Store from '../../Assets/Store.png'
import MapWorkout from '../../Assets/mapWorkout.jpeg'
import portfolio from '../../Assets/portfolio.jpeg'
import './Projects.css'
import AnimationPage from "../../components/Utils/AnimationPage";

const Projects = () => {

  return (
    <AnimationPage>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My  self <strong className="blue">projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ChatApp}
                title="Chat App"
                description="Basic app of chat with rooms and users. with node.js in backend and css,html in frontend. To build real time chat app i worked with socket.io"
                link="https://github.com/amir1824/Chat-App-Node-Html-Css"

              />

            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portfolio}
                title="Portfolio"
                description="Portfolio for developer with react and bootstrap "
                link="https://github.com/amir1824/Portfolio"

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Store}
                title="Puppet Store"
                description="Store mern stack(in process) with node.js express and mongodb"
                link="https://github.com/amir1824/Store-MERN-Stack-in-process-"

              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={recipesapp}
                title="Recipes-App"
                description="Vegan recipes app built with react-native and expo liberi"
                link="https://github.com/amir1824/recipes-app"

              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={MapWorkout}
                title="Map-Your-Workout"
                description="Basic app of track after your workout on map with java script html and css "
                link="https://github.com/amir1824/Map-Your-Workout"

              />
            </Col>
            

          </Row>

        </Container>
      </Container>
    </AnimationPage>
  )

}

export default Projects
