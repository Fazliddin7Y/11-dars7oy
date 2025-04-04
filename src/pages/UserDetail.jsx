import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [id]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-10">
        <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
          <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
          <p className="text-gray-700"><strong>Website:</strong> {user.website}</p>
          <p className="text-gray-700"><strong>Company:</strong> {user.company.name}</p>
          <p className="text-gray-700"><strong>Address:</strong> {user.address.city}, {user.address.street}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserDetail;
