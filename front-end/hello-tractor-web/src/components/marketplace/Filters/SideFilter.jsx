import { useState } from "react";

function SideFilter() {
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [condition, setCondition] = useState("");
    const [brand, setBrand] = useState("");
    const [seller, setSeller] = useState("");

    const handleReset = () => {
        setCategory("");
        setMinPrice("");
        setMaxPrice("");
        setCondition("");
        setBrand("");
        setSeller("");
    };

    return (
        <div className="p-4 bg-white border rounded-md shadow-md flex flex-col gap-6">
            {/* Categories Filter */}
            <div className="flex flex-col gap-2">
                
                <div className="flex flex-row gap-1 items-center mb-4">
                    <p className="font-bold text-[24px] whitespace-nowrap">
                        Filter
                    </p>
                    <img
                        src="/cdn/images/thumbsup.svg"
                        alt="thumbsup"
                        className="w-6 h-6"
                    />
                </div>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <option value="" disabled>
                        Select Category
                    </option>
                    <option value="wheels">Wheels & Tyres</option>
                    <option value="ac">AC Systems</option>
                    <option value="brakes">Brake System</option>
                    <option value="tools">Tools & Equipment</option>
                </select>
            </div>

            {/* Condition Filter */}
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Condition</h3>
                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded"
                            checked={condition === "new"}
                            onChange={() => setCondition(condition === "new" ? "" : "new")}
                        />
                        <span className="text-md font-medium">New</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded"
                            checked={condition === "used"}
                            onChange={() => setCondition(condition === "used" ? "" : "used")}
                        />
                        <span className="text-md font-medium">Used</span>
                    </label>
                </div>
            </div>

            {/* Price Range Filter */}
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Price Range</h3>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-full px-2 py-1 border rounded text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="number"
                        placeholder="Max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full px-2 py-1 border rounded text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            {/* Brand Filter */}
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Brands</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="w-full px-2 py-1 border rounded text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Seller Filter */}
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Seller</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        value={seller}
                        onChange={(e) => setSeller(e.target.value)}
                        className="w-full px-2 py-1 border rounded text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Clear Filters Button */}
            <div className="flex justify-center gap-4 mt-4">
                <button
                    onClick={handleReset}
                    className="text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                    Clear Filters
                </button>
                <button className="px-6 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
                    Apply Filters
                </button>
            </div>
        </div>
    );
}

export default SideFilter;
