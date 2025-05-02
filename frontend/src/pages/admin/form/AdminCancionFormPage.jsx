import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AdminCancionFormPage() {
    const [nombre, setNombre] = useState('');
    const [audio, setAudio] = useState(null);
    const navigate = useNavigate();
    const {idAlbum} = useParams();
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('archivoUrl', audio);
  
      fetch(`http://localhost:3000/api/cancion/${idAlbum}`, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          navigate('/admin/cancion/'+idAlbum);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    return (
      <AdminLayout>
          
          <Form className='p-5'>
            <Form.Group className='p-3'>
              <Form.Label htmlFor="nombre">Nombre</Form.Label>
              <Form.Control type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Nombre" id='nombre'/>
            </Form.Group>
            <Form.Group className='p-3'>
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="file" name='archivoUrl' onChange={(e)=>setAudio(e.target.files[0])}/>
            </Form.Group>
            <Button className='col-1 m-3' onClick={handleSubmit} variant="primary">
              Enviar
            </Button>
  
  
          </Form>
      </AdminLayout>
    )
}

export default AdminCancionFormPage