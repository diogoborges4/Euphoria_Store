import React, { Component } from "react";
import Slider from "react-slick";
import "./SlideProduct.css";
import { Link } from "react-router-dom";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
    };
    return (
      <div className="slider-2">
        <Slider {...settings}>
          <Link to={"/product/1661471"}>
            <div className="slider1">
              <h3></h3>
            </div>
          </Link>
          <Link to={"/product/16999150"}>
            <div className="slider2">
              <h3></h3>
            </div>
          </Link>
          <Link to={"/product/16969437"}>
            <div className="slider3">
              <h3></h3>
            </div>
          </Link>
          <Link to={"/product/2010877"}>
            <div className="slider4">
              <h3></h3>
            </div>
          </Link>
          <Link to={"/product/3078404"}>
            <div className="slider5">
              <h3></h3>
            </div>
          </Link>
          <Link to={"/product/1805411"}>
            <div className="slider6">
              <h3></h3>
            </div>
          </Link>
        </Slider>
      </div>
    );
  }
}
