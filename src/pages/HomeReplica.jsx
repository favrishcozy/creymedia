import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-[#020617] to-[#0f172a] text-white font-[Poppins] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left text */}
        <div>
          <p className="text-gray-300 text-lg mb-2">Establish <span className="font-semibold text-2xl text-gray-100">2025</span></p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            We Are a{" "}
            <span className="text-orange-500">Creative</span>{" "}
            News <br /> & Lifestyle Brand
          </h1>
        </div>

        {/* Right summary */}
        <div className="flex flex-col gap-4 lg:items-end text-gray-200 mt-6 lg:mt-0">
          <p className="max-w-sm text-right text-gray-400 leading-relaxed">
            We are a creative News and lifestyle brand. We organize live sessions on engaging topics and influential personas.
          </p>
          <div className="flex gap-6 mt-2">
            <div>
              <h3 className="text-2xl font-bold text-white">4+</h3>
              <p className="text-gray-400 text-sm">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">20+</h3>
              <p className="text-gray-400 text-sm">Completed Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">25+</h3>
              <p className="text-gray-400 text-sm">Published Books</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PODCAST IMAGE ================= */}
      <section className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg mt-6">
        <img
          src="your-podcast-image.jpg"
          alt="Podcast session"
          className="w-full object-cover"
        />
      </section>

      {/* ================= TRENDING ARTICLES + LATEST VIDEOS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-3 gap-10">
        {/* Trending Articles */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-6">
            Trending Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0f172a] rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative">
                <img
                  src="your-article-image1.jpg"
                  alt="Article 1"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-orange-500 text-xs px-2 py-1 rounded text-white">
                  20th Dec, 2025
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  Breaking down the latest market trends
                </h3>
                <p className="text-gray-400 text-sm mt-2">by Admin</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0f172a] rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative">
                <img
                  src="your-article-image2.jpg"
                  alt="Article 2"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-orange-500 text-xs px-2 py-1 rounded text-white">
                  20th Dec, 2025
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  The Mysterious Tribe in Eastern Africa
                </h3>
                <p className="text-gray-400 text-sm mt-2">by Admin</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0f172a] rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="relative">
                <img
                  src="your-article-image3.jpg"
                  alt="Article 3"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-orange-500 text-xs px-2 py-1 rounded text-white">
                  20th Dec, 2025
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  Brazilian Aquatic Market with a striking discovery
                </h3>
                <p className="text-gray-400 text-sm mt-2">by Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Videos */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Latest Videos</h2>
          <div className="flex flex-col gap-5">
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="your-video-thumb1.jpg"
                alt="Video 1"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="your-video-thumb2.jpg"
                alt="Video 2"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="your-video-thumb3.jpg"
                alt="Video 3"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPLORING BOOKS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <h2 className="text-2xl font-bold text-white mb-8">Exploring Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
          <div className="rounded-2xl overflow-hidden shadow hover:scale-105 transition">
            <img
              src="your-book-image1.jpg"
              alt="Book 1"
              className="w-full h-52 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow hover:scale-105 transition">
            <img
              src="your-book-image2.jpg"
              alt="Book 2"
              className="w-full h-52 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow hover:scale-105 transition">
            <img
              src="your-book-image3.jpg"
              alt="Book 3"
              className="w-full h-52 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
