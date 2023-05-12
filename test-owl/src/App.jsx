import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

function App() {
  return (
    <>
      <OwlCarousel className="owl-theme" item="1" autoPlay nav dots loop>
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">4</div>
        <div className="item">5</div>
      </OwlCarousel>
    </>
  );
}

export default App;
