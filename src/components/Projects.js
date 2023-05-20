import React from "react";
import ProjectCard from "./ProjectCard";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TwitterImg from "../assets/images/twitter-clone-image.png";
import LosonImg from "../assets/images/proj-img-loson.png";
import RhonnImg from "../assets/images/proj-img-rhonn.png";
import FoodOrderImg from "../assets/images/proj-Food-order-app-img.png";
const Projects = () => {
  const projects = [
    {
      title: "Twitter-clone",
      description:
        "Twitter clone is an app I built with Next.js, Tailwind CSS, other available free APIs, and I used Firebase as my database management system. App was made to depict functionalities and my knowledge of frontend software development. Click to view demo.",
      image: TwitterImg,
      link: "https://twitter-clone-elnino10.vercel.app",
    },
    {
      title: "Loson stores e-commerce",
      description:
        "I built the backend APIs using NodeJs/ExpressJs and MongoDb as database, and used ReactJs for the frontend. The App displays different functionalities including CRUD operations. You can view the github repo by clicking on image.",
      image: LosonImg,
      link: "https://github.com/elnino10/loson-wears",
    },
    {
      title: "Rhonn Real Estate Website",
      description:
        "The website is more of a client-side project built with ReactJs library. I used MongoDb as database for data collation and storage. Click to visit website.",
      image: RhonnImg,
      link: "https://github.com/elnino10/rhonn-real-estate",
    },
    {
      title: "Food Ordering App",
      description:
        "Used ReactJs to implement the features of the app including routing and used firebase for authentication and data storage. Click on it to view the github repo.",
      image: FoodOrderImg,
      link: "https://github.com/elnino10/food-order-app-UI",
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
              <br></br> In these projects I applied my afore mentioned skills.
              Click on "Tab 1" below to view.
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
                <Tab.Pane eventKey="second">
                  Nothing Here Yet. Please check back later!
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Nothing Here Yet. Please check back later!
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
