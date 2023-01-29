import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import TeamImg from "../assets/images/team.png";
import VisionImg from "../assets/images/vision-img.png";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <Container>
        <Row className="d-flex align-items-center justify-content-center text-center">
          <div className="about">
            <h2>About Me</h2>
            <p>
              I am Joe Chidiebere, a graduate of Electronics and Computer
              Engineering, and a Web Developer with 2+ years of experience in
              web development. I also have 5+ years of working experience as an
              electronics/electrical industrial engineer. I have worked with
              multiple companies in my years of work. I started learning to code 
              in mid 2020 because I had to learn a new skill that will keep me 
              relevant in the fast evolving times in our contemporary world and
              would give me the flexibility I desire. I believe in learning
              and hardwork to achieve success leaving little or nothing to fate.
            </p>
          </div>
        </Row>
        <Row>
          <div className="my-purpose">
            <h4>My Purpose</h4>
            <p>
              My goal is to provide the best services to companies and
              individuals that I work for. I wake up every morning challenging
              myself and committing to providing solutions and help solve
              problems that face my clients or employers.
            </p>
          </div>
        </Row>
        <Row>
          <Col md={6} sm={4}>
            <div className="my-vision">
              <h4>My Vision</h4>
              <p>
                I am innovative, dedicated and passionate, a good team player
                and committed to learning new skills. I am building myself to be
                solution and goal oriented, and a knowledgeable software
                engineer that you would want in your team because I motivate not
                only myself but my team members as well.
              </p>
            </div>
          </Col>
          <Col md={6} sm={4}>
            <img src={VisionImg} alt="vision" />
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={4}>
            <img src={TeamImg} alt="values" />
          </Col>
          <Col md={6} sm={4}>
            <div className="core-values">
              <h4>My Core Values</h4>
              <ul>
                <li>Committment to my work</li>
                <li>Ability to learn new skills and improve on myself</li>
                <li>Good communication skill</li>
                <li>Working and winning together as a team</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="my-profile">
            <h4>My Profile</h4>
            <p>
              I have worked in an industrial sector for a few years (5+ years)
              and I have quite developed and improved on my soft skills and
              ability to collaborate with co-workers, superiors and
              subordinates. My quest for a flexible and more challenging job
              pushed me to learning programming and web development because I
              am not shy or afraid of trying or learning a new neccessary skill
              for self improvement. I am happy with my progress so far which led
              to engaging myself with the projects listed above in the{" "}
              <a href="#projects">projects</a> section, thereby working with{" "}
              <b>NodeJs/ExpressJs,</b> <b>relational database,</b> and also
              working with the <b>ReactJs</b> library as part of the{" "}
              <a href="#skills">skills</a> I've acquired.
              <br />
              When I'm not working, I play billiard, table tennis, football, or
              I read. I enjoy taking walks as well.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
