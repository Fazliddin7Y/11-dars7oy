import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // To‘g‘ri import qilish
import { useNavigate } from "react-router-dom"; // Navigate uchun

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext); // AuthContext-dan user va logout olish
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
    age: user?.age || "",
    email: user?.email || "",
    password: "", // password o'zgarishini qo'shish
  });
  const [isPasswordChanging, setIsPasswordChanging] = useState(false);
  const navigate = useNavigate();

  // Formdagi qiymatlarni yangilash
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Ma'lumotlarni saqlash
  const handleSave = (e) => {
    e.preventDefault();
    // User ma'lumotlarini yangilash va localStorage-ga saqlash
    localStorage.setItem("user", JSON.stringify({ ...user, ...formData }));
    alert("Profil ma'lumotlari saqlandi");
  };

  // Parolni o'zgartirish
  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Parol o'zgartirish jarayoni
    alert("Parol o'zgartirildi!");
    setIsPasswordChanging(false);
  };

  // Foydalanuvchini profil sahifasiga yo‘naltirish (agar u tizimga kirgan bo‘lsa)
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Profile</h1>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={user?.profilePicture || "default-avatar.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 border-4 border-green-600"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200">
            Change Picture
          </button>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSave} className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md focus:outline-none hover:bg-green-700 transition duration-200"
            >
              Save Changes
            </button>

            <button
              onClick={logout}
              className="text-red-600 hover:text-red-800 transition duration-200"
            >
              Logout
            </button>
          </div>
        </form>

        {/* Change Password Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800">Change Password</h2>
          <button
            onClick={() => setIsPasswordChanging(!isPasswordChanging)}
            className="mt-4 text-green-600 hover:text-green-700 transition duration-200"
          >
            {isPasswordChanging ? "Cancel" : "Change Password"}
          </button>

          {isPasswordChanging && (
            <form onSubmit={handlePasswordChange} className="mt-6 space-y-4">
              <div className="flex flex-col">
                <label className="text-lg font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-md focus:outline-none hover:bg-green-700 transition duration-200"
                >
                  Update Password
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
