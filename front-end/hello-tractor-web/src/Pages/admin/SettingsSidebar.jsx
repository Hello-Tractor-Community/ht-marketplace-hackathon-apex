import PropTypes from "prop-types";
import { FaTractor } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";

const SettingsSidebar = ({ isMobile, currentTab, setCurrentTab }) => {
    return (
        <div
            className={`flex gap-2 ${isMobile ? "w-full flex-col sm:flex-row" : "w-[20%] h-96 flex-col"} showdow p-2 border rounded-md overflow-auto scrollbar-hidden`}
        >
            <h3 className="text-[24px] fw-bold  font-satoshi">Admin Dashboard </h3>
            <div
                onClick={() => setCurrentTab("Analytics")}
                className={`${currentTab === "Analytics"
                    ? "border-border bg-primary text-secondary-foreground"
                    : "border bg-white border-gray-200"
                    } cursor-pointer p-2 rounded-sm shadow-sm flex flex-row items-center gap-2`}
            >
                <FaTractor />

                <p className="text-[14px] text-center font-satoshi">Analytics</p>
            </div>
            <div
                onClick={() => setCurrentTab("Tractor Listing")}
                className={`${currentTab === "Tractor Listing"
                    ? "border-border bg-primary text-secondary-foreground"
                    : "border bg-white border-gray-200"
                    } cursor-pointer p-2 rounded-sm shadow-sm flex flex-row items-center gap-2`}
            >
                <FaMessage />
                <p className="text-[14px] text-center font-satoshi">Tractor Listings</p>
            </div>
            <div
                onClick={() => setCurrentTab("Tractor Operators")}
                className={`${currentTab === "Tractor Operators"
                    ? "border-border bg-primary text-secondary-foreground"
                    : "border bg-white border-gray-200"
                    } cursor-pointer p-2 rounded-sm shadow-sm flex flex-row items-center gap-2`}
            >
                <TbReportSearch />
                <p className="text-[14px] text-center font-satoshi">Tractor Operators</p>
            </div>
            <div
                onClick={() => setCurrentTab("Merchants")}
                className={`${currentTab === "Merchants"
                    ? "border-border bg-primary text-secondary-foreground"
                    : "border bg-white border-gray-200"
                    } cursor-pointer p-2 rounded-sm shadow-sm flex flex-row items-center gap-2`}
            >
                <MdManageAccounts />
                <p className="text-[14px] text-center font-satoshi">Merchants</p>
            </div>
            <div
                onClick={() => setCurrentTab("Customers")}
                className={`${currentTab === "Customers"
                    ? "border-border bg-primary text-secondary-foreground"
                    : "border bg-white border-gray-200"
                    } cursor-pointer p-2 rounded-sm shadow-sm flex flex-row items-center gap-2`}
            >
                <MdManageAccounts />
                <p className="text-[14px] text-center font-satoshi">Customers</p>
            </div>

            <div
                onClick={() => setCurrentTab("Profile")}
                className={`${currentTab === "Profile"
                    ? "border-border bg-primary text-secondary-foreground"
                    : "border bg-white border-gray-200"
                    } cursor-pointer p-2 rounded-sm shadow-sm flex flex-row items-center gap-2`}
            >
                <MdManageAccounts />
                <p className="text-[14px] text-center font-satoshi">Profile</p>
            </div>
        </div>
    );
};

SettingsSidebar.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    currentTab: PropTypes.string.isRequired,
    setCurrentTab: PropTypes.func.isRequired,
};

export default SettingsSidebar;