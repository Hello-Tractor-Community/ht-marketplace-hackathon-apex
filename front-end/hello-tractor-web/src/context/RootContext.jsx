import PropTypes from "prop-types";
import { ImageProvider } from "./ImageContext/ImageProvider";
import UserProvider from "./UserContext/UserProvider";

const RootContext = ({ children }) => {
  return (
    <UserProvider>
      <ImageProvider>{children}</ImageProvider>
    </UserProvider>
  );
};

RootContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootContext;
