import React from "react";
import styled from "styled-components";

const Skill = ({ name, link }) => {
  return (
    <Card className="skill-card">
      <div className="skill">
        <img src={link} alt={name} />
      </div>
      <p>{name}</p>
    </Card>
  );
};

export default Skill;

const Card = styled.div`
  font-size: 18px;
  font-weight: 600;
  border-radius: 3px;
  background-color: #fff;
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border: 1px solid #f5f7f8;
  &:hover {
    border: 1px solid rgba(2, 0, 97, 0.24);
    box-shadow: 0 7px 50px -1px rgb(0 77 60 / 10%);
    transform: translateY(-2px);
  }
  .skill {
    width: 40px;
    margin: 20px 18px;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.9px;
    margin-bottom: 20px;
  }
`;
