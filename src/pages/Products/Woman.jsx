import React, { useEffect } from "react";
import { useState } from "react";
import { createClient } from "pexels";
import Navbar from "../../components/Navbar/Navbar";
import "./Woman.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Woman = () => {
  const [womenStyle, setWomenStyle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const client = createClient(
      "pJK182Tw7MoTdDvQD3dzdx9jx3Mxyzf9kuniyZ7hFhCUnqWbLL5jI4Xa",
    );

    client.collections
      .media({ id: "wwznldv", per_page: 12 })
      .then((media) => {
        setWomenStyle(media);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="woman-container">
      <Navbar />
      <section className="woman-section">
        <div className="woman-header">
          <h1 className="woman-title">Woman Style</h1>
          <p className="woman-subtitle">
            Discover the latest women's fashion collection
          </p>
        </div>

        <div className="woman-grid">
          {loading && (
            <div className="loading-wrapper">
              <div className="spinner"></div>
              <p className="loading-text">Loading products...</p>
            </div>
          )}

          {!loading && womenStyle.media && womenStyle.media.length > 0
            ? womenStyle.media.map((item) => (
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
                      <p className="product-category">Women's Collection</p>
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

export default Woman;
