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
  const [alpha, setAlpha] = useState(400 - Math.random() * 100);
  const rotateWords = ["A Web Developer", "Committed", "And", "Motivated"];
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
      setAlpha(400);
    }
  };

  useEffect(() => {
    let cursor = setInterval(() => {
      tick();
    }, alpha);
    return () => clearInterval(cursor);
  }, [text]);

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
              {`Hi, I'm Chidiebere.`} <span>{text}</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
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
