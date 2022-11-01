import React from "react";
import { Col, Row } from "react-bootstrap";
import './About.css'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
  DiJava,


} from "react-icons/di";
import { SiFirebase, SiTypescript } from "react-icons/si";



const Techstack = () => {
  return (
    <>
      <h1 className="project-heading">
        <strong className="blue">Skills </strong>
      </h1>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          < SiTypescript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;