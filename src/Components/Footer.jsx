import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔹 Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Our Store
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
          We are passionate about delivering high-quality products with 
          modern design and best user experience.
        </p>
      </section>

      {/* 🔹 About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
            alt="about"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Who We Are
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a modern eCommerce platform focused on providing 
            the best shopping experience. Our mission is to bring 
            high-quality products at affordable prices.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With a strong focus on user experience, fast delivery, 
            and secure payments, we ensure that every customer 
            enjoys a smooth and satisfying journey.
          </p>
        </div>
      </section>

      {/* 🔹 Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 mt-2">Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600 mt-2">Support</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-600 mt-2">Satisfaction</p>
          </div>

        </div>
      </section>

      {/* 🔹 Team Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Meet Our Team
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Card */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="team"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 font-semibold text-lg">Arman Khan</h3>
            <p className="text-gray-500 text-sm">Frontend Developer</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="team"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 font-semibold text-lg">Sara Ali</h3>
            <p className="text-gray-500 text-sm">UI/UX Designer</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <img
              src="https://randomuser.me/api/portraits/men/55.jpg"
              alt="team"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 font-semibold text-lg">Rahul Sharma</h3>
            <p className="text-gray-500 text-sm">Backend Developer</p>
          </div>

        </div>
      </section>

      {/* 🔹 CTA */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Join Our Journey 🚀
        </h2>
        <p className="mt-3 opacity-90">
          Start shopping with us and experience the difference.
        </p>

        <button className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition">
          Explore Products
        </button>
      </section>

    </div>
  );
};

export default AboutPage;