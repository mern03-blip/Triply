import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../layout/Layout";
import LazyComponent from "./LazyComponent";
import NetworkErrorFallback from "../pages/error/ErrorScreen";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import AuthLayout from "../pages/Auth/AuthLayout/AuthLayout";
export const router = createBrowserRouter([

  // Public Routes
  {
    path: "/auth",
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: "/auth",
        element: <LazyComponent path="/login" />,
      },
      // {
      //   path: "login",
      //   element: <LazyComponent path="/login" />,
      // },
      {
        path: "forget-password",
        element: <LazyComponent path="/forget-password" />,
      },
      {
        path: "reset-password",
        element: <LazyComponent path="/reset-password" />,
      },
      {
        path: "verify-otp",
        element: <LazyComponent path="/verify-otp" />,
      },
    ]
  },

  // Private Routes
  {
    path: "/",
    element: (
      <PrivateRoute>
        <AppLayout />
      </PrivateRoute>
    ),
    errorElement: <NetworkErrorFallback />,
    children: [
      //  dashboard route
      {
        path: "/",
        element: <LazyComponent path="/" />,
      },
      {
        path: "userManagement",
        element: <LazyComponent path="/userManagement" />,
      },
      {
        path: "userDetail/:id",
        element: <LazyComponent path="/userDetail/:id" />,
      },
      {
        path: "editUserDetail/:id",
        element: <LazyComponent path="/editUserDetail/:id" />,
      },

      {
        path: "destination",
        element: <LazyComponent path="/destination" />,
      },
      {
        path: "flight-transport",
        element: <LazyComponent path="/flight-transport" />,
      },
      {
        path: "accommodation",
        element: <LazyComponent path="/accommodation" />,
      },
      {
        path: "restaurant-menu",
        element: <LazyComponent path="/restaurant-menu" />,
      },
      {
        path: "activity-experience",
        element: <LazyComponent path="/activity-experience" />,
      },
      {
        path: "trip-approval",
        element: <LazyComponent path="/trip-approval" />,
      },
      {
        path: "revenue-reports",
        element: <LazyComponent path="/revenue-reports" />,
      },
      {
        path: "my-profile",
        element: <LazyComponent path="/my-profile" />,
      },
      {
        path: "notifications",
        element: <LazyComponent path="/notifications" />,
      },
      //  {
      //   path: "/*",
      //   element: <LazyComponent path="/" />,
      // },
    ],
  },
]);
