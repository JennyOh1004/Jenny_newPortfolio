import React, { Component } from "react";
import styled from "styled-components";
// import "../src/App.css";
// import metif from "../src/assets/Metif";
import ProjectCard from "../src/components/ProjectCard";
import { projectData } from "../src/constant/project";

class About extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          {projectData.map((project, index) => {
            console.log(project);
            return (
              <ProjectCard key={index} title={project.title}></ProjectCard>
            );
          })}
          <ProjectCard key={9} title={"soobin"}></ProjectCard>
          <Container>
            <div className="project-image">
              {/* <img src={metif} alt="Metif Main Image" /> */}
            </div>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 10vh;
  width: 100%;
`;

const Logo = styled.div`
  margin-right: auto;
  margin: 10px;
  font-size: 1.5rem;
`;

const Nav = styled.div`
  margin-left: auto;
  margin-top: 25px;
  padding-right: 20px;
`;

const Wrapper = styled.div`
  height: 150vh;
  display: flex;
  justify-content: row;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  /* border: solid 1px pink; */

  .box {
    width: 10px;
    height: 50px;
    background: #fcb69f;
    position: absolute;
    margin-top: 8px;
    margin-left: -20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .project-title {
    position: absolute;
    left: 4%;
    width: 50%;
    margin-top: 0%;
    padding: 60px;
    font-size: 3rem;
    font-family: var(--body-fonts);
    color: #000;
    letter-spacing: 2px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .project-p {
    position: relative;
    left: 5%;
    width: 90%;
    margin: 10px;
    padding: 20px;
    letter-spacing: 1.5px;
    color: #000;
    font-family: var(--body-fonts);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .project-image img {
    /* position: absolute; */
    /* top: 30%;
    right: 45%;
    z-index: 0;  */
    width: 120%;
    margin-left: auto;
    margin-top: 20%;
  }

  .project-desc {
    position: absolute;
    width: 35%;
    height: 40%;
    margin: 150px;
    top: 35%;
    right: 20px;
    font-family: var(--body-fonts);
    padding: 4%;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: #000;
    color: #fff;
  }

  .project-desc h3 {
    font-size: 30px;
    letter-spacing: 2px;
  }

  .project-desc p {
    font-size: 20px;
  }

  .project-desc button {
    width: 30%;
    height: 30%;
    color: #000;
    background: #fff;
    outline: none;
    border: none;
    letter-spacing: 2.5px;
    font-size: 1vw;
    margin: 7%;
    opacity: 0.9;
    padding: 1%;
  }
`;

export default About;
