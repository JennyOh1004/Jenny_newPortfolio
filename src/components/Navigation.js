import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Resume from "../assets/JennyOh_Resume.pdf";
// import { Document, Page } from "react-pdf";

class Navigation extends Component {
  render() {
    return (
      <Header>
        <Logo className="logo">
          <Link to="/">Jenny Oh.</Link>
        </Logo>

        <Nav>
          <div className="main-nav">
            <Link to="/about" className="nav">
              About
            </Link>
          </div>
          <div className="main-nav">
            <Link to="/projects" className="nav">
              Projects
            </Link>
          </div>
          <div className="main-nav">
            <Link to="/contact" className="nav">
              Contact
            </Link>
          </div>
          <div className="main-nav">
            <Link to="/" className="nav">
              Resume
            </Link>
            {/* <a href={Resume} target="_blank">
              Resume
            </a> */}
          </div>
        </Nav>
      </Header>
    );
  }
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  z-index: 1;
  position: fixed;

  .main-nav {
    display: flex;
    margin-top: 50px;
    font-family: var(--body-fonts);
    /* writing-mode: vertical-rl;
    text-orientation: mixed; */
    justify-content: space-between;
    padding-bottom: 20px;
    padding-right: 25px;
    z-index: 3;
    /* background: #fff; */
    /* width: 10%; */
    margin-left: auto;
  }

  .nav {
    text-decoration: none;
    color: #000;
    letter-spacing: 2px;
  }

  .nav:hover {
    color: #fcb69f;
    transition: linear all 0.3s;
  }

  /* .nav:active {
    border-left: solid 2px #fcb69f;
    margin-right: 5px;
  } */
`;

const Logo = styled.div`
  margin-right: auto;
  margin: 10px;
  font-size: 1.5rem;
  position: fixed;
`;

const Nav = styled.nav`
  width: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
`;

export default Navigation;
