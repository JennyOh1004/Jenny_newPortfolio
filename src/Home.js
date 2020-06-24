import React, { Component } from "react";
import styled from "styled-components";
import Jenny from "../src/assets/J.png";
// import mainvideo from "../src/assets/peach.mp4";
// import "../src/App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Container>
            <div className="hero-text">
              <h2>hello, i'm jenny. </h2>
              <p>
                I'm a Front End Web Developer. I have a passion for creating
                beautiful and delightful experiences.
              </p>
            </div>
          </Container>

          <Container>
            <img src={Jenny} alt="Main Image" className="mainImage" />
            {/* <video
              autoPlay
              muted
              loop
              src={mainvideo}
              type="video/mp4"
              className="mainVideo"
            ></video> */}
            {/* <div className="hero"></div> */}
          </Container>
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: row;
`;

const Container = styled.div`
  display: flex;
  width: 50%;
  position: relative;

  .hero-text h2 {
    position: absolute;
    top: 40%;
    width: 100%;
    align-items: center;
    text-align: center;
    font-size: 4vw;
    color: #000;
    z-index: 2;
    letter-spacing: 2px;
    font-weight: 10;
    font-family: var(--logo-fonts);
  }

  .hero-text p {
    position: absolute;
    top: 50%;
    padding: 30px;
    align-items: center;
    text-align: center;
    font-size: 1vw;
    color: #000;
    z-index: 2;
    letter-spacing: 2px;
    font-weight: 10;
    font-family: var(--body-fonts);
  }

  .mainImage {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit: cover;
    mix-blend-mode: lighten;
    animation: reveal 1s ease forwards;
    opacity: 0;
  }

  .mainVideo {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    animation: reveal 1s ease 0.5s forwards;
    opacity: 0;
  }

  @keyframes reveal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Home;
