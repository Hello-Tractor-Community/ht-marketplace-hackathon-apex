import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserAlt } from 'react-icons/fa';

const Sellers = () => {
    // Hardcoded seller data (multiple sellers)
    const sellers = [
        {
            name: 'John Doe',
            image: 'https://via.placeholder.com/150',
            address: '123 Main St, Cityville',
            location: 'Cityville, Country',
            phone: '+1234567890',
            email: 'john@example.com'
        },
        {
            name: 'Jane Smith',
            image: 'https://via.placeholder.com/150',
            address: '456 Another St, Townsville',
            location: 'Townsville, Country',
            phone: '+0987654321',
            email: 'jane@example.com'
        },
        {
            name: 'Alice Johnson',
            image: 'https://via.placeholder.com/150',
            address: '789 Road St, Villagetown',
            location: 'Villagetown, Country',
            phone: '+1122334455',
            email: 'alice@example.com'
        },
        {
            name: 'Bob Martin',
            image: 'https://via.placeholder.com/150',
            address: '1010 Oak St, Bigcity',
            location: 'Bigcity, Country',
            phone: '+2233445566',
            email: 'bob@example.com'
        },
        {
            name: 'Charlie Brown',
            image: 'https://via.placeholder.com/150',
            address: '2020 Pine St, Smalldale',
            location: 'Smalldale, Country',
            phone: '+3344556677',
            email: 'charlie@example.com'
        }
    ];

    return (
        <div className="py-5 px-4 sm:px-8 lg:px-16 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Dealers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sellers.map((seller, index) => (
                    <SellerCard key={index} seller={seller} />
                ))}
            </div>
        </div>
    );
};

const SellerCard = ({ seller }) => {
    return (

        <div className='flex flex-col border rounded-xl border-gray-200'>
            <div className="good">
                <img
                    src={seller?.image}
                    alt={seller?.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                />
            </div>


            <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
                
                <div className="text-left space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <FaUserAlt className="text-primary" />
                        {seller.name}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-primary" />
                        <p className="text-sm">{seller.address}</p>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-primary" />
                        <p className="text-sm">{seller.location}</p>
                    </div>

                    <div className="space-y-2 text-gray-600 mt-4">
                        {/* Phone */}
                        <div className="flex items-center gap-2 text-sm">
                            <FaPhoneAlt className="text-primary" />
                            <p>{seller.phone}</p>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <FaEnvelope className="text-primary" />
                            <p>{seller.email}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        
    );
};

export default Sellers;