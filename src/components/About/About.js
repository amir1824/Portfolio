import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './About.css'
import Particle from "../Utils/Particle";
import Techstack from './Techstak'
import Toolstack from "./ToolStack";
import AboutCard from "./AboutCard";
import Lottie from "../Lottie/LottieAbout";
import AnimationPage from "../Utils/AnimationPage";

const  About = ()=> {
    return (
      <AnimationPage>
      <Container fluid className="about-section">
        <Particle />
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
              <AboutCard/>
            </Col>

            <Col
                 md={5}
                 style={{ paddingTop: "5px", paddingBottom: "20px" }} 
            >
           
           <Lottie/>
            
            </Col>
            
               
          </Row>
          <h1 className="project-heading">
             <strong className="blue">Skills </strong>
          </h1>
          <Techstack/>
  
       
  
          <h1 className="project-heading">
            <strong className="blue">Tools</strong>
          </h1>
          <Toolstack/>
         
  
          
        </Container>
    
      </Container>
      </AnimationPage>
      
    );
  }
  
  export default About;