import PropTypes from "prop-types";
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaTrashAlt } from "react-icons/fa";

const TractorItem = ({ tractor }) => {
  return (
    <div className="rounded-xl bg-card border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-105 transition-all cursor-pointer">
      {/* Image with fallback if no image URL is provided */}
      <img
        src={tractor?.images?.[0]?.imageUrl || "fallback-image-url"}
        width="100%"
        height={200}
        className="rounded-t-xl h-[180px] object-cover"
        alt={tractor?.listingTitle || "Tractor Image"}
      />
      <div className="p-4 space-y-3">
        {/* Title with fallback if no title is provided */}
        <h2 className="font-semibold text-base text-gray-800 mb-2">
          {tractor?.listingTitle || "No Title Available"}
        </h2>

        {/* Tractor details grid */}
        <div className="grid grid-cols-3 gap-4 mt-3 text-xs">
          <div className="flex flex-col items-center text-center">
            <LuFuel className="text-lg text-gray-600 mb-1" />
            <p className="text-xs text-gray-600">{tractor?.mileage ?? "N/A"} Kms</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <SlSpeedometer className="text-lg text-gray-600 mb-1" />
            <p className="text-xs text-gray-600">{tractor?.fuelType ?? "Unknown"}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <GiGearStickPattern className="text-lg text-gray-600 mb-1" />
            <h3 className="text-xs text-gray-600">{tractor?.transmission ?? "N/A"}</h3>
          </div>
        </div>

        {/* Price and view details */}
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-base text-gray-800">
            {tractor?.RentingPrice || "Price Not Available"}
          </h2>
          <h2 className="text-primary text-xs flex gap-1 items-center hover:text-primary-dark cursor-pointer">
            <MdOpenInNew className="text-xs" />
            View Details
          </h2>
        </div>

        {/* Edit and delete buttons */}
        <div className="py-2 bg-card rounded-lg flex justify-between gap-3 mt-4">
          <Button variant="outline" className="w-full text-xs py-1.5 transition duration-200 ease-in-out hover:bg-muted-foreground focus:ring-2 focus:ring-primary">
            Edit
          </Button>
          <Button variant="destructive" className="text-xs py-1.5 transition duration-200 ease-in-out hover:bg-red-600 focus:ring-2 focus:ring-destructive">
            <FaTrashAlt className="text-sm" />
          </Button>
        </div>
      </div>
    </div>
  );
};

TractorItem.propTypes = {
  tractor: PropTypes.object.isRequired,
};

export default TractorItem;