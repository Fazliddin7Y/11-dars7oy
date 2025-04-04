import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProductDetails from "./pages/ProductDetails";
import ProfilePage from "./pages/ProfilePage";  // Yangi qo'shilgan komponent
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext"; 

const queryClient = new QueryClient();

const App = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Like qilish funksiyasi
  const handleLike = (product) => {
    if (!likedProducts.includes(product.id)) {
      setLikedProducts([...likedProducts, product.id]);
    } else {
      setLikedProducts(likedProducts.filter((id) => id !== product.id));
    }
  };

  // Savatchaga qo‘shish funksiyasi
  const handleAddToCart = (product) => {
    if (!cartItems.includes(product.id)) {
      setCartItems([...cartItems, product.id]);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  likedProducts={likedProducts}
                  cartItems={cartItems}
                  onLike={handleLike}
                  onAddToCart={handleAddToCart}
                />
              }
            />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/profile" element={<ProfilePage />} />  {/* Yangi qo'shilgan route */}
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
