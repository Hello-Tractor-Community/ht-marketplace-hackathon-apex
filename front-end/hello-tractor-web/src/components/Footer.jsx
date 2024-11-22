const Footer = () => {
    return (
        <div className="w-full pt-4 md:pt-16 pb-5 bg-gray-100 px-4 sm:px-6 lg:px-8 flex flex-col">
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-2 lg:grid-cols-5 mb-4 w-full">

                {/* Logo Section */}
                <div className="w-full lg:col-span-1 col-span-2">
                    <div className="grow">
                        <div className="flex items-center grayscale">
                            <img src='/cdn/images/logo.svg' className='h-9' alt='Logo' />
                        </div>
                    </div>
                </div>

                {/* Product Section */}
                <div className="w-full col-span-1 flex flex-col">
                    <div className="w-full">
                        <span className="text-black font-bold">Product</span>
                    </div>
                    <div className="w-full mt-2 md:mt-5 flex flex-col">
                        <span className="text-gray-500 text-[16px] md:text-lg mt-1 md:mt-1.5 mb-1 md:mb-1.5">Dealer Listings</span>
                        <span className="text-gray-500 text-[16px] md:text-lg mt-1 md:mt-1.5 mb-1 md:mb-1.5">Trained Tractor Operators</span>
                    </div>
                </div>

                {/* Company Section */}
                <div className="w-full col-span-1 flex flex-col">
                    <div className="w-full">
                        <span className="text-black font-bold">Company</span>
                    </div>
                    <div className="w-full mt-2 md:mt-5 flex flex-col">
                        <span className="text-gray-500 text-[16px] md:text-lg mt-1 md:mt-1.5 mb-1 md:mb-1.5">Privacy policy</span>
                        <span className="text-gray-500 text-[16px] md:text-lg mt-1 md:mt-1.5 mb-1 md:mb-1.5">Terms & Conditions</span>
                    </div>
                </div>

                {/* Orders Section */}
                <div className="w-full col-span-1 flex flex-col">
                    <div className="w-full">
                        <span className="text-black font-bold">Orders</span>
                    </div>
                    <div className="w-full mt-2 md:mt-5 flex flex-col">
                        <span className="text-gray-500 text-[16px] md:text-lg mt-1 md:mt-1.5 mb-1 md:mb-1.5">My orders</span>
                        <span className="text-gray-500 text-[16px] md:text-lg mt-1 md:mt-1.5 mb-1 md:mb-1.5">Wish List</span>
                    </div>
                </div>

                {/* Help Section */}
                <div className="w-full col-span-1 flex flex-col">
                    <div className="w-full">
                        <span className="text-black font-bold">Help</span>
                    </div>
                    <div className="w-full mt-5 flex flex-col">
                        <span className="text-gray-500 text-[16px] md:text-lg mt-1 md:mt-1.5 mb-1 md:mb-1.5">Contacts</span>
                        <span className="text-gray-500 text-[16px] md:text-lg mt-1 md:mt-1.5 mb-1 md:mb-1.5">FAQ</span>
                    </div>
                </div>

            </div>

            {/* Copyright Section */}
            <div className="container w-full flex flex-wrap justify-center items-center mx-auto border-t border-solid border-gray-200">
                <div className="w-full text-center pt-5">
                    <div className="text-gray-400">
                        &copy; {new Date().getFullYear()} Apex Tractors - Hello Tractor. All rights reserved
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
