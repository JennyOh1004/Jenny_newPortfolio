import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "../src/Home";
import About from "../src/About";
import Projects from "../src/Projects";
import Contact from "../src/Contact";
import Navigation from "../src/components/Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
