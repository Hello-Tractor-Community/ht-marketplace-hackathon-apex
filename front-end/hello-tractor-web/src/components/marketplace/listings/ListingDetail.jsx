import { useState } from "react";
import { Home, ChevronRight, List, Heart, Info } from "lucide-react";

// Enhanced Breadcrumb
const Breadcrumb = ({ address }) => (
  <nav className="text-sm text-gray-500 mb-6">
    <ul className="flex items-center space-x-2">
      <li className="flex items-center group">
        <Home className="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition duration-300" />
        <a href="/" className="ml-1 hover:text-blue-500 transition duration-300">
          Home
        </a>
      </li>
      <li>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </li>
      <li className="flex items-center group">
        <List className="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition duration-300" />
        <a href="/listings" className="ml-1 hover:text-blue-500 transition duration-300">
          Listings
        </a>
      </li>
      <li>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </li>
      <li className="flex items-center text-gray-700 truncate">
        <Info className="h-5 w-5 text-gray-500 mr-1" />
        <span className="font-semibold">{address}</span>
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
        src={images[currentIndex]}
        alt="Main Property"
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
          className={`cursor-pointer rounded-lg border-2 ${currentIndex === index
            ? "border-blue-500"
            : "border-transparent"
            }`}
          onClick={() => setCurrentImageIndex(index)}
        >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-24 h-24 object-cover rounded-lg shadow-md hover:opacity-90"
          />
        </div>
      ))}
    </div>
  </div>
);

// Enhanced Property Details
const PropertyDetails = ({ address, price, mortgageInfo, features, description }) => (
  <div className="w-full md:w-2/3 space-y-6">
    <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800">{address}</h2>
      <p className="text-4xl font-bold text-green-500 mt-2">{price}</p>
      <p className="text-sm text-gray-500 mt-1">{mortgageInfo}</p>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Features</h3>
      <ul className="mt-2 space-y-2">
        {features?.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-gray-700"
          >
            <span className="inline-block h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
            {feature}
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

// Listing Detail with Animations
const ListingDetail = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md space-y-8">
      <Breadcrumb address={property?.address} />
      <ImageGallery
        images={property?.images}
        currentIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <PropertyDetails
          address={property?.address}
          price={property?.price}
          mortgageInfo={property?.mortgageInfo}
          features={property?.features}
          description={property?.description}
        />
        <OrderSummary />
      </div>
    </div>
  );
};

// Enhanced Order Summary
const OrderSummary = () => {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    alert("Your message has been sent to the seller!");
  };

  const handleAddToWishlist = () => {
    alert("Item added to your wishlist!");
  };

  return (
    <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Contact Seller</h2>
        <form onSubmit={handleContactSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
