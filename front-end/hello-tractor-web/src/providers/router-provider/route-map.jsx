import { lazy, Suspense } from "react";
// import { ProtectedRoute } from "../../components/authentication/protected-route";
// import MainLayout from "../../components/layout/MainLayout";
// import SettingsLayout from "../../components/layout/SettingsLayout";
// import ErrorBoundary from "../../components/utilities/ErrorBoundary";
import Spinner from "../../components/ui/Spinner";

const lazyLoad = (importFunc) => {
  const LazyComponent = lazy(importFunc);
  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />
    </Suspense>
  );
};

export const RouteMap = [
  {
    path: "/login",
    element: lazyLoad(() => import("../../pages/auth/Login")),
  },
  {
    path: "all-listings",
    element: lazyLoad(() => import("../../pages/marketplace/ListingPage")),
  },
  {
    path: "cart",
    element: lazyLoad(() => import("../../pages/marketplace/CartPage")),
  },
  {
    path: "/tractor-operators",
    element: lazyLoad(() => import("../../pages/marketplace/TractorOperators")),
  },
  {
    path: "/signup",
    element: lazyLoad(() => import("../../pages/auth/Signup")),
  },
  {
    path: "/",
    element: lazyLoad(() => import("../../pages/marketplace/Homepage")),
  },
  {
    path: "/tractor/:id/",
    element: lazyLoad(() => import("../../pages/marketplace/ListingDetails")),
  },
  {
    path: "/settings",
    element: lazyLoad(() => import("../../pages/settings/index")),
  },
  {
    path: "/admin",
    element: lazyLoad(() => import("../../pages/admin/Homepage")),
  },

  {
    path: "/settings/add-listing",
    element: lazyLoad(() =>
      import("../../pages/settings/mylistings/AddListing")
    ),
  },
  // {
  //   element: <ProtectedRoute />,
  //   errorElement: <ErrorBoundary />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <MainLayout />,
  //       children: [
  //         {
  //           path: "marketplace",
  //           handle: { crumb: () => "Marketplace" },
  //           children: [
  //             {
  //               path: "",
  //               element: lazyLoad(() => import("../../pages/marketplace")),
  //               children: [
  //                 {
  //                   path: "",
  //                   element: lazyLoad(() =>
  //                     import("../../pages/marketplace/Homepage")
  //                   ),
  //                 },
  //                 {
  //                   path: "listings",
  //                   element: lazyLoad(() =>
  //                     import("../../components/listings")
  //                   ),
  //                 },
  //                 {
  //                   path: "listings/create",
  //                   element: lazyLoad(() =>
  //                     import("../../components/listings/CreateListings")
  //                   ),
  //                 },
  //               ],
  //             },
  //             {
  //               path: "listing/:id",
  //               children: [
  //                 {
  //                   path: "",
  //                   element: lazyLoad(() =>
  //                     import("../../components/listings/ListingDetail")
  //                   ),
  //                 },
  //                 {
  //                   path: "edit",
  //                   element: lazyLoad(() =>
  //                     import("../../components/listings/EditListing")
  //                   ),
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           path: "dashboard",
  //           children: [
  //             {
  //               path: "",
  //               element: lazyLoad(() => import("../../pages/merchants")),
  //               children: [
  //                 {
  //                   path: "",
  //                   element: lazyLoad(() =>
  //                     import("../../pages/merchants/Homepage")
  //                   ),
  //                 },
  //                 {
  //                   path: "analytics",
  //                   element: lazyLoad(() =>
  //                     import("../../pages/merchants/Analytics")
  //                   ),
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           path: "admin",
  //           handle: { crumb: () => "Admin Panel" },
  //           children: [
  //             {
  //               path: "",
  //               element: lazyLoad(() => import("../../pages/admin")),
  //               children: [
  //                 {
  //                   path: "",
  //                   element: lazyLoad(() => import("../../pages/admin/Homepage")),
  //                 },
  //                 {
  //                   path: "listings",
  //                   element: lazyLoad(() => import("../../components/listings")),
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   element: <ProtectedRoute />,
  //   errorElement: <ErrorBoundary />,
  //   children: [
  //     {
  //       path: "/settings",
  //       handle: { crumb: () => "Settings" },
  //       element: <SettingsLayout />,
  //       children: [
  //         {
  //           index: true,
  //           element: lazyLoad(() => import("../../pages/settings")),
  //         },
  //         {
  //           path: "profile",
  //           element: lazyLoad(() =>
  //             import("../../pages/settings/profile/ProfileDetails")
  //           ),
  //           handle: { crumb: () => "Profile" },
  //           children: [
  //             {
  //               path: "edit",
  //               element: lazyLoad(() =>
  //                 import("../../pages/settings/profile/EditProfile")
  //               ),
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];
