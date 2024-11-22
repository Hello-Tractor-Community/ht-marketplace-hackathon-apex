import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "./providers/router-provider"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
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
    </>
  )
}

export default App
