import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  const [open, setOpen] =  useState(true)

  console.log('open',open)

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 768;
      if (ismobile !== isMobile) {
        setIsMobile(ismobile);
        setOpen(window.innerWidth > 768)
      }
    }, false);
  }, [isMobile]);
  return (
    <div className={`w-auto flex flex-row font-satoshi overflow-hidden mt-2 lg:ove-`}>
    <div className="flex flex-1 flex-col w-auto">
      <div className="flex-1 p-4 min-h-0 overflow-auto py-6 w-auto">
      <div className="w-full sm:w-[90%] container mx-auto">{children}</div>
      </div>
    </div>
  </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout