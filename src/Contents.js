import React from "react";
import { contentsData } from "./data";
import List from "./List";
import { Row, Col } from "react-bootstrap";
import "./Contents.css";

function Contents() {
  return (
    <Row className="contents">
      {contentsData.map((content, index) => (
        <List contentsObj={content} />
      ))}
    </Row>
  );
}

export default Contents;
