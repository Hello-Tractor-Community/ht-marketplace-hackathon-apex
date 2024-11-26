import { useEffect, useState } from "react";
import SingleListing from "./SingleListing";
import { getTractors } from "@/api/tractor";

const Listing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTractors = async () => {
      try {
        const data = await getTractors({ is_active: true });
        setListings(data.results);
      } catch (err) {
        console.log(err);
        setError("Failed to load listings.");
      } finally {
        setLoading(false);
      }
    };

    fetchTractors();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="py-5 pl-4 sm:px-8 lg:pl-16 flex flex-col lg:flex-row gap-6 lg:gap-2 overflow-hidden">
      <div className="flex-1">
        <div className="flex flex-row gap-1 items-center mb-4 justify-between">
          <p className="font-bold text-[24px] whitespace-nowrap">
            Featured Listings
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {listings.map((tractor) => (
            <SingleListing key={tractor.id} id={tractor.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
