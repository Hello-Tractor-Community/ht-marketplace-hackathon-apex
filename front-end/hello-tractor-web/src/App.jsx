import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "./providers/router-provider";
import { ToastContainer } from "react-toastify";
import RootContext from "./context/RootContext";

function App() {
  return (
    <RootContext>
      <RouterProvider />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition="slide"
      />
    </RootContext>
  );
}

export default App;
