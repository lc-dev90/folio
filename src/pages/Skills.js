import React from "react";
import Skill from "../components/Skill";
import styled from "styled-components";

const skills = [
  {
    name: "HTML",
    link: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
  },
  {
    name: "CSS",
    link: "https://www.pngkey.com/png/full/347-3470911_css3-html-css-js-logo-white.png",
  },
  {
    name: "SCSS",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png",
  },
  {
    name: "Material UI",
    link: "https://material-ui.com/static/logo.png",
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg",
  },
  {
    name: "Bootstrap",
    link: "https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png",
  },
  {
    name: "Styled Components",
    link: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
  },
  {
    name: "Javascript",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "React",
    link: "https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png",
  },
  {
    name: "React Router",
    link: "https://res.cloudinary.com/practicaldev/image/fetch/s--bvQtwOo5--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://reacttraining.com/images/blog/reach-react-router-future.png",
  },
  {
    name: "Redux",
    link: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },

  {
    name: "Github",
    link: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
];

const Skills = () => {
  return (
    <div className="container">
      <h2>Take a look at my Skills.</h2>
      <p>
        These are my skills and this contains all the technologies and
        programming languages that I have learnt until now. I am constantly
        learning, therefore I may update this section more often.
      </p>
      <Grid>
        {skills.map((skill) => (
          <Skill key={skill.name + 1} name={skill.name} link={skill.link} />
        ))}
      </Grid>
    </div>
  );
};

export default Skills;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
`;
