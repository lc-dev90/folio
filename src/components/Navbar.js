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
            href="https://www.download.com/curriculum"
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
        border: 2px solid black;
        padding: 10px;
        border-radius: 50px;
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
        &:hover {
          background: #dc493a;
          color: white;
        }
      }
    }
  }
`;
