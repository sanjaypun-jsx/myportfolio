import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import "./styles.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Works from "./components/Works";
import Snow from "react-snow-effect";
import { ParallaxProvider } from "react-scroll-parallax";
import Skills from "./components/Skills";
import About from "./components/About";

export default function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Snow />
        <Header />
        <Landing />
        <Works />
        <Skills />
        <About />
      </ParallaxProvider>
    </div>
  );
}
