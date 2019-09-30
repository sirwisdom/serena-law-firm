import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Attorneys from "./components/attorneys/Attorneys";
import Nav from "./components/header/Nav";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Articles from "./components/newsandarticles/articles/Articles";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/attorneys" exact component={Attorneys} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/article" component={Articles} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
