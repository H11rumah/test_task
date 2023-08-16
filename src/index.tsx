import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: "/news",
                element: <NewsPage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "*",
                element: <MainPage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<RouterProvider router={router} />);
