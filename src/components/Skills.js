import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ReactLogo from "../assets/images/react.png";
import NodeLogo from "../assets/images/node-js.png";
import CssLogo from "../assets/images/css.png";
import HtmlLogo from "../assets/images/html.png";
import JsLogo from "../assets/images/JavaScript-logo.png";
import NextLogo from "../assets/images/next.png";
import TypescriptLogo from "../assets/images/typescript.png";
import TailwindLogo from "../assets/images/tailwind.png";
import PythonLogo from "../assets/images/python-logo.png";
import MySQLogo from "../assets/images/mysql-logo.png";
import FlaskLogo from "../assets/images/flask-logo.png";
import DjangoLogo from "../assets/images/django-logo.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Here are skills that I have acquired and have grown confident
                working with.
                <br></br> These skills I have applied in building some good and
                amazing projects.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <div className="image-container">
                    <img src={PythonLogo} alt="img" />
                  </div>
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={FlaskLogo} alt="img" />
                  </div>
                  <h5>Flask</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={MySQLogo} alt="img" />
                  </div>
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={DjangoLogo} alt="img" />
                  </div>
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={JsLogo} alt="img" />
                  </div>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={NodeLogo} alt="img" />
                  </div>
                  <h5>Node/Express Js</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={ReactLogo} alt="img" />
                  </div>
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={NextLogo} alt="img" />
                  </div>
                  <h5>Next.Js</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={TypescriptLogo} alt="img" />
                  </div>
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={CssLogo} alt="img" />
                  </div>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={TailwindLogo} alt="img" />
                  </div>
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <div className="image-container">
                    <img src={HtmlLogo} alt="img" />
                  </div>
                  <h5>HTML</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
