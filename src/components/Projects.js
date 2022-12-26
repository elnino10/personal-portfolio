import React from "react";
import ProjectCard from "./ProjectCard";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import LosonImg from "../assets/images/loson-img.png";
import RhonnImg from "../assets/images/rhonn-img.png";
import ProjectImg3 from "../assets/images/project-img3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Loson stores e-commerce",
      description: "Building the backend API for an e-commerce app",
      image: LosonImg,
    },
    {
      title: "Loson stores e-commerce",
      description: "Building the backend API for an e-commerce app",
      image: RhonnImg,
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
              The projects below are ones live and ones that I've use in
              practice.
              <br></br> In these projects I applied my afore mentioned
              skills. Click on "Tab 1" below to view.
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
                <Tab.Pane eventKey="second">Nothing Here Yet. Please check back later!</Tab.Pane>
                <Tab.Pane eventKey="third">Nothing Here Yet. Please check back later!</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
