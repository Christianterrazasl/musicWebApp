import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import GeneroPage from "./pages/GeneroPage";
import ArtistaPage from "./pages/ArtistaPage";

import './main.css';

import AdminPage from "./pages/AdminPage";
import AdminGeneroFormPage from './pages/AdminGeneroFormPage';
// import AdminGeneroPage from "./pages/AdminGeneroPage";
// import AdminArtistaPage from "./pages/AdminArtistaPage";


const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <GeneroPage/>,
    path: "/genero/:id",
  },
  {
    element: <ArtistaPage/>,
    path: "/artista/:id",
  },
  {
    element: <AdminPage/>,
    path: "/admin",
  },
  {
    element: <AdminGeneroFormPage/>,
    path: "/admin/form",
  }
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
