import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="footer">
        <Row className="align-items-center">
          <p>Copyright 2022. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
