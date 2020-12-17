import { Button, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  margin-top: 5rem;
`;
const H1 = styled.h1`
  color: white;
  text-decoration: underline;
  font-size: 11vh;
  display: flex;
  justify-content: Center;
  align-items: center;
  padding: 3rem;
  cursor: pointer;
  font-family: Satisfy;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #ffd700;
  }
`;

const StyledButton = styled(Button)`
  color: white;
  height: 5rem;
  background-color: #010101;
  border: 1px solid white;
  &:hover {
    color: #010101;
    border: 1px solid white;
  }
`;

const Landing = () => {
  const cv =
    "https://drive.google.com/file/d/1fy936g7LVyvhGOr3OyxQkk5M3vJLTOzJ/view?usp=sharing";
  return (
    <DivWrapper>
      <Row>
        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
          <H1>Sanjay in 10 seconds.</H1>
        </Col>
        <Col
          style={{ padding: "3rem" }}
          span={12}
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
        >
          <h1
            style={{
              color: "white",
              fontSize: "4vh",
              display: "flex",
              justifyContent: "left",
              alignItems: "center"
            }}
          >
            My name is Sanjay Pun and I'm a Web Developer who specializes in
            ReactJS. I am also a traveller, a cook, an entrepreneur in making, a
            good listner, and not a good dancer. Monomaniac, introvert, good
            learner, and love finding a different point of view. Baglung native,
            I now live in Lalitpur, Nepal.
          </h1>
          <Row>
            <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
              <StyledButton style={{ marginTop: "1rem" }}>
                <a
                  style={{ fontSize: "3rem" }}
                  href="mailto:iamsanjaypun@gmail.com"
                >
                  Hire Me!
                </a>
              </StyledButton>
            </Col>
            <Col>
              <Button
                style={{ height: "5rem", marginTop: "1rem" }}
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                onClick={() => window.open(cv, "_blank")}
              >
                <p style={{ fontSize: "3rem" }}>See CV</p>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </DivWrapper>
  );
};
export default Landing;
