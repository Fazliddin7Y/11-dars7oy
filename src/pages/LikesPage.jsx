// LikesPage.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LikesPage = () => {
  const { likedProducts } = useContext(AuthContext); // Bunda, likedProducts-ni AuthContext'dan olishimiz mumkin.

  return (
    <div>
      <h1>Your Liked Products</h1>
      {likedProducts.length > 0 ? (
        likedProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))
      ) : (
        <p>No liked products yet.</p>
      )}
    </div>
  );
};

export default LikesPage;