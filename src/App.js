import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Attorneys from "./components/attorneys/Attorneys";
import Nav from "./components/header/Nav";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/attorneys" exact component={Attorneys} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
