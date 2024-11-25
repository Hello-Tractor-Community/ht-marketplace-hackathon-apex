import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { getTractor } from "@/api/tractor";

// eslint-disable-next-line react/prop-types
const SingleListing = ({ id }) => {
  const [tractor, setTractor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTractor = async () => {
      try {
        const data = await getTractor(id);
        setTractor(data);
      } catch (err) {
        console.log(err);
        setError("Failed to load tractor details.");
      } finally {
        setLoading(false);
      }
    };

    fetchTractor();
  }, [id]);

  if (loading) {
    return (
      <div className="p-2 border rounded-lg shadow-lg bg-gray-100 animate-pulse">
        <div className="h-[200px] bg-gray-300 rounded-md"></div>
        <div className="mt-4 h-6 bg-gray-300 rounded"></div>
        <div className="mt-2 h-4 bg-gray-300 rounded"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  if (!tractor) return null;

  return (
    <div className="flex gap-2 p-2 border border-gray-200 rounded-lg shadow-lg min-h-[200px] max-w-[500px] bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="flex-shrink-0 w-[200px] h-[200px] overflow-hidden rounded-md">
        <img
          src={tractor.images[0]?.url || "https://via.placeholder.com/200"}
          alt={tractor.images[0]?.alt || "Tractor Image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between flex-1 overflow-hidden">
        {/* Title */}
        <Link to={`/tractor/${tractor.id}`} className="overflow-hidden">
          <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
            {tractor.description || "Unnamed Tractor"}
          </h2>
        </Link>

        {/* Attributes */}
        <div className="flex flex-row gap-2">
          <div className="flex flex-col">
            <LuFuel className="text-lg text-gray-600 mb-1" />
            <p className="text-xs text-gray-600">
              {tractor.fuel_type || "Diesel"}
            </p>
          </div>
          <div className="flex flex-col">
            <SlSpeedometer className="text-lg text-gray-600 mb-1" />
            <p className="text-xs text-gray-600">{`${tractor.milleage} Kms`}</p>
          </div>
          <div className="flex flex-col">
            <GiGearStickPattern className="text-lg text-gray-600 mb-1" />
            <p className="text-xs text-gray-600">{tractor.transmission}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mt-2">
          <p className="text-lg font-bold text-primary">
            ${tractor.price.toLocaleString()}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-4">
          <button
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors flex-1"
            aria-label="Add to Wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21l-1.45-1.318C5.4 15.363 2 12.28 2 8.757 2 5.967 4.239 4 6.8 4c1.501 0 3.112.716 4.2 2.034C12.088 4.716 13.7 4 15.2 4c2.561 0 4.8 1.967 4.8 4.757 0 3.523-3.4 6.606-8.55 10.925L12 21z"
              />
            </svg>
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors flex-1">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;
