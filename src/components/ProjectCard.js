import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = (props) => {
  const { title, description, image } = props;

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} alt="proj-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
