import React, { Component } from "react";
import styled from "styled-components";
// import "../src/App.css";

class About extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Container>
            <section>
              <div className="contact">
                <h3 className="contact-title">
                  <div className="box"></div>LET'S CONNECT!
                </h3>

                <p className="contact-p">
                  I am always open to collaborate or recieve feedback about my
                  website and or work. I will get back to you as soon as I can!
                </p>
                <p className="contact-info">ohseulki1004@gmail.com</p>
                <div className="icons">
                  <a href="https://www.linkedin.com/in/seulkioh1004/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                  <a href="https://github.com/JennyOh1004">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a href="mailto:ohseulki1004@gmail.com">
                    <ion-icon name="mail"></ion-icon>
                  </a>
                </div>
              </div>
            </section>
          </Container>
          <Container>
            <form>
              <label for="fname">First Name *</label>
              <br />
              <input type="text" id="fname" name="fname" required></input>
              <br />
              <label for="lname">Last Name *</label>
              <br />
              <input type="text" id="lname" name="lname" required></input>
              <br />
              <label for="email">Email *</label>
              <br />
              <input type="text" id="email" name="email" required></input>
              <br />
              <label for="lname">Subject *</label>
              <br />
              <input type="text" id="subject" name="subject" required></input>
              <br />
              <label for="lname">Message *</label>
              <br />
              <textarea
                type="text"
                id="message"
                name="message"
                required
              ></textarea>
              <br />
              <div>
                <button type="submit" className="submit">
                  Submit
                </button>
              </div>
            </form>
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
  height: 90vh;
  display: flex;
  flex-flow: column wrap;
  border: solid 1px red;
`;
const Container = styled.div`
  display: flex;
  width: 50%;
  border: solid 1px pink;

  .box {
    width: 10px;
    height: 50px;
    background: #fcb69f;
    position: absolute;
    margin-top: 8px;
    margin-left: -20px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .profilePic {
    width: 50%;
    height: 45%;
    margin: auto;
    align-items: center;
    border-radius: 5px;
  }

  .contact-title {
    position: relative;
    left: 5%;
    width: 60%;
    margin-top: 5%;
    padding: 60px;
    font-size: 3rem;
    font-family: var(--body-fonts);
    color: #000;
    letter-spacing: 2px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .contact-p {
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

  .contact-info {
    position: relative;
    left: 5%;
    width: 90%;
    margin: 10px;
    padding: 20px;
    letter-spacing: 1.5px;
    color: #000;
    font-family: var(--body-fonts);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-top: 70px;
  }

  .icons {
    position: absolute;
    margin: 20px;
    /* top: 70%; */
    left: 2%;
    z-index: 3;
    padding: 5px;
  }

  .icon__link a {
    z-index: 2;
    color: #000;
  }

  ion-icon {
    font-size: 1.5vw;
    padding: 1vw;
    color: #000;
  }

  ion-icon:hover {
    color: #fcb69f;
    transition: linear all 0.2s;
  }

  form {
    width: 60%;
    margin: 100px;
    padding: 20px;
  }
  input {
    padding: 10px;
    margin-bottom: 20px;
    margin-top: 10px;
    width: 120%;
    background: #f8f9fa;
    border: solid 1px #dee2e6;
    border-radius: 3px;
  }
  textarea {
    width: 120%;
    height: 20%;
    margin-bottom: 20px;
    margin-top: 10px;
    background: #f8f9fa;
    border: solid 1px #dee2e6;
    border-radius: 3px;
  }

  .submit {
    width: 30%;
    height: 8vh;
    color: #fff;
    background: #000;
    outline: none;
    border: none;
    letter-spacing: 2.5px;
    font-size: 1vw;
    border-radius: 3px;
  }
`;

export default About;
