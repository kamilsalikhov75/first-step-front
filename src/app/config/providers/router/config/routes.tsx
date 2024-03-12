import { HomePage } from "pages/home";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../ui/root-layout";
import { AppointmentsPage, CreateAppointmentPage } from "pages/appointments";
import { AdminAppointmentsPage } from "pages/admin";
import { PrivateRoute } from "../ui/private-route";
import { Role } from "entities/auth/types";
import { ServicesPage } from "pages/services";
import { ContactsPage } from "pages/contacts";
import { AboutPage } from "pages/about";
import { FeedbackPage } from "pages/feedback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/feedback",
        element: <FeedbackPage />,
      },
      {
        path: "/appointments",
        children: [
          {
            path: "",
            element: (
              <PrivateRoute>
                <AppointmentsPage />
              </PrivateRoute>
            ),
          },
          {
            path: "create",
            element: (
              <PrivateRoute>
                <CreateAppointmentPage />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/admin",
        children: [
          {
            path: "appointments",
            element: (
              <PrivateRoute role={Role.Admin}>
                <AdminAppointmentsPage />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);
