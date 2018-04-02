import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import IconGrid from "./components/IconGrid";
import ImageShowcase from "./components/ImageShowcase";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Masthead />
        <IconGrid />
        <ImageShowcase />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default App;
