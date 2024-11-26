import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteMap } from "./route-map";

const router = createBrowserRouter(RouteMap);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
