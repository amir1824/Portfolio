import {React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Utils/Particle";
import Home2 from "./Home2";
import Type from "./TypeWriter";
import LottieHome from "../Lottie/LottieHome";
import './Home.css'
import AnimationPage from "../Utils/AnimationPage";


const Home = () => {

  
  return (
    <AnimationPage>
    <section>
    <Particle />
      
      <Container fluid className=  "home-section" id="home">
        
        
        <Container className="home-content">

          <Row>
          
            <Col md={7} className="home-header">
            
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello You{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏾
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Amir Ben Shimol</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingTop: "5px", paddingBottom: "20px" }}>

              <LottieHome />
            </Col>
            
          </Row>
         
          
        </Container>
      </Container>
      <Home2 />

     
    </section>
    </AnimationPage>
  );
}

export default Home;