import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RegistrationPage from "./pages/auth/RegistrationPage/RegistrationPage.tsx"
import LoginPage from "./pages/auth/LoginPage/LoginPage.tsx"

const router = createBrowserRouter([
    {
        path: "",
        children: [
            {
                path: "registration",
                element: <RegistrationPage />,
            },

            {
                path: "login",
                element: <LoginPage />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
