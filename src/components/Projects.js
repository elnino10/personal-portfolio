import React from "react";
import ProjectCard from "./ProjectCard";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectImg1 from "../assets/images/project-img1.webp";
import ProjectImg2 from "../assets/images/project-img2.jpg";
import ProjectImg3 from "../assets/images/project-img3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Loson stores e-commerce",
      description: "Building the backend API for an e-commerce app",
      image: ProjectImg1,
    },
    {
      title: "Loson stores e-commerce",
      description: "Building the backend API for an e-commerce app",
      image: ProjectImg2,
    },
    {
      title: "Loson stores e-commerce",
      description: "Building the backend API for an e-commerce app",
      image: ProjectImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br></br> Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <div className="tab-nav">
                <Nav variant="pills" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
