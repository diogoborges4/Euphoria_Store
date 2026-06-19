import React, { useEffect } from "react";
import { useState } from "react";
import { createClient } from "pexels";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Winter.css";
import AutoPlay from "../../components/Slide/SlideProduct";

const Winter = () => {
  const [winterStyle, setWinterStyle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const client = createClient(
      "pJK182Tw7MoTdDvQD3dzdx9jx3Mxyzf9kuniyZ7hFhCUnqWbLL5jI4Xa",
    );

    client.collections
      .media({ id: "5vkowdr", per_page: 12 })
      .then((media) => {
        setWinterStyle(media);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="summer-container">
      <Navbar />

      <section className="winter-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="summer-title">Winter Vibes</h1>
            <p className="summer-subtitle">
              Embrace the chill with our exclusive winter collection
            </p>
          </div>
        </div>
      </section>

      <section className="summer-section">
        <div className="section-header">
          <h2 className="section-title-winter">Trending this Winter</h2>
          <p className="section-subtitle">
            Discover the hottest styles of the season
          </p>
        </div>

        <div className="summer-grid">
          {loading && (
            <div className="loading-wrapper">
              <div className="spinner"></div>
              <p className="loading-text">Loading products...</p>
            </div>
          )}

          {!loading && winterStyle.media && winterStyle.media.length > 0
            ? winterStyle.media.map((item) => (
                <Link
                  to={`/product/${item.id}`}
                  key={item.id}
                  className="product-link"
                >
                  <div className="product-card">
                    <div className="product-image-wrapper">
                      <img
                        src={item.src.portrait}
                        alt={item.alt}
                        className="product-image"
                        loading="lazy"
                      />
                      <div className="overlay"></div>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{item.alt}</h3>
                      <p className="product-category">Winter Collection</p>
                    </div>
                  </div>
                </Link>
              ))
            : !loading && (
                <div className="empty-state">
                  <p>No products available</p>
                </div>
              )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Winter;
