import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Element } from "react-scroll";

import photo from "../assets/images/monPic.png";

const initialFormDetails = {
  first_name: "",
  last_name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const REACT_APP_SERVER_URL = "https://joe-chidiebere-portfolio-api.onrender.com"

  const onUpdateForm = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
    setStatus({});
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setButtonText("Sending Message...");

    const sendMessage = () => {
      axios
        .post(`${REACT_APP_SERVER_URL}/contact`, {
          ...formDetails,
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.message) {
            setStatus({ success: false, message: res.data.message });
            setButtonText("Send");
            return;
          }

          setButtonText("Send");
          setStatus({ success: true, message: res.data.status });
        })
        .catch((err) => {
          console.log(err);
          setButtonText("Send");
          setStatus({
            success: false,
            message: "Something Went Wrong! please try again later",
          });
        });
    };
    sendMessage();
    setFormDetails(initialFormDetails);
  };

  return (
    <section className="contact" id="connect">
      <Element name="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={photo} alt="contact" />
            </Col>
            <Col md={6}>
              <h2>Reach Me</h2>
              <form onSubmit={formSubmitHandler}>
                <Row>
                  <Row>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.first_name}
                        placeholder="First Name"
                        onChange={(e) =>
                          onUpdateForm("first_name", e.target.value)
                        }
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.last_name}
                        placeholder="Last Name"
                        onChange={(e) =>
                          onUpdateForm("last_name", e.target.value)
                        }
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onUpdateForm("email", e.target.value)}
                      />
                    </Col>
                    <Col>
                      <textarea
                        row="6"
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) =>
                          onUpdateForm("message", e.target.value)
                        }
                      />
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                      {status.message && (
                        <p
                          className={
                            status.success === true ? "success" : "danger"
                          }
                        >
                          {status.message}
                        </p>
                      )}
                    </Col>
                  </Row>
                </Row>
              </form>
              <Row>
                <div style={{ marginTop: "50px" }}>
                  <Col lg={12}>
                    <h3>On Socials</h3>
                    <div className="social-icon">
                      <div style={{ marginBottom: "5px" }}>
                        <a
                          href="https://github.com/elnino10"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiOutlineGithub />
                        </a>
                        <span>github</span>
                      </div>
                      <div style={{ marginBottom: "5px" }}>
                        <a
                          href="https://www.linkedin.com/in/joe-egboka-703a21126/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiOutlineLinkedin />
                        </a>
                        <span>linkedin</span>
                      </div>
                      <div>
                        <a
                          href="https://twitter.com/joeegboka"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiOutlineTwitter />
                        </a>
                        <span>twitter</span>
                      </div>
                    </div>
                  </Col>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Element>
    </section>
  );
};

export default Contact;
