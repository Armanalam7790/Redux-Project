import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
     

      {/* 🔹 Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto ">
        
        {/* Left */}
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Discover Amazing <span className="text-blue-600">Products</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Shop the latest trends with the best prices. High quality products 
            curated just for you.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/shop"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>

            <Link
              to="/cart"
              className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
            >
              View Cart
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
            alt="shopping"
            className="w-[400px] rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* 🔹 Features */}
      <section className="bg-white py-16 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8 ">
          
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">
              🚀 Fast Delivery
            </h3>
            <p className="mt-2 text-gray-600">
              Get your products delivered quickly at your doorstep.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">
              💳 Secure Payment
            </h3>
            <p className="mt-2 text-gray-600">
              100% secure and trusted payment methods.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">
              ⭐ Top Quality
            </h3>
            <p className="mt-2 text-gray-600">
              Only the best quality products curated for you.
            </p>
          </div>

        </div>
      </section>

      {/* 🔹 CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to start shopping?
        </h2>

        <p className="mt-3 text-gray-600">
          Explore our wide collection of products now.
        </p>

        <Link
          to="/shop"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Go to Shop
        </Link>
      </section>

    </div>
  );
};

export default HomePage;



