import { createBrowserRouter } from "react-router-dom";
import { ErrorScreen } from "@/pages/ErrorScreen";
import Dashboard from "@/pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element:  '',
        errorElement: <ErrorScreen/>,
        children: [
            { path: "/", element: <Dashboard /> },
        ]
    }
]);