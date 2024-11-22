import { useState } from "react";

function TopFilter() {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [condition, setCondition] = useState("");

  const handleReset = () => {
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setCondition("");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
      {/* Categories Filter */}
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
        <label htmlFor="category" className="text-sm font-medium">Category</label>
        <select
          id="category"
          className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-auto"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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

      {/* Price Range Filter */}
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
        <label htmlFor="minPrice" className="text-sm font-medium">Price</label>
        <div className="flex gap-2 w-full lg:w-auto">
          <input
            id="minPrice"
            type="number"
            className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-auto"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            min="0"
          />
          <input
            id="maxPrice"
            type="number"
            className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-auto"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            min="0"
          />
        </div>
      </div>

      {/* Condition Filter */}
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
        <label htmlFor="condition" className="text-sm font-medium">Condition</label>
        <select
          id="condition"
          className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full lg:w-auto"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value="" disabled>
            Select Condition
          </option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col lg:flex-row gap-4 items-center w-full lg:w-auto">
        {/* Clear Filters Button */}
        <button
          onClick={handleReset}
          className="text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none w-full lg:w-auto"
        >
          Clear Filters
        </button>

        {/* Apply Filters Button */}
        <button
          className="px-6 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors w-full lg:w-auto"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default TopFilter;