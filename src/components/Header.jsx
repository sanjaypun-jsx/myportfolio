import React from "react";
import { HeaderList } from "./Files/HeaderList";
import styled from "styled-components";
import img from "./Assets/sanji.jpg";

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;
const IMG = styled.img`
  height: 100px;
  width: auto;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    filter: grascale(0);
  }
`;
const Li = styled.li`
  list-style: none;
  color: white;
  display: inline;
`;
const Icon = styled.i`
  padding: 10px;
  font-size: 2rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ffd700;
  }
`;
const Header = () => {
  return (
    <DivWrapper>
      <div>
        <IMG src={img} alt="profile" />
      </div>
      <div>
        {HeaderList.map((item) => {
          return (
            <Li key={item.id}>
              <Icon className={item.icon} />
            </Li>
          );
        })}
      </div>
    </DivWrapper>
  );
};
export default Header;
