import React, { useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { scroller } from "react-scroll";
import Logo from "../assets/images/logo.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const connectRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    scroller.scrollTo("connect", {
      smooth: true,
      duration: 500,
      spy: true,
      exact: true,
    });
  };

  const onUpdateActiveLink = (val) => {
    setActiveLink(val);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#about-me"
              className={
                activeLink === "about-me" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about-me")}
            >
              About Me
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://github.com/elnino10"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/joe-egboka-703a21126/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin />
              </a>
              <a
                href="https://twitter.com/joeegboka"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </div>
            <button className="vvd" ref={connectRef} onClick={toggle}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
