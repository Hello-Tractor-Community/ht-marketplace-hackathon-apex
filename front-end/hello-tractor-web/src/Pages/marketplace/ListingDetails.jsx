import Footer from '@/components/Footer';
import ListingDetail from '@/components/marketplace/listings/ListingDetail';
import Navbar from '@/components/Navbar';

const ListingDetails = () => {
    const property = {
        images: [
            "/cdn/images/track1.jpg",
            "/cdn/images/track.jpg",
        ],
        address: "123 Main St, New York, NY",
        price: "$1,250,000",
        mortgageInfo: "Approx. $5,000/month",
        features: ["3 Beds", "2 Baths", "1,800 sqft"],
        description:
            "This is a stunning property located in the heart of the city with easy access to amenities and transportation. The home features modern finishes, an open layout, and a spacious backyard perfect for entertaining.",
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gray-50 p-6">
                <div className="max-w-7xl mx-auto">
                    <ListingDetail property={property} />
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default ListingDetails;
