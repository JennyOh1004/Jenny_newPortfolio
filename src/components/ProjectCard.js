import React, { Component } from "react";
import styled from "styled-components";

class ProjectCard extends Component {
  render() {
    const { title, description, mainImg } = this.props;
    return (
      <div>
        <Container>
          <div className="project-image">{mainImg}</div>
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
    top: 30%;
    right: 20px;
    font-family: var(--body-fonts);
    padding: 4%;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    /* background: #000; */
    color: red;
  }

  .project-desc h3 {
    color: red;
    z-index: 2;
  }
`;

// const ProjectCard = styled.div`
//   color: #fff;

// .project-image img {
//   /* position: absolute; */
//   /* top: 30%;
//   right: 45%;
//   z-index: 0;  */
//   width: 120%;
//   margin-left: auto;
//   margin-top: 20%;
// }

//   .project-desc {
//     position: absolute;
//     width: 35%;
//     height: 40%;
//     margin: 150px;
//     top: 35%;
//     right: 20px;
//     font-family: var(--body-fonts);
//     padding: 4%;
//     text-align: center;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//     background: #000;
//     color: #fff;
//   }

//   .project-desc h3 {
//     font-size: 30px;
//     letter-spacing: 2px;
//   }

//   .project-desc p {
//     font-size: 20px;
//   }

//   .project-desc button {
//     width: 30%;
//     height: 30%;
//     color: #000;
//     background: #fff;
//     outline: none;
//     border: none;
//     letter-spacing: 2.5px;
//     font-size: 1vw;
//     margin: 7%;
//     opacity: 0.9;
//     padding: 1%;
//   }
// `;

export default ProjectCard;
