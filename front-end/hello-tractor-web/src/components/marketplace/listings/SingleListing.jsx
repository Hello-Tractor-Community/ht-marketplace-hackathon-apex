import { Link } from 'react-router-dom';

const SingleListing = () => {
    return (
        <div className="flex gap-2 p-2 border border-gray-200 rounded-lg shadow-lg min-h-[200px] max-w-[500px] bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Image Section */}
            <div className="flex-shrink-0 w-[200px] h-[200px] overflow-hidden rounded-md">
                <img
                    src="https://via.placeholder.com/200"
                    alt="Product"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-between flex-1 overflow-hidden">
                {/* Title */}

                
                <Link to={`/tractor/:id`}   className="overflow-hidden">
                    <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                        Premium Tractor - Second-hand, fully serviced
                    </h2>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        This tractor comes with advanced features and top-tier maintenance, ensuring efficiency and reliability for your agricultural needs.
                    </p>
                </Link>

                {/* Price */}
                <div className="mt-2">
                    <p className="text-lg font-bold text-primary">$8,500</p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-4">
                    {/* Add to Wishlist Button */}
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

                    {/* Enquire Button */}
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex-1">
                        Enquire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleListing;