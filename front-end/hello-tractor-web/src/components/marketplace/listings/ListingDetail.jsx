/* eslint-disable react/prop-types */
import { useState } from "react";
import { Home, ChevronRight, List, Heart, Info } from "lucide-react";
import featuresJson from "@/lib/features.json";

// Breadcrumb
const Breadcrumb = ({ name }) => (
  <nav className="text-sm text-gray-500 mb-6">
    <ul className="flex items-center space-x-2">
      <li className="flex items-center group">
        <Home className="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition duration-300" />
        <a
          href="/"
          className="ml-1 hover:text-blue-500 transition duration-300"
        >
          Home
        </a>
      </li>
      <li>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </li>
      <li className="flex items-center group">
        <List className="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition duration-300" />
        <a
          href="/marketplace/tractors"
          className="ml-1 hover:text-blue-500 transition duration-300"
        >
          Tractors
        </a>
      </li>
      <li>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </li>
      <li className="flex items-center text-primary truncate">
        <Info className="h-3 w-3 text-primary mr-1" />
        <span className="font-semibold">{name}</span>
      </li>
    </ul>
  </nav>
);

// Enhanced Image Gallery with Carousel
const ImageGallery = ({ images, currentIndex, setCurrentImageIndex }) => (
  <div className="space-y-4">
    {/* Main Image */}
    <div className="relative">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="rounded-lg w-full h-96 object-cover shadow-lg transition duration-500 transform hover:scale-105"
      />
      <span className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 text-xs rounded shadow">
        {currentIndex + 1}/{images.length}
      </span>
    </div>

    {/* Thumbnails */}
    <div className="flex space-x-4 overflow-x-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={`cursor-pointer rounded-lg border-2 ${currentIndex === index ? "border-blue-500" : "border-transparent"
            }`}
          onClick={() => setCurrentImageIndex(index)}
        >
          <img
            src={image.url}
            alt={`${image.url} thumbnail`}
            className="w-24 h-24 object-cover rounded-lg shadow-md hover:opacity-90"
          />
        </div>
      ))}
    </div>
  </div>
);

const TractorDetails = ({ name, price, features, description }) => (
  <div className="w-full md:w-2/3 space-y-6">
    <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
      <p className="text-4xl font-bold text-green-500 mt-2">${price}</p>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Features</h3>
      <ul className="mt-2 space-y-2">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="inline-block h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
            {
              featuresJson.features.filter((item) => item.name === feature)[0]
                .label
            }
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Description</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const ListingDetail = ({ tractor }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md space-y-8">
      <Breadcrumb name={tractor?.name} />
      <ImageGallery
        images={
          tractor?.images?.length
            ? tractor.images
            : ["/cdn/images/default-tractor.jpg"]
        }
        currentIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <TractorDetails
          name={tractor?.name || "Unnamed Tractor"}
          price={tractor?.price || "N/A"}
          features={Object.keys(tractor?.features || {})
            .map((key) => (tractor.features[key] ? key : null))
            .filter(Boolean)}
          description={tractor?.description || "No description available."}
        />
        <OrderSummary />
      </div>
    </div>
  );
};

const OrderSummary = () => {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    alert("Your message has been sent to the seller!");
  };

  const handleAddToWishlist = () => {
    alert("Tractor added to your wishlist!");
  };

  return (
    <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Contact Seller</h2>
        <form onSubmit={handleContactSubmit} className="space-y-4 mt-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="py-3 px-4 ps-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="py-3 px-4 ps-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="py-3 px-4 ps-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">Add to Wishlist</h3>
        <button
          onClick={handleAddToWishlist}
          className="w-full bg-red-100 hover:bg-red-200 text-red-600 font-bold py-2 px-4 rounded"
        >
          <Heart className="inline-block mr-2" />
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ListingDetail;
