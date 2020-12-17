import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { Col, Row } from "antd";
import { AllSkills } from "./Files/Skills";

const DivWrapper = styled.div`
  margin-top: 5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: black;
  font-family: Satisfy;
  font-size: 15vh;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: underline;
  &:hover {
    color: #ffd700;
  }
`;
const SkillH1 = styled.h1`
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  -webkit-text-stroke-width: 1 px;
  -webkit-text-stroke-color: black;
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
const IMG = styled.img`
  height: 100px;
  width: auto;
`;
const ICON = styled.i`
  color: white;
  font-size: 100px;
`;
const MainDiv = styled.div`
  background-color: #ececec;
  height: "100vh";
`;
const Skills = () => {
  return (
    <MainDiv>
      <DivWrapper>
        <Parallax
          className="custom-class"
          x={[-150, 150]}
          y={[-40, 40]}
          tagOuter="figure"
        >
          <H1>Skills</H1>
        </Parallax>
      </DivWrapper>
      <Row gutter={[15, 0]}>
        {AllSkills.map((skill) => {
          return (
            <COL key={skill.name} span={8} xs={24} sm={12} md={8} lg={8} xl={8}>
              <div
                style={{
                  backgroundColor: "#010101",
                  width: "200px",
                  padding: 10,
                  marginBottom: "5rem",
                  boxShadow:
                    " 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
                  cursor: "pointer"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {skill.img ? (
                    <IMG src={skill.img} alt={skill.name} />
                  ) : (
                    <ICON
                      style={{
                        color:
                          skill.name === "ReactJS" &&
                          skill.name === "Context API"
                            ? "#61DBFB"
                            : skill.name === "HTML5"
                            ? "#f06529"
                            : "#264de4"
                      }}
                      className={skill.icon}
                    />
                  )}
                </div>
                <SkillH1>{skill.name}</SkillH1>
              </div>
            </COL>
          );
        })}
      </Row>
    </MainDiv>
  );
};
export default Skills;
