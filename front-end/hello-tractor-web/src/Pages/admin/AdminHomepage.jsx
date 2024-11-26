import { useState } from "react";
import SettingsLayout from "./SettingsLayout";
import MainLayout from "@/components/layout/MainLayout";
import Navbar from "@/components/Navbar";

import Analytics from "./Analytics";
import TractorListing from "./TractorListing";
import TractorOperators from "./TractorOperators";
import Customers from "./Customers";
import Merchants from "./Merchants";

import ProfileDetails from "./ProfileDetails";

const AdminHomepage = () => {
  const [currentTab, setCurrentTab] = useState("Analytics");

  return (
    <div className="h-full overflow-hidden">
      {" "}
      {/* Hide the scrollbar on the parent */}
      <Navbar />
      <MainLayout>
        <SettingsLayout currentTab={currentTab} setCurrentTab={setCurrentTab}>
          <div className="w-full mx-auto h-full flex flex-col gap-2">
            {currentTab === "Analytics" && (
              <div className="flex flex-col gap-2">
                <div className="h-full overflow-scroll scrollbar-hidden">
                  {" "}
                  {/* Content scrollable, scrollbar hidden */}
                  <Analytics />
                </div>
              </div>
            )}
            {currentTab === "Tractor Listing" && (
              <div className="flex flex-col gap-6 w-full">
                <div className="h-full overflow-scroll scrollbar-hidden">
                  {" "}
                  {/* Content scrollable, scrollbar hidden */}
                  <TractorListing />
                </div>
              </div>
            )}
            {currentTab === "Tractor Operators" && (
              <div className="flex flex-col gap-6 w-full">
                <TractorOperators />
              </div>
            )}
            {currentTab === "Merchants" && (
              <div className="flex flex-col gap-6 w-full">
                <Merchants />
              </div>
            )}
            {currentTab === "Customers" && (
              <div className="flex flex-col gap-6 w-full">
                <Customers />
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

export default AdminHomepage;
