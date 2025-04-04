import React from "react";
import { useCategories } from "../hooks/useCategories";

const Categories = ({ onCategoryChange }) => {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;

  return (
    <div className="flex gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.name)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
