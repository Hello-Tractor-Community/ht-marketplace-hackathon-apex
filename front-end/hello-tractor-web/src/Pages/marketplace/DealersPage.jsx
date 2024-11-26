import { useEffect, useState } from "react";

// filter sidebar
import MainLayout from "@/components/layout/MainLayout";
import Navbar from "../../components/Navbar";
import DealerFilter from "../../components/marketplace/Filters/DealerFilter"


import DealerCard from "@/components/marketplace/listings/Dealers";

import Footer from "../../components/Footer";
import { getDealers } from "@/api/dealer";

const DealersPage = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [dealers, setDealers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDealers = async () => {
            try {
                const data = await getDealers({ is_active: true });
                console.log(data)
                setDealers(data);
            } catch (err) {
                console.log(err);
                setError("Failed to load listings.");
            } finally {
                setLoading(false);
            }
        };

        fetchDealers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-600">{error}</div>;

    return (
        <>
            <Navbar />
            <MainLayout>
                <div className="py-5 pl-4 sm:px-8 lg:pl-16 flex flex-col lg:flex-row gap-6 lg:gap-2 overflow-hidden">
                    {/* Listings */}
                    <div className="flex-1">
                        <div className="flex flex-row gap-1 items-center mb-4 justify-between">
                            <p className="font-bold text-[24px] whitespace-nowrap">
                                Search Results
                                <span className="font-satoshi text-[32px] font-bold"></span>
                            </p>
                            <button
                                className="inline-flex text-sm"
                                onClick={() => setIsToggled(!isToggled)}
                            >
                                <svg
                                    fill="#000000"
                                    className="icon line-color"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    id="filter"
                                    data-name="Line Color"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        id="primary"
                                        d="M5,4V6.64a1,1,0,0,0,.23.64l4.54,5.44a1,1,0,0,1,.23.64V21l4-2V13.36a1,1,0,0,1,.23-.64l4.54-5.44A1,1,0,0,0,19,6.64V4a1,1,0,0,0-1-1H6A1,1,0,0,0,5,4Z"
                                    ></path>
                                </svg>

                                {isToggled ? "Hide Advanced Filters" : "Show Advanced Filters"}
                            </button>
                        </div>

                        {/* search input */}

                        <div className="mt-2 mb-4">
                            <label
                                htmlFor="hs-trailing-button-add-on-with-icon"
                                className="sr-only"
                            >
                                Label
                            </label>
                            <div className="flex rounded-lg shadow-sm">
                                <input
                                    type="text"
                                    placeholder="Search a dealer"
                                    className="py-3 px-4 block w-full border border-gray-300 shadow-sm rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none "
                                />
                                <button
                                    type="button"
                                    className="w-[4.875rem] h-[2.875rem] shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-primary text-white hover:bg-primary focus:outline-none  disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* end search input */}

                        {/* if togled show this  */}

                        {isToggled ? (
                            // If toggled, show this
                            <div className="mx-auto py-1 px-1 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 lg:gap-2">
                                <div className="lg:w-1/4 w-full overflow-hidden">
                                    <DealerFilter />
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                                    {dealers.map((dealer) => (
                                        <div key={dealer.id} className="p-4 border rounded shadow">
                                            <h3 className="font-bold text-lg">{dealer.user.name}</h3>
                                            <p>Email: {dealer.user.email}</p>
                                            <p>Phone: {dealer.user.phone_number}</p>
                                            <p>Address: {dealer.user.address}</p>
                                            <p>Verified: {dealer.is_verified ? 'Yes' : 'No'}</p>
                                        </div>
                                        // <DealerCard key={dealer.id} id={dealer.id} />
                                    ))}
                                </div>

                            </div>
                        ) : (
                            // Else, show this
                            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
                                {dealers.map((dealer) => (
                                    // <SingleListing key={tractor.id} id={tractor.id} />

                                    // <DealerCard key={dealer.id} id={dealer.id} />
                                    <div key={dealer.id} className="p-4 border rounded shadow">
                                        <h3 className="font-bold text-lg">{dealer.user.name}</h3>
                                        <p>Email: {dealer.user.email}</p>
                                        <p>Phone: {dealer.user.phone_number}</p>
                                        <p>Address: {dealer.user.address}</p>
                                        <p>Verified: {dealer.is_verified ? 'Yes' : 'No'}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </MainLayout>
            <Footer />
        </>
    );
};

export default DealersPage;
