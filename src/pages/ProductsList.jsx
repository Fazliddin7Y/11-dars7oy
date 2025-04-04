import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductsList = ({ selectedCategory }) => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
