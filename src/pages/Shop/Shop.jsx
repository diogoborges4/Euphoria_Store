import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import { RightBlack, RightWhite } from "../../components/Icons/ArrowRight";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SlideHome from "../../components/Slide/SlideHome";

const Shop = () => {
  return (
    <div className="jose shop-section">
      <Navbar />
      <div>
        <SlideHome />
      </div>
      <div className="main-1">
        <div className="main-1-1">
          <div className="high-cozinnes">
            <h6>Low Price</h6>
            <h2>High Coziness</h2>
            <h3>UPTO 50% OFF</h3>
            <Link to={"/womanProducts"}>
              <h6>Explore Item</h6>
            </Link>
          </div>
        </div>
        <div className="main-1-2">
          <div className="high-cozinnes">
            <h6>Beyoung Presents</h6>
            <h2>Breezy Summer Style</h2>
            <h3>UPTO 50% OFF</h3>
            <Link to={"/summer"}>
              <h6>Explore Item</h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="main-2">
        <div className="main-2-1">
          <div></div>
          <h1>New Arrival</h1>
        </div>
        <div className="main-2-2">
          <div className="img-1">
            <Link to={"/winter"}>
              <h2>Knitted Joggers</h2>
            </Link>
          </div>
          <div className="img-2">
            <Link to={"/winter"}>
              <h2>Full Sleeve</h2>
            </Link>
          </div>
          <div className="img-3">
            <Link to={"/menProducts"}>
              <h2>Active T-Shirts</h2>
            </Link>
          </div>
          <div className="img-4">
            <Link to={"/womanProducts"}>
              <h2>Urban Shirts</h2>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="main-3-1">
          <div></div>
          <h1>Big Saving Zone</h1>
        </div>
        <div className="main-3">
          <div className="main-3-2-img1">
            <div className="high-cozinnes-2">
              <h2>Hawaiian Shirts</h2>
              <h6>Dress up in summer vibe</h6>
              <h3>UPTO 50% OFF</h3>
              <div>
                <RightWhite />
              </div>
              <Link to={"/summer"}>
                <button>SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className="main-3-2-img2">
            <div className="high-cozinnes-2-img">
              <h2>Printed T-Shirt</h2>
              <h6>New designs Every week</h6>
              <h3>UPTO 40% OFF</h3>
              <div>
                <RightWhite />
              </div>
              <Link to={"/womanProducts"}>
                <button>SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className="main-3-2-img3">
            <div className="high-cozinnes-2-img">
              <h2>Cargo Joggers</h2>
              <h6>More with style & confort</h6>
              <h3>UPTO 50% OFF</h3>
              <div>
                <RightWhite />
              </div>
              <Link to={"/womanProducts"}>
                <button>SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className="main-3-2-img4">
            <div className="high-cozinnes-2-img-1">
              <h2>Urban Shirts</h2>
              <h6>Live in confort</h6>
              <h3>FLAT 60% OFF</h3>
              <div>
                <RightBlack />
              </div>
              <button>
                <Link to={"/menProducts"}>SHOP NOW</Link>
              </button>
            </div>
          </div>
          <div className="main-3-2-img5">
            <div className="high-cozinnes-2-img-1">
              <h2>Oversized T-Shirts</h2>
              <h6>Street Style Icon</h6>
              <h3>FLAT 60% OFF</h3>
              <div>
                <RightBlack />
              </div>
              <Link to={"/summer"}>
                <button>
                  <a>SHOP NOW</a>
                </button>
              </Link>
            </div>
          </div>
          <div className="img-duplo">
            <div className="img-duplo-1">
              <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
              <h4>
                In our jorney to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Confortable & Affortable fashion 24/7
              </h4>
              <Link to={"/womanProducts"}>
                <button>SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className="ctgory-for-men">
            <div className="detalhe">
              <div></div>
              <h1>Categories For Men</h1>
            </div>

            <div className="ctgory-for-men-img">
              <div className="cfm-1">
                <div className="btn-btn">
                  <Link to={"/menProducts"}>
                    <h4>Shirts</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
              <div className="cfm-2">
                <div className="btn-btn">
                  <Link to={"/menProducts"}>
                    <h4>Printed T-Shirts</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
              <div className="cfm-3">
                <Link to={"/summer"}>
                  <div className="btn-btn">
                    <h4>Plain T-Shirts</h4>
                    <h6>Explore Now</h6>
                  </div>
                </Link>
              </div>
              <div className="cfm-4">
                <div className="btn-btn">
                  <Link to={"/menProducts"}>
                    <h4>Polo T-Shirts</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
              <div className="cfm-5">
                <div className="btn-btn">
                  <Link to={"/winter"}>
                    <h4>Hoodies & Sweetshirt</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
              <div className="cfm-6">
                <div className="btn-btn">
                  <Link to={"/winter"}>
                    <h4>Jeans</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
              <div className="cfm-7">
                <div className="btn-btn">
                  <Link to={"/winter"}>
                    <h4>Activewear</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
              <div className="cfm-8">
                <Link to={"/summer"}>
                  <div className="btn-btn">
                    <h4>Boxes</h4>
                    <h6>Explore Now</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="ctgory-for-woman">
            <div className="detalhe-w">
              <div></div>
              <h1>Categories For Women</h1>
            </div>
            <div className="ctgory-for-women-img">
              <div className="cfw-1">
                <div className="btn-btn">
                  <Link to={"/womanProducts"}>
                    <h4>Hoodies & Sweetshirt</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
              <div className="cfw-2">
                <div className="btn-btn">
                  <Link to={"/winter"}>
                    <h4>Coats & Parkas</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
              <div className="cfw-3">
                <Link to={"/summer"}>
                  <div className="btn-btn">
                    <h4>Tees & T-Shirt</h4>
                    <h6>Explore Now</h6>
                  </div>
                </Link>
              </div>
              <div className="cfw-4">
                <Link to={"/summer"}>
                  <div className="btn-btn">
                    <h4>Boxers</h4>
                    <h6>Explore Now</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="branchs">
            <h1>Top Brands Deal</h1>
            <h4>Up To 60% off on brands</h4>
            <div className="logos">
              <div className="logo1"></div>
              <div className="logo2"></div>
              <div className="logo3"></div>
              <div className="logo4"></div>
              <div className="logo5"></div>
            </div>
          </div>
          <div className="ctgory-for-woman-2">
            <div className="detalhe-w-2">
              <div></div>
              <h1>In the Limelight</h1>
            </div>
            <div className="ctgory-for-women-img-2">
              <div className="cfw-1-2">
                <div className="btn-btn">
                  <Link to={"/winter"}>
                    <h4>Black Sweatshirt with...</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
              <div className="cfw-2-2">
                <div className="btn-btn">
                  <Link to={"/womanProducts"}>
                    {" "}
                    <h4>Line Pattern Black</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
              <div className="cfw-3-2">
                <Link to={"/summer"}>
                  <div className="btn-btn">
                    <h4>Black Shorts</h4>
                    <h6>Explore Now</h6>
                  </div>
                </Link>
              </div>
              <div className="cfw-4-2">
                <div className="btn-btn">
                  <Link to={"/winter"}>
                    <h4>Levender Hoodie with...</h4>
                    <h6>Explore Now</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
