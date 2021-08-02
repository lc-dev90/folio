import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Main className="container">
      <p>
        I'm a self taught Frontend Developer from São Paulo, Brazil. With a
        focus on the MERN stack, but still exploring other technologies and
        frameworks that catch my interest! If you're looking for a developer to
        add to your team, I'd love to hear from you! If you want to contact me,
        you can send me a <a href="malito:lc.danella.dev@gmail.com">mail.</a>
      </p>
    </Main>
  );
};

export default About;

const Main = styled.main``;
