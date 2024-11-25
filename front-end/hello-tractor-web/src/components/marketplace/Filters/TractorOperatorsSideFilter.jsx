import { useState } from "react";

function TractorOperatorsSideFilter() {
    const [location, setLocation] = useState("");
    const [availability, setAvailability] = useState("");
    const [rating, setRating] = useState("");

    const handleReset = () => {
        setLocation("");
        setAvailability("");
        setRating("");
    };

    return (
        <div className="p-4 bg-white border border-gray-300 rounded-md shadow-sm w-full max-w-xs">
            {/* Location Filter */}
            <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium mb-1">
                    Location
                </label>
                <input
                    id="location"
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* Availability Filter */}
            <div className="mb-4">
                <label htmlFor="availability" className="block text-sm font-medium mb-1">
                    Availability
                </label>
                <select
                    id="availability"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="" disabled>
                        Select Availability
                    </option>
                    <option value="available">Available</option>
                    <option value="busy">Currently Busy</option>
                </select>
            </div>

            {/* Rating Filter */}
            <div className="mb-4">
                <label htmlFor="rating" className="block text-sm font-medium mb-1">
                    Rating
                </label>
                <select
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="" disabled>
                        Select Rating
                    </option>
                    <option value="4">4 Stars & Up</option>
                    <option value="3">3 Stars & Up</option>
                    <option value="2">2 Stars & Up</option>
                    <option value="1">1 Star & Up</option>
                </select>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
                <button
                    onClick={handleReset}
                    className="w-full text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                    Clear Filters
                </button>
                <button
                    className="w-full px-4 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    );
}

export default TractorOperatorsSideFilter;
