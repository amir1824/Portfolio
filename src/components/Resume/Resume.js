import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Utils/Particle";
import pdf from "./CV-AMIR.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import './Resume.css'
import AnimationPage from "../Utils/AnimationPage";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



const ResumeNew =() => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <AnimationPage>
    <div>
      <Container fluid className="resume-section">
        <Particle />
      
        <Row className="resume">
          <Document file={require('./CV-AMIR.pdf')} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
    </AnimationPage>
  )
}

export default ResumeNew;