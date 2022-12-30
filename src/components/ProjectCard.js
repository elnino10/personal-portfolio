import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = (props) => {
  const { title, description, image, link } = props;

  return (
    <Col sm={6} md={4}>
      <a href={link} alt={`${link} link`} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={image} alt="proj-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
