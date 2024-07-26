import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import appleClone from "../../Assets/Projects/appleClone.png";
import setTimer from "../../Assets/Projects/setTimer.png";
import searchData from "../../Assets/Projects/searchData.png";
import simpleInterestCalculator from "../../Assets/Projects/simpleInterestCalculator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appleClone}
              isBlog={false}
              title="Apple Clone"
              description="The Apple clone project using React.js aims to replicate the design and functionality of Apple's official website, featuring a responsive layout, dynamic product pages, and smooth animations. This project showcases modern web development techniques, including component-based architecture and state management, creating a visually appealing and interactive user experience.."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://apple-i-phone-15.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={setTimer}
              isBlog={false}
              title="Set Timer"
              description="The Set Time project using React.js allows users to schedule and manage tasks with a user-friendly interface, featuring customizable timers and notifications. It employs state management and hooks for dynamic updates and responsive design for seamless usage across devices."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://flip-timer-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={searchData}
              isBlog={false}
              title="Search Data"
              description="The Search Data project using React.js enables users to efficiently search and filter through large datasets with an intuitive interface. Utilizing state management and hooks, it provides real-time search results and responsive design for optimal performance across devices."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://v-search-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simpleInterestCalculator}
              isBlog={false}
              title="Simple Interest Calculator"
              description="The Sample Interest project using React.js allows users to calculate interest based on different financial inputs through an interactive interface. Utilizing state management and hooks, it provides real-time calculations and a responsive design for seamless use across devices."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://simple-interest-calculator-rose.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
