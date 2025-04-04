// CartPage.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const CartPage = () => {
  const { cartProducts } = useContext(AuthContext); // CartProduct ni AuthContext'dan olish

  return (
    <div>
      <h1>Your Cart</h1>
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products in your cart.</p>
      )}
    </div>
  );
};

export default CartPage;