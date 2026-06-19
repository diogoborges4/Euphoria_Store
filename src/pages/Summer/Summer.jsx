import React, { useEffect } from "react";
import { useState } from "react";
import { createClient } from "pexels";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import AutoPlay from "../../components/Slide/SlideProduct";
import "./Summer.css";

const Summer = () => {
  const [summerStyle, setSummerStyle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const client = createClient(
      "pJK182Tw7MoTdDvQD3dzdx9jx3Mxyzf9kuniyZ7hFhCUnqWbLL5jI4Xa",
    );

    client.collections
      .media({ id: "5iibgx8", per_page: 12 })
      .then((media) => {
        setSummerStyle(media);
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

      <section className="summer-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="summer-title">Summer Vibes</h1>
            <p className="summer-subtitle">
              Feel the heat with our exclusive summer collection
            </p>
          </div>
        </div>
      </section>

      <section className="summer-section">
        <div className="section-header">
          <h2 className="section-title">Trending this Summer</h2>
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

          {!loading && summerStyle.media && summerStyle.media.length > 0
            ? summerStyle.media.map((item) => (
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
                      <p className="product-category">Summer Collection</p>
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

export default Summer;
