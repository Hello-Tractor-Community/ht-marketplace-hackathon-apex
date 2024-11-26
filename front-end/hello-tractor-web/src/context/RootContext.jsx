import PropTypes from "prop-types";
import { ImageProvider } from "./ImageContext/ImageProvider";
import UserProvider from "./UserContext/UserProvider";
import SellerProvider from "./SellerContext/SellerProvider";
import AccessProvider from "./AdminAccess/AccessProvider";

const RootContext = ({ children }) => {
  return (
    <UserProvider>
      <SellerProvider>
        <ImageProvider>
          <AccessProvider>{children}</AccessProvider>
        </ImageProvider>
      </SellerProvider>
    </UserProvider>
  );
};

RootContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootContext;
