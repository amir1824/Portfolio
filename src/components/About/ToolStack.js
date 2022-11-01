import React from "react";
import { Col, Row } from "react-bootstrap";
import './About.css';
import {

  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiInsomnia,
  SiJirasoftware,
  SiXcode,
  SiAndroidstudio,
  SiLinux
} from "react-icons/si";
import { DiGit } from "react-icons/di";

const Toolstack = () => {
  return (
    <>
      <h1 className="project-heading">
        <strong className="blue">Tools</strong>
      </h1>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiJirasoftware />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiInsomnia />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMacos />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiXcode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAndroidstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </Row>

    </>
  );
};

export default Toolstack;