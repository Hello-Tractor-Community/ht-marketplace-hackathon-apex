import TractorItem from "@/components/TractorItem";
import tractorlist from "@/lib/dummyData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MyListings = () => {
  return (
    <div className="px-6 lg:px-12 mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-3xl md:text-4xl text-gray-800">My Listings</h2>
        <Link to="add-listing">
          <Button className="text-lg md:text-md bg-primary hover:bg-primary-dark text-white rounded-md px-6 py-2">
            + Add New Listing
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 overflow-auto scrollbar-hidden">
        {tractorlist.map((tractor, index) => (
          <div key={index} className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <TractorItem tractor={tractor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListings;