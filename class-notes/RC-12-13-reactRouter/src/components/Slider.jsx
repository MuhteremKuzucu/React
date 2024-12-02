import React from 'react'

import Carousel from "react-bootstrap/Carousel";
import about from "../img/about.jpeg"
import devops from "../img/devops.jpeg"
import isa from "../img/isa.jpeg"
import "./Slider.css"


const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={about} alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img src={devops} alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img src={isa} alt="" />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider