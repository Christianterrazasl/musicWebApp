import React from 'react'
import { useParams } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout'
import AdminAlbumsPanel from '../../components/admin/AdminAlbumsPanel'

function AdminArtistaPage() {
  
    const {idArtista} = useParams();  

  return (
    <AdminLayout backButton={true}>
        <AdminAlbumsPanel idArtista={idArtista}/>
    </AdminLayout>
  )
  
}

export default AdminArtistaPage