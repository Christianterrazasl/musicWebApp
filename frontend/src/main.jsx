import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import GeneroPage from "./pages/GeneroPage";
import ArtistaPage from "./pages/ArtistaPage";

import './main.css';

import AdminPage from "./pages/admin/AdminPage";
import AdminGeneroFormPage from './pages/admin/form/AdminGeneroFormPage';
import AdminGeneroPage from "./pages/admin/AdminGeneroPage";
import AdminArtistaFormPage from './pages/admin/form/AdminArtistaFormPage';
import AdminArtistaPage from './pages/admin/AdminArtistaPage';
import AdminAlbumFormPage from './pages/admin/form/AdminAlbumFormPage';
import AdminAlbumPage from './pages/admin/AdminAlbumPage';
import AdminCancionFormPage from './pages/admin/form/AdminCancionFormPage';



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
    path: "/admin/form/:idGenero",
  },
  {
    element: <AdminGeneroFormPage/>,
    path: "/admin/form/",
  },
  {
    element: <AdminGeneroPage/>,
    path: "/admin/artista/:idGenero",
  },
  {
    element: <AdminArtistaFormPage/>,
    path: "/admin/artista/form/:idGenero",
  },
  {
    element: <AdminArtistaFormPage/>,
    path: "/admin/artista/form/:idGenero/:idArtista",
  },
  {
    element: <AdminArtistaPage/>,
    path:'/admin/album/:idArtista',
  },
  {
    path: "/admin/album/form/:idArtista",
    element: <AdminAlbumFormPage/>,
  },
  {
    path: "/admin/album/form/:idArtista/:idAlbum",
    element: <AdminAlbumFormPage/>,
  },
  {
    element: <AdminAlbumPage/>,
    path: "/admin/cancion/:idAlbum",
  },
  {
    element: <AdminCancionFormPage/>,
    path: "/admin/cancion/form/:idAlbum",
  },
  {
    element: <AdminCancionFormPage/>,
    path: "/admin/cancion/form/:idAlbum/:idCancion",
  }

  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
