import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// compnents
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <Link to="/">
          <div className="nav__logo">
            <img src={Logo} alt="Logo" />
            {/* <h2>Luiz Claudio</h2> */}
          </div>
        </Link>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/skills">
            <li>Skills</li>
          </Link>
        </ul>
        <div className="nav__resume">
          <a
            href="https://drive.google.com/file/d/1rPYHDj4LGWDSPmFWhKt8ErrYZLW_qFbx/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  padding: 1rem 0;
  .container {
    display: flex;
    justify-content: space-between;
    .nav__resume {
      display: flex;
      align-items: center;
      a {
        border: 1px solid black;
        padding: 12px 24px;
        border-radius: 50px;
        font-size: 14px;
      }
    }
    a {
      display: flex;
      align-items: center;
      .nav__logo {
        width: 70px;
        h2 {
          font-size: 30px;
        }
      }
    }
    ul {
      display: flex;
      align-items: center;
      a {
        padding: 1rem;
        border-radius: 3px;
        &:hover {
          background: #dc493a;
          color: white;
        }
      }
    }
  }
`;
