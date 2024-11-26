import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserAlt } from 'react-icons/fa';


const DealerCard = ({ dealer }) => {
    return (

        <div className='flex flex-col border rounded-xl border-gray-200'>
            <div className="good">
                <img
                    src="https://via.placeholder.com/150"
                    alt={dealer?.user.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                />
            </div>


            <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">

                <div className="text-left space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <FaUserAlt className="text-primary" />
                        {dealer?.user?.name}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-primary" />
                        <p className="text-sm">{dealer?.user?.address}</p>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-primary" />
                        <p className="text-sm">{dealer?.user?.location}</p>
                    </div>

                    <div className="space-y-2 text-gray-600 mt-4">
                        {/* Phone */}
                        <div className="flex items-center gap-2 text-sm">
                            <FaPhoneAlt className="text-primary" />
                            <p>{dealer?.user?.phone}</p>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <FaEnvelope className="text-primary" />
                            <p>{dealer?.user?.email}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default DealerCard;