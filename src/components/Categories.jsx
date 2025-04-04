import React from "react";
import { useCategories } from "../hooks/useCategories";

const Categories = ({ onCategoryChange }) => {
  const { data, isLoading, isError } = useCategories();

  // "all" va mavjud kategoriyalarni birlashtiramiz
  const categories = ["all", ...(data?.data?.map((cat) => cat.name) || [])];

  if (isLoading) {
    return <p className="text-center text-gray-500">Yuklanmoqda...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Kategoriyalarni olishda xatolik yuz berdi.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {/* Har bir kategoriya uchun tugma yaratish */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)} // Kategoriyani o'zgartirish
          className="px-6 py-3 text-sm bg-green-500 text-white rounded-lg hover:bg-green-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 capitalize"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
