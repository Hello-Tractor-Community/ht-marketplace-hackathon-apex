import { useState } from "react";
import PropTypes from "prop-types";
import ImageContext from "./ImageContext";

export const ImageProvider = ({ children }) => {
  const [imageUrls, setImageUrls] = useState([]);

  const addImageUrl = (url, alt) => {
    setImageUrls((prev) => [...prev, { url, alt }]);
  };

  const removeImageUrl = (url) => {
    setImageUrls((prev) => prev.filter((image) => image.url !== url));
  };

  return (
    <ImageContext.Provider value={{ imageUrls, addImageUrl, removeImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};

ImageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
