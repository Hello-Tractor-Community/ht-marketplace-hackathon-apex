import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RootContext from "./context/RootContext";
import { AppRouter } from "./routes";

function App() {
  return (
    <RootContext>
      <AppRouter />
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
