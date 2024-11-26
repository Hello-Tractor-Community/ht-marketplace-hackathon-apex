import { useState } from "react";
import SettingsLayout from "@/components/layout/SettingsLayout";
import MainLayout from "@/components/layout/MainLayout";
import Navbar from "@/components/Navbar";
import MyListings from "./mylistings";
import Bookings from "./mylistings/Bookings";
import ProfileDetails from "./profile/ProfileDetails";
import ChatSupport from "./ChatSupport";

const Settings = () => {
  const [currentTab, setCurrentTab] = useState("Tractor Listings");

  return (
    <div className="h-full overflow-hidden">
      <Navbar />
      <MainLayout>
        <SettingsLayout currentTab={currentTab} setCurrentTab={setCurrentTab}>
          <div className="w-full mx-auto h-full flex flex-col gap-2">
            {currentTab === "Tractor Listings" && (
              <div className="flex flex-col gap-2">
                <div className="h-full overflow-scroll scrollbar-hidden">
                  <MyListings />
                </div>
              </div>
            )}
            {currentTab === "Inbox" && (
              <div className="flex flex-col gap-6 w-full">
                <div className="h-full overflow-scroll scrollbar-hidden">
                  <ChatSupport />
                </div>
              </div>
            )}
            {currentTab === "Bookings" && (
              <div className="flex flex-col gap-6 w-full">
                <Bookings />
              </div>
            )}
            {currentTab === "Profile" && (
              <div className="flex flex-col gap-6 w-full">
                <h2>Profile</h2>
                <ProfileDetails />
              </div>
            )}
          </div>
        </SettingsLayout>
      </MainLayout>
    </div>
  );
};

export default Settings;
