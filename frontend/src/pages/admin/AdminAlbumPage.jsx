import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import AdminCancionesPanel from '../../components/admin/AdminCancionesPanel';
import { useParams } from 'react-router-dom';


function AdminAlbumPage() {
    const {idAlbum} = useParams();

  return (
    <AdminLayout backButton={true}>
        <AdminCancionesPanel idAlbum={idAlbum}/>
    </AdminLayout>
  )
}

export default AdminAlbumPage