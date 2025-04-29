import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import AdminPanel from '../components/AdminPanel'
import { useEffect, useState } from 'react'

function AdminPage() {
    

  return (
    <AdminLayout>
        <AdminPanel tipo="genero"/>
    </AdminLayout>
  )
}

export default AdminPage