import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SettingsSidebar from "../ProfileSidebar";

const SettingsLayout = ({ currentTab,setCurrentTab,children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 1200;
      setIsMobile(isMobileNow);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`w-auto h-screen flex ${isMobile ? "flex-col":"flex-row"}  gap-5 font-satoshi overflow-hidden lg:ove-`}>
    <SettingsSidebar isMobile={isMobile} currentTab={currentTab} setCurrentTab={setCurrentTab} />
    <div className="flex flex-1 flex-col h-full min-h-0 overflow-auto gap-2 w-full">
        {children}
    </div>
  </div>
  )
}

SettingsLayout.propTypes = {
  children: PropTypes.node.isRequired, 
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

export default SettingsLayout