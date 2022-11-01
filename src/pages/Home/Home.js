import {React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Info from "../../components/Home/Info";
import Type from "../../components/Home/TypeWriter";
import LottieHome from "../../components/Lottie/LottieHome";
import './Home.css'
import AnimationPage from "../../components/Utils/AnimationPage";

const Home = () => {

  return (
    <AnimationPage>
    <section>
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
      <Info />
    </section>
    </AnimationPage>
  );
};

export default Home;