import SingleListing from './SingleListing';

// eslint-disable-next-line react/prop-types
const Listing = ({ numberOfListings = 12 }) => {
    const listings = Array.from({ length: numberOfListings });

    return (
        <div className="py-5 pl-4 sm:px-8 lg:pl-16 flex flex-col lg:flex-row gap-6 lg:gap-2 overflow-hidden">
            {/* Listings */}
            <div className="flex-1">
                <div className="flex flex-row gap-1 items-center mb-4 justify-between">
                    <p className="font-bold text-[24px] whitespace-nowrap">
                        Featured Listings
                    </p>
                    <a href="#all-listings" className="text-primary font-semibold hover:underline">
                        See All
                    </a>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
                    {listings.map((_, index) => (
                        <SingleListing key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Listing;
