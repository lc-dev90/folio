import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Main className="container">
      <h4>Hi, I'm Luiz Cláudio Danella</h4>
      <h2>Frontend Developer</h2>
      <p>
        I'm a self taught Frontend Developer from São Paulo, Brazil. With a
        focus on the MERN stack, but still exploring other technologies and
        frameworks that catch my interest! if you're looking for a developer to
        add to your team, I'd love to hear from you!
      </p>
    </Main>
  );
};

export default Home;

const Main = styled.main``;
