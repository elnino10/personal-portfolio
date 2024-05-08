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
              Hello, I'm Joe Chidiebere, a dynamic professional with a diverse background 
              in Electronics and Computer Engineering. With over 2 years of experience in 
              web development, I've honed my skills as a Web Developer, crafting elegant and 
              functional digital solutions. Currently, I'm on an exciting journey as a software 
              engineering student at ALX-SE Africa, where I'm immersing myself in hands-on 
              projects to further sharpen my skillset, and specializing on backend web development. 
              This transition marks a strategic move to stay abreast of the fast-paced tech 
              landscape and enhance my flexibility in adapting to evolving industry demands. 
              In addition to my web development expertise, I bring over 5 years of invaluable 
              experience as an electronics/electrical industrial engineer, collaborating with 
              various companies to drive innovation and efficiency in their operations. 
              My coding journey began in mid-2022, driven by a quest to remain relevant and 
              adaptable in our contemporary world. I firmly believe in the power of continuous 
              learning and hard work as the key ingredients for success, leaving little to chance. 
              With a solid foundation in both engineering and software development, I'm passionate 
              about leveraging technology to tackle complex challenges and drive positive change 
              in the digital realm.
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
              <b>NodeJs/ExpressJs, Python/Flask, Django</b> <b>relational databases and non-relational databases,</b> and also
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
