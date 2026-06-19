import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideHome.css";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      type="button"
      aria-label="Próximo slide"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      type="button"
      aria-label="Slide anterior"
    />
  );
}

const SlideHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="slider-wrapper">
      <Slider {...settings}>
        <div className="hero-slide hero-slide--summer">
          <div className="hero-slide__content">
            <p className="hero-slide__eyebrow">T-shirt / Tops</p>
            <h1 className="hero-slide__title">Summer Value Pack</h1>
            <p className="hero-slide__subtitle">Cool, colorful & comfy</p>
            <Link to="/summer" className="hero-slide__button">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="hero-slide hero-slide--urban">
          <div className="hero-slide__content">
            <p className="hero-slide__eyebrow">Urban Shirts</p>
            <h1 className="hero-slide__title">
              Live in comfort — FLAT 60% OFF
            </h1>
            <p className="hero-slide__subtitle">
              Style that makes every day effortless
            </p>
            <Link to="/winter" className="hero-slide__button">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="hero-slide hero-slide--sweatshirt">
          <div className="hero-slide__content">
            <h1 className="hero-slide__title">
              Black Sweatshirt with premium fit
            </h1>
            <p className="hero-slide__subtitle">
              Designed for comfort, made to stand out
            </p>
            <Link to="/winter" className="hero-slide__button">
              Explore Now
            </Link>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default SlideHome;
