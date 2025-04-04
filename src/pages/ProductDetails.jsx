import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'; // useQuery import qilinadi
import axios from 'axios';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

// Green Shop API-dan mahsulot ma'lumotlarini olish funktsiyasi
const fetchProductDetails = async (id) => {
  const accessToken = "<your_access_token>"; // Tokenni shu yerga yozing
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const ProductDetails = ({ onLike, onAddToCart, likedProducts, cartItems }) => {
  const { id } = useParams();

  // React Query yordamida mahsulot ma'lumotlarini olish
  const { data: product, isLoading, error } = useQuery(
    ['product', id], // Query kaliti
    () => fetchProductDetails(id), // Fetch funktsiyasi
    { enabled: !!id } // Query faqat id mavjud bo'lganda bajarilsin
  );

  // Yuklanish holati
  if (isLoading) {
    return <div>Yuklanmoqda...</div>;
  }

  // Xatolik holati
  if (error) {
    return <div>Mahsulot ma'lumotlarini olishda xatolik yuz berdi.</div>;
  }

  // Like tugmasi holati
  const isLiked = likedProducts.includes(product.id);
  const isInCart = cartItems.includes(product.id);

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Mahsulot rasmi */}
        <img src={product.image} alt={product.title} className="w-1/2 lg:w-1/3 mb-6 lg:mb-0 mx-auto" />
        
        {/* Mahsulot haqida ma'lumot */}
        <div className="lg:ml-10 text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-green-600 font-bold mt-2">${product.price}</p>
          
          {/* Like va Savatcha tugmalari */}
          <div className="mt-4 flex justify-center lg:justify-start space-x-4">
            <button
              onClick={() => onLike(product)}
              className={`p-3 rounded-full ${isLiked ? 'bg-red-500' : 'bg-gray-300'}`}
            >
              <FaHeart className={`text-white ${isLiked ? 'fill-current' : ''}`} />
              {isLiked && <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full px-2 py-1">1</span>}
            </button>

            <button
              onClick={() => onAddToCart(product)}
              className={`p-3 rounded-full ${isInCart ? 'bg-gray-500' : 'bg-blue-500'}`}
            >
              <FaShoppingCart className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
