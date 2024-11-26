import ProtectedAdminAccessRoute from "@/components/authentication/protected-admin-access-route";
import { ProtectedSellerRoute } from "@/components/authentication/protected-seller-route";
import ListingDetail from "@/components/marketplace/listings/ListingDetail";
import AdminHomepage from "@/pages/admin/AdminHomepage";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import CartPage from "@/pages/marketplace/CartPage";
import Homepage from "@/pages/marketplace/Homepage";
import ListingPage from "@/pages/marketplace/ListingPage";
import TractorOperators from "@/pages/marketplace/TractorOperators";
import SellerDashboard from "@/pages/seller-dashboard";
import AddListing from "@/pages/seller-dashboard/mylistings/AddListing";
import { lazyLoad } from "@/utils/helpers/lazyLoad";

export const RouteMap = [
  {
    path: "",
    element: <Homepage />,
  },
  {
    path: "/",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedAdminAccessRoute />,
    children: [
      {
        path: "",
        element: <AdminHomepage />,
      },
    ],
  },
  {
    path: "/seller-dashboard",
    element: <ProtectedSellerRoute />,
    children: [
      {
        path: "",
        element: <SellerDashboard />,
      },
      {
        path: "add-listing",
        element: lazyLoad(() => <AddListing />),
      },
    ],
  },
  {
    path: "/marketplace",
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "tractor-details/:id",
        element: <ListingDetail />,
      },
      {
        path: "search",
        element: <ListingPage />,
      },
      {
        path: "dealers",
        element: lazyLoad(() => import("../pages/marketplace/DealersPage")),
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "tractor-operators",
        element: <TractorOperators />,
      },
    ],
  },
];
