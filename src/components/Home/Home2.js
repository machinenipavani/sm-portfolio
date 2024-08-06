import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            Sure! Here's the rephrased version without mentioning Blockchain:

```jsx
<p className="home-about-body">
  I fell in love with programming and have learned quite a bit, I believe… 🤷‍♂️
  <br />
  <br />I am fluent in languages like
  <i>
    <b className="purple"> Python,Java and React Js</b>
  </i>
  <br />
  <br />
  My fields of interest include building new &nbsp;
  <i>
    <b className="purple">Web Technologies and Products</b>.
  </i>
  <br />
  <br />
  Whenever possible, I apply my passion for developing products with
  <i>
    <b className="purple"> Modern JavaScript Libraries and Frameworks</b>
  </i>
  &nbsp; like
  <i>
    <b className="purple"> React.js</b>
  </i>
  <br />
  <br />
  Additionally, I am skilled in
  <i>
    <b className="purple"> HTML, CSS, and SQL</b>
  </i>.
</p>
```
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/machinenipavani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pavani-machineni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__pavani_chowdary__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
