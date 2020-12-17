import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { HelloWorld } from "./Files/HelloWorldList";

const H1 = styled.h1`
  color: white;
  font-family: Satisfy;
  font-size: 15vh;
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #ffd700;
  }
`;
const DivWrapper = styled.div`
  margin-top: 5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const COL = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  line-height: 1;
`;
const WorkH1 = styled.h1`
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-out;
  -webkit-text-stroke-width: 1 px;
  -webkit-text-stroke-color: black;
  &:hover {
    transform: scale(1.2);
  }
`;
const Works = () => {
  return (
    <React.Fragment>
      <DivWrapper>
        <Row>
          <Col span={24}>
            <Parallax
              x={[-80, 80]}
              className="custom-class"
              y={[-40, 40]}
              tagOuter="figure"
            >
              <H1>Hello World!</H1>
            </Parallax>
          </Col>
        </Row>
      </DivWrapper>
      <Row style={{ marginBottom: "5rem" }}>
        {HelloWorld.map((work) => {
          return (
            <COL
              span={12}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              key={work.name}
            >
              <WorkH1>{work.name}</WorkH1>
              <p style={{ color: "gray" }}>{work.subtitle}</p>
            </COL>
          );
        })}
      </Row>
    </React.Fragment>
  );
};
export default Works;
