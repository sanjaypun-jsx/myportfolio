import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  margin-top: 5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: white;
  font-family: Satisfy;
  font-size: 12vh;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: underline;
  &:hover {
    color: #ffd700;
  }
`;
const About = () => {
  return (
    <div>
      <DivWrapper>
        <Row>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <H1>Contact Me</H1>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <p style={{ color: "white", fontSize: "4vh" }}>
              iamsanjypun@gmail.com
            </p>
          </Col>
        </Row>
      </DivWrapper>
    </div>
  );
};
export default About;
