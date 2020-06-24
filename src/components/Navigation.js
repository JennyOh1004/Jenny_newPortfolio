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
          <div className="nav">
            <Link to="/about">About</Link>
          </div>
          <div className="nav">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="nav">
            <Link to="/contact">Contact</Link>
          </div>
          {/* <div className="nav">
            <a href={Resume} target="_blank">
              Resume
            </a>
          </div> */}
        </Nav>
      </Header>
    );
  }
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  position: fixed;

  .nav {
    padding-right: 30px;
    font-family: var(--body-fonts);
    letter-spacing: 1px;
    text-decoration: none;
    color: #fff;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    justify-content: space-between;
    padding: 20px;
    z-index: 1;
  }
`;

const Logo = styled.div`
  margin-right: auto;
  margin: 10px;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  padding: 20px;
  text-decoration: none;
  color: #fff;
`;

export default Navigation;
