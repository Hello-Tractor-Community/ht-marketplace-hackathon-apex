import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserAlt } from 'react-icons/fa';

const TrainedOperators = () => {
    // Hardcoded operator data (multiple operators)
    const operators = [
        {
            name: 'Sam Green',
            image: 'https://via.placeholder.com/150',
            location: 'Greenfield, Country',
            phone: '+1234567890',
            email: 'samgreen@example.com'
        },
        {
            name: 'Lily White',
            image: 'https://via.placeholder.com/150',
            location: 'White Valley, Country',
            phone: '+0987654321',
            email: 'lilywhite@example.com'
        },
        {
            name: 'Lily White',
            image: 'https://via.placeholder.com/150',
            location: 'White Valley, Country',
            phone: '+0987654321',
            email: 'lilywhite@example.com'
        },
        {
            name: 'Lily White',
            image: 'https://via.placeholder.com/150',
            location: 'White Valley, Country',
            phone: '+0987654321',
            email: 'lilywhite@example.com'
        },
    ];

    return (
        <div className="py-5 px-4 sm:px-8 lg:px-16 overflow-hidden">
            <h2 className="text-2xl font-bold text-foreground mb-4">Trained Tractor Operators</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {operators.map((operator, index) => (
                    <OperatorCard key={index} operator={operator} />
                ))}
            </div>
        </div>
    );
};

const OperatorCard = ({ operator }) => {
    return (
        <div className='flex flex-col border rounded-xl border-border'> 
            <div className="w-full mb-4">
                <img
                    src={operator.image}
                    alt={operator.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                />
            </div>

            {/* Operator Details */}
            <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">  
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <FaUserAlt className="text-primary" />
                    {operator.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-foreground">
                    <FaMapMarkerAlt className="text-primary" />
                    <p className="text-sm">{operator.location}</p>
                </div>

                {/* Contact Information */}
                <div className="space-y-2 text-foreground mt-4">
                    {/* Phone */}
                    <div className="flex items-center gap-2 text-sm">
                        <FaPhoneAlt className="text-primary" />
                        <p>{operator.phone}</p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2 text-sm">
                        <FaEnvelope className="text-primary" />
                        <p>{operator.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainedOperators;
