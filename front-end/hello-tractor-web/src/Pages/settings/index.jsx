import { useState } from "react";
import Listing from "@/components/marketplace/listings/Listing";
import SettingsLayout from "@/components/layout/SettingsLayout";
import MainLayout from "@/components/layout/MainLayout";
import Navbar from "@/components/Navbar";
import MyListings from "./mylistings";
import ChatSupport from "./ChatSupport";

const Settings = () => {
  const [currentTab, setCurrentTab] = useState("Tractor Listings");

  return (
    <div className="h-full overflow-hidden"> {/* Hide the scrollbar on the parent */}
      <Navbar />
      <MainLayout>
        <SettingsLayout currentTab={currentTab} setCurrentTab={setCurrentTab}>
          <div className="w-full mx-auto h-full flex flex-col gap-2">
            {currentTab === "Tractor Listings" && (
              <div className="flex flex-col gap-2">
                <div className="h-full overflow-scroll scrollbar-hidden"> {/* Content scrollable, scrollbar hidden */}
                  <MyListings />
                </div>
              </div>
            )}
            {currentTab === "Inbox" && (
              <div className="flex flex-col gap-6 w-full">
                <div className="h-full overflow-scroll scrollbar-hidden"> {/* Content scrollable, scrollbar hidden */}
                  <ChatSupport />
                </div>
              </div>
            )}
            {currentTab === "Bookings" && (
              <div className="flex flex-col gap-6 w-full">
                <h2>Bookings</h2>
                <Listing />
              </div>
            )}
            {currentTab === "Profile" && (
              <div className="flex flex-col gap-6 w-full">
                <h2>Profile</h2>
                <Listing />
              </div>
            )}
          </div>
        </SettingsLayout>
      </MainLayout>
    </div>
  );
};

export default Settings;