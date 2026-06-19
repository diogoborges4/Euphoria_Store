import React, { useEffect } from "react";
import { useState } from "react";
import { createClient } from "pexels";
import Navbar from "../../components/Navbar/Navbar";
import "./Men.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Heart13 } from "../../components/Icons/Heart";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart/slice";

const Men = () => {
  const [menStyle, setMenStyle] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const client = createClient(
      "pJK182Tw7MoTdDvQD3dzdx9jx3Mxyzf9kuniyZ7hFhCUnqWbLL5jI4Xa",
    );

    client.collections
      .media({ id: "vl3t7oo", per_page: 12 })
      .then((media) => {
        setMenStyle(media);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="men-container">
      <Navbar />
      <section className="men-section">
        <div className="men-header">
          <h1 className="men-title">Men Style</h1>
          <p className="men-subtitle">
            Discover the latest men's fashion collection
          </p>
        </div>

        <div className="men-grid">
          {loading && (
            <div className="loading-wrapper">
              <div className="spinner"></div>
              <p className="loading-text">Loading products...</p>
            </div>
          )}

          {!loading && menStyle.media && menStyle.media.length > 0
            ? menStyle.media.map((men) => (
                <Link
                  to={`/product/${men.id}`}
                  key={men.id}
                  className="product-link"
                >
                  <div className="product-card">
                    <div className="product-image-wrapper">
                      <img
                        src={men.src.portrait}
                        alt={men.alt}
                        className="product-image"
                        loading="lazy"
                      />
                      <div className="overlay"></div>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{men.alt}</h3>
                      <p className="product-category">Men's Collection</p>
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

export default Men;
