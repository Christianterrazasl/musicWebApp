import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
// import GeneroPage from "./pages/GeneroPage";
// import ArtistaPage from "./pages/ArtistaPage";
// import AdminPage from "./pages/AdminPage";
// import AdminGeneroPage from "./pages/AdminGeneroPage";
// import AdminArtistaPage from "./pages/AdminArtistaPage";


const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
