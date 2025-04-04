import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUser, FaHeart, FaBars } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext"; // ✅ To‘g‘ri import

const Header = ({ likeCount, cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // ✅ `useContext` orqali AuthContext ni olish

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-green-600 font-bold text-2xl">
          GREENSHOP
        </Link>

        {/* Navigation for large screens */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link to="/blog" className="text-gray-700 hover:text-green-600">Blog</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <FaSearch className="text-gray-600 hover:text-green-600 cursor-pointer" />

          {/* Like Icon */}
          <div className="relative cursor-pointer">
            <FaHeart className="text-red-500" />
            {likeCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {likeCount}
              </span>
            )}
          </div>

          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-gray-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login yoki Profile Button */}
          {user ? (
            <div className="flex items-center space-x-3">
              <Link to="/profile" className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center">
                {user.name}
              </Link>
              <button onClick={logout} className="text-red-600">Logout</button>
            </div>
          ) : (
            <Link to="/signin" className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center">
              <FaUser className="mr-2" />
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="text-gray-600 text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md p-4">
          <Link to="/" className="block py-2 text-gray-700 hover:text-green-600">Home</Link>
          <Link to="/blog" className="block py-2 text-gray-700 hover:text-green-600">Blog</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
