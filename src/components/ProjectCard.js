import React, { Component } from "react";
import styled from "styled-components";

class ProjectCard extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div>
        <Container>
          <section>
            <div className="project">
              <h3 className="project-title">
                <div className="box"></div>PROJECTS.
              </h3>
            </div>
          </section>
          <div className="project-image">
            {/* <img src={metif} alt="Metif Main Image" /> */}
          </div>
        </Container>
        <Container>
          <div className="project-desc">
            <h3>{title}</h3>
            <br />
            <p>{description}</p>
            <button>More Details</button>
            {/* <p>LOCATION South Korea</p>
              <p>PROJECT</p>
              <p>ROLE</p> */}
          </div>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  background: blue;
`;

export default ProjectCard;
