import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import './About.css'
const  AboutCard =()=> {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi You! I am <span className="purple">Amir Ben Shimol </span>
            <span className="blue"> </span>
            <br />Computer Science 3rd year student at The Open University of Israel. My 
                   strengths include hard work, self -learning ability, curiosity and I am 
                   eager to learn new things in every aspect of my life. While performing my 
                   various duties, I have worked in teams, creatively solving problems, and 
t                  hinking out of the box.
            <br />
            <br />
           
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#676d9b" }}>
            "Stay hungry. Stay foolish"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;