import { useState } from "react";

function TractorOperatorTopFilter() {
    const [location, setLocation] = useState("");
    const [availability, setAvailability] = useState("any");
    const [rating, setRating] = useState("any");

    const handleFilterReset = () => {
        setLocation("");
        setAvailability("any");
        setRating("any");
    };

    return (
        <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded-lg shadow-md mb-6">
            {/* Location Filter */}
            <div className="flex flex-col">
                <label htmlFor="location" className="text-sm font-medium text-gray-700">
                    Location
                </label>
                <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary w-full"
                />
            </div>

            {/* Availability Filter */}
            <div className="flex flex-col">
                <label htmlFor="availability" className="text-sm font-medium text-gray-700">
                    Availability
                </label>
                <select
                    id="availability"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary w-full"
                >
                    <option value="any">Any</option>
                    <option value="available">Available</option>
                    <option value="busy">Currently Busy</option>
                </select>
            </div>

            {/* Rating Filter */}
            <div className="flex flex-col">
                <label htmlFor="rating" className="text-sm font-medium text-gray-700">
                    Minimum Rating
                </label>
                <select
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary w-full"
                >
                    <option value="any">Any</option>
                    <option value="4">4 Stars & Up</option>
                    <option value="3">3 Stars & Up</option>
                    <option value="2">2 Stars & Up</option>
                    <option value="1">1 Star & Up</option>
                </select>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <button
                    onClick={handleFilterReset}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                    Reset
                </button>
                <button
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    );
}

export default TractorOperatorTopFilter;
