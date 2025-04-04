import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [minPrice, setMinPrice] = useState("");  // Min price state
  const [maxPrice, setMaxPrice] = useState("");  // Max price state
  const [rating, setRating] = useState(""); // Rating state

  // 📥 Kategoriyalarni Fake Store API'dan olish
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error("Kategoriyalarni olishda xatolik:", err));
  }, []);

  // 📥 Mahsulotlarni Fake Store API'dan olish
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.error("Mahsulotlarni olishda xatolik:", err));
  }, []);

  // 🔄 Kategoriya bo‘yicha filter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(category, minPrice, maxPrice, rating); // Category bilan birga filtrlashni chaqirish
  };

  // 🛒 Narx bo‘yicha filtrlash
  const handlePriceFilter = (e) => {
    const { name, value } = e.target;
    if (name === "minPrice") {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
    filterProducts(selectedCategory, minPrice, maxPrice, rating);
  };

  // ⭐️ Rating bo‘yicha filtrlash
  const handleRatingFilter = (ratingValue) => {
    setRating(ratingValue);
    filterProducts(selectedCategory, minPrice, maxPrice, ratingValue);
  };

  // 🔄 Filtrlangan mahsulotlarni ko‘rsatish
  const filterProducts = (category, minPrice, maxPrice, rating) => {
    let filtered = products;

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (minPrice) {
      filtered = filtered.filter((product) => product.price >= minPrice);
    }

    if (maxPrice) {
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    if (rating) {
      filtered = filtered.filter((product) => product.rating.rate >= rating);
    }

    setFilteredProducts(filtered);
  };

  // ❤️ Like bosilganda
  const handleLike = (product) => {
    if (!likedProducts.includes(product.id)) {
      setLikedProducts([...likedProducts, product.id]);
    } else {
      setLikedProducts(likedProducts.filter((id) => id !== product.id));
    }
  };

  // 🛒 Savatchaga qo‘shish
  const handleAddToCart = (product) => {
    if (!cartItems.includes(product.id)) {
      setCartItems([...cartItems, product.id]);
    } else {
      setCartItems(cartItems.filter((id) => id !== product.id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto py-10">
        {/* 📌 Filtrlar Paneli */}
        <div className="flex flex-wrap justify-between mb-6 gap-6">
          {/* Kategoriyalar */}
          <Categories
            onCategoryChange={handleCategoryChange}
            categories={["all", ...categories]}
          />
          
          {/* Narx bo‘yicha filtr */}
          <div className="flex flex-col">
            <label className="font-medium">Price Range</label>
            <div className="flex space-x-4">
              <input
                type="number"
                name="minPrice"
                value={minPrice}
                onChange={handlePriceFilter}
                className="p-2 border rounded"
                placeholder="Min Price"
              />
              <input
                type="number"
                name="maxPrice"
                value={maxPrice}
                onChange={handlePriceFilter}
                className="p-2 border rounded"
                placeholder="Max Price"
              />
            </div>
          </div>

          {/* Rating bo‘yicha filtr */}
          <div className="flex flex-col">
            <label className="font-medium">Rating</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => handleRatingFilter(value)}
                  className={`p-2 border rounded ${
                    rating === value ? "bg-green-500 text-white" : ""
                  }`}
                >
                  {value}⭐
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 📌 Karusel */}
        <ProductCarousel products={filteredProducts} />

        {/* 📌 Mahsulotlar */}
        <h1 className="text-3xl font-bold text-center my-6 text-green-600">
          Featured Products
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onLike={handleLike}
              onAddToCart={handleAddToCart}
              likedProducts={likedProducts}
              cartItems={cartItems}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
