import PropTypes from "prop-types";
import { FaTractor } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";

const SettingsSidebar = ({ isMobile, currentTab, setCurrentTab }) => {
  return (
    <div
      className={`flex gap-2 ${isMobile ? "w-full flex-col sm:flex-row" : "w-[20%] h-52 flex-col"} p-2 border rounded-md overflow-auto scrollbar-hidden`}
    >
      <div
        onClick={() => setCurrentTab("Tractor Listings")}
        className={`${currentTab === "Tractor Listings"
            ? "border-border bg-secondary text-secondary-foreground"
            : "border bg-white border-gray-200"
          } cursor-pointer p-2 rounded-sm shadow-sm flex flex-row items-center gap-2`}
      >
        <FaTractor />
        <p className="text-[14px] text-center font-satoshi">My Listings</p>
      </div>
      <div
        onClick={() => setCurrentTab("Inbox")}
        className={`${currentTab === "Inbox"
            ? "border-border bg-secondary text-secondary-foreground"
            : "border bg-white border-gray-200"
          } cursor-pointer p-2 rounded-sm shadow-sm flex flex-row items-center gap-2`}
      >
        <FaMessage />
        <p className="text-[14px] text-center font-satoshi">Inbox</p>
      </div>
      <div
        onClick={() => setCurrentTab("Bookings")}
        className={`${currentTab === "Bookings"
            ? "border-border bg-secondary text-secondary-foreground"
            : "border bg-white border-gray-200"
          } cursor-pointer p-2 rounded-sm shadow-sm flex flex-row items-center gap-2`}
      >
        <TbReportSearch />
        <p className="text-[14px] text-center font-satoshi">Bookings</p>
      </div>
      <div
        onClick={() => setCurrentTab("Profile")}
        className={`${currentTab === "Profile"
            ? "border-border bg-secondary text-secondary-foreground"
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