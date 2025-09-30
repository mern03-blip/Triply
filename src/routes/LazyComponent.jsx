import { Suspense, lazy } from "react";
import Loading from "../components/loading/Loading";

const componentMap = {
  // login
  "/login": lazy(() => import("../pages/Auth/Login")),
  "/forget-password": lazy(() => import("../pages/Auth/ForgetPassword")),
  "/reset-password": lazy(() => import("../pages/Auth/ResetPassword")),
  "/verify-otp": lazy(() => import("../pages/Auth/OtpScreen")),

  // dashboard
  "/": lazy(() => import("../pages/dashboard/Dashboard")),

  //User Management
  "/userManagement": lazy(() => import("../pages/userManagement/UserManagement")),
  "/userDetail/:id": lazy(() => import("../pages/userManagement/userDetail")),
  // "/editUserDetail/:id": lazy(() =>import("../pages/userManagement/editUserDetail")),

  // Destination
  "/destination": lazy(() => import("../pages/destination/Destination")),

  // Flight / Transport
  "/flight-transport": lazy(() => import("../pages/flight&transport/FlightTransport")),

  // Accommodation
  "/accommodation": lazy(() => import("../pages/accommodation/Accommodation")),

  // Restaurant / menu
  "/restaurant-menu": lazy(() => import("../pages/restaurant&menu/RestaurantMenu")),

  // Activity / Expereince
  "/activity-experience": lazy(() => import("../pages/activity&experience/ActivityExperience")),

  // Trip / Approval
  "/trip-approval": lazy(() => import("../pages/tripapproval/TripApproval")),

  //Revenue / Reports
  "/revenue-reports": lazy(() => import("../pages/revenue&reports/RevenueReports")),

  //My profile
  "/my-profile": lazy(() => import("../pages/profile/MyProfile")),

  // Notifications
  "/notifications": lazy(() => import("../pages/notifications/Notifications")),

};

const LazyComponent = ({ path }) => {
  const Component = componentMap[path];
  if (!Component) {
    return <div>Component not found</div>;
  }
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

export default LazyComponent;
