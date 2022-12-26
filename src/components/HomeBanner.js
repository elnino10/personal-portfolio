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
              Joe Chidiebere is a passionate web developer. He is ambitious and dedicated on and off
              the field. A good communicator, solution oriented and 
              willing to take up new challenge. He enjoys collaborating with creative people and picking
              up new skills. His team spirit has led to getting projects completed on schedule, judging
              by his previous job experience outside of the Web Development space. In his free time, he 
              enjoys football games, reading and billiard.
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
