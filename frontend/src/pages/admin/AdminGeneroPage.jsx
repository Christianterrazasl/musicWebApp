import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import AdminArtistasPanel from '../../components/admin/AdminArtistasPanel';
import { useParams } from 'react-router-dom'

function AdminGeneroPage() {
    const {idGenero} = useParams();

  return (
    <AdminLayout backButton={true} backButtonLink='/admin'>
        <AdminArtistasPanel idGenero={idGenero}/>
    </AdminLayout>
  )
}

export default AdminGeneroPage