import ProtectedAdminAccessRoute from "@/components/authentication/protected-admin-access-route";
import { ProtectedSellerRoute } from "@/components/authentication/protected-seller-route";
import { lazyLoad } from "@/utils/helpers/lazyLoad";

export const RouteMap = [
  {
    path: "",
    element: lazyLoad(() => import("../pages/marketplace/Homepage")),
  },
  {
    path: "/",
    children: [
      {
        path: "login",
        element: lazyLoad(() => import("../pages/auth/Login")),
      },
      {
        path: "signup",
        element: lazyLoad(() => import("../pages/auth/Signup")),
      },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedAdminAccessRoute />,
    children: [
      {
        path: "",
        element: lazyLoad(() => import("../pages/admin/Homepage")),
      },
    ],
  },
  {
    path: "/seller-dashboard",
    element: <ProtectedSellerRoute />,
    children: [
      {
        path: "",
        element: lazyLoad(() => import("../pages/seller-dashboard")),
      },
      {
        path: "add-listing",
        element: lazyLoad(() =>
          import("../pages/seller-dashboard/mylistings/AddListing")
        ),
      },
    ],
  },
  {
    path: "/marketplace",
    children: [
      {
        path: "",
        element: lazyLoad(() => import("../pages/marketplace/Homepage")),
      },
      {
        path: "tractor-details/:id",
        element: lazyLoad(() => import("../pages/marketplace/ListingDetails")),
      },
      {
        path: "search",
        element: lazyLoad(() => import("../pages/marketplace/ListingPage")),
      },
      {
        path: "cart",
        element: lazyLoad(() => import("../pages/marketplace/CartPage")),
      },
      {
        path: "tractor-operators",
        element: lazyLoad(() =>
          import("../pages/marketplace/TractorOperators")
        ),
      },
    ],
  },
];
