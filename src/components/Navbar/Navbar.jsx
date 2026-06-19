import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Icons/Search";
import { Heart13 } from "../Icons/Heart";
import { User1 } from "../Icons/User";
import { Logo } from "../Logo/Logo";
import { ShoppingCart } from "../Icons/ShoppingCard";
import { useSelector } from "react-redux";
import { selectProductCount } from "../../redux/cart/cart.selectors";
import "./NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const productsCount = useSelector(selectProductCount);

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__logo">
          <Logo />
        </Link>

        <button
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>
          Shop
        </Link>
        <Link to="/menProducts" onClick={() => setMenuOpen(false)}>
          Men
        </Link>
        <Link to="/womanProducts" onClick={() => setMenuOpen(false)}>
          Woman
        </Link>
        <Link to="/summer" onClick={() => setMenuOpen(false)}>
          Summer
        </Link>
        <Link to="/winter" onClick={() => setMenuOpen(false)}>
          Winter
        </Link>
        <button className="navbar__search" type="button">
          <Search />
          Search
        </button>
      </nav>

      <div className="navbar__actions">
        <div className="navbar__icon-group">
          <button className="navbar__icon" type="button" aria-label="Favoritos">
            <Heart13 />
          </button>
          <button className="navbar__icon" type="button" aria-label="Conta">
            <User1 />
          </button>
        </div>

        <Link to="/cart" className="navbar__cart">
          <ShoppingCart />
          <span className="navbar__cart-count">{productsCount}</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
