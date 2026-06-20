import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../../redux/cart/action";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";
import Navbar from "../../components/Navbar/Navbar";
import "./CartProducts.css";
import { Link } from "react-router-dom";

const CartProducts = () => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);
  const dispatch = useDispatch();

  const handleRemoveClick = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const handleIncreaseClick = (id) => {
    dispatch(increaseProductQuantity(id));
  };

  const handleDecreaseClick = (id) => {
    dispatch(decreaseProductQuantity(id));
  };

  const formatPrice = (height) => {
    if (!height) return "0.00";
    return (height / 100).toFixed(2);
  };

  return (
    <div className="cart-page">
      <Navbar />
      <main className="cart-container">
        {products.length === 0 ? (
          <section className="empty-state">
            <div className="empty-state-content">
              <h1>Seu carrinho está vazio</h1>
              <p>
                Escolha seus produtos favoritos e volte aqui para finalizar a
                compra com segurança.
              </p>
              <Link to="/shop" className="empty-state-button">
                Ver coleção
              </Link>
            </div>
            <div className="empty-state-visual" />
          </section>
        ) : (
          <section className="cart-layout">
            <div className="cart-summary-panel">
              <div className="cart-topbar">
                <div>
                  <p className="eyebrow">Meu carrinho</p>
                  <h1>Resumo do pedido</h1>
                  <p className="cart-subtitle">
                    Confira os itens, ajuste quantidades e finalize seu pedido.
                  </p>
                </div>
                <span className="item-count">{products.length} itens</span>
              </div>

              <div className="cart-items">
                <div className="cart-table-heading">
                  <span>Produto</span>
                  <span>Qtd</span>
                  <span>Valor</span>
                  <span>Ação</span>
                </div>

                {products.map((product) => (
                  <article className="cart-item" key={product.id}>
                    <Link to={`/product/${product.id}`} className="item-image-card">
                      <img
                        src={product.src.medium}
                        alt={product.alt}
                        className="item-image"
                      />
                      <div>
                        <h2>{product.alt}</h2>
                        <p className="item-meta">{product.photographer}</p>
                      </div>
                    </Link>

                    <div className="quantity-controls">
                      <button onClick={() => handleDecreaseClick(product.id)}>
                        −
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => handleIncreaseClick(product.id)}>
                        +
                      </button>
                    </div>

                    <div className="item-price">
                      R$ {formatPrice(product.height)}
                    </div>

                    <button
                      className="remove-button"
                      onClick={() => handleRemoveClick(product.id)}
                    >
                      Remover
                    </button>
                  </article>
                ))}
              </div>

              <div className="cart-total-card">
                <div>
                  <p className="total-label">Total do pedido</p>
                  <p className="total-value">R$ {formatPrice(productsTotalPrice)}</p>
                </div>
                <Link to="/checkout" className="checkout-button">
                  Finalizar compra
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default CartProducts;
