import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { scroller } from "react-scroll";
import "animate.css";
import headerImg from "../assets/images/headerImg.png";

const HomeBanner = () => {
  const [loopLetter, setLoopLetter] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");
  const [alpha, setAlpha] = useState(300 - Math.random() * 100);
  const rotateWords = ["A Web Developer", "Let's meet."];
  const interval = 1500;

  const tick = () => {
    let i = loopLetter % rotateWords.length;
    let fullText = rotateWords[i];
    let updatedText = deleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (deleting) {
      setAlpha((prevState) => prevState / 2);
    }

    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setAlpha(interval);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setLoopLetter(loopLetter + 1);
      setAlpha(300);
    }
  };

  useEffect(() => {
    let cursor = setInterval(() => {
      tick();
    }, alpha);
    return () => clearInterval(cursor);
  });

  const toggle = () => {
    scroller.scrollTo("connect", {
      smooth: true,
      duration: 500,
      spy: true,
      exact: true,
    });
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span>Here's my portfolio</span>
            <h2 className="animate__animated animate__bounce">
              {`Hi, I'm Joe.`} <span>{text}</span>
            </h2>
            <p>
              Joe Chidiebere Egboka a passionate and dedicated web developer with a 
              penchant for taking on new challenges. With a background in Electronics 
              and Computer Engineering, Joe brings over 2 years of web development 
              experience to the table. Currently honing his skills as a software 
              engineering student at ALX-SE Africa specializing on backend web development, 
              he's committed to staying at the forefront of industry trends. A strong 
              communicator and problem-solver, Joe thrives in collaborative environments, 
              leveraging his team spirit to ensure project success. Beyond the digital realm, 
              Joe enjoys football, reading, and billiards, finding balance and inspiration 
              outside of coding. With a passion for continuous learning and a drive to excel, 
              Joe is ready to tackle any challenge that comes his way.
            </p>
            <button onClick={toggle}>
              Let's meet <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeBanner;
