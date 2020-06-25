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
          <Container>
            <div className="project">
              <h3 className="project-title">
                <div className="box"></div>PROJECTS
              </h3>
            </div>
            {projectData.map((project, index) => {
              console.log(project);
              return (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  mainImg={project.mainImg}
                  key={index}
                ></ProjectCard>
              );
            })}
            {/* <ProjectCard key={9} title={project.title}></ProjectCard> */}
          </Container>
          {/* <Container>
            <div className="project-image">
              <ProjectCard mainImg={project.mainImg}></ProjectCard>
            </div>
          </Container> */}
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  height: 150vh;
  display: flex;
  justify-content: row;
  color: #fff;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5%;

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
`;

export default About;
