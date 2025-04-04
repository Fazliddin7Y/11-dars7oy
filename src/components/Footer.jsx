import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-green-600 text-xl font-bold">GREENSHOP</h2>
          <p className="text-gray-600 mt-2">
            70 West Buckingham Ave, Farmingdale, NY 11735
          </p>
          <p className="text-gray-600 mt-2">contact@greenshop.com</p>
          <p className="text-gray-600 mt-2">+88 01911 717 490</p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-gray-800 font-bold mb-2">Categories</h3>
          <ul className="text-gray-600 space-y-1">
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-gray-800 font-bold mb-2">My Account</h3>
          <ul className="text-gray-600 space-y-1">
            <li>My Account</li>
            <li>Address</li>
            <li>Wishlist</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-gray-800 font-bold mb-2">Social Media</h3>
          <div className="flex space-x-4">
            <FaFacebook className="text-green-600 text-2xl cursor-pointer" />
            <FaInstagram className="text-green-600 text-2xl cursor-pointer" />
            <FaTwitter className="text-green-600 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      <p className="text-center text-gray-600 mt-8">
        © 2023 GreenShop. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
