import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout'
import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AdminArtistaFormPage() {

  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState(null);
  const navigate = useNavigate();
  const {idGenero, idArtista} = useParams();


  useEffect(()=>{
    if (idArtista) {
      fetch(`http://localhost:3000/api/artista/${idArtista}`)
        .then((response) => response.json())
        .then((data) => {
          setNombre(data.nombre);
        })
        .catch((error) => {
          console.error(error);
        });
    }

  },[idArtista])

  const handleSubmit = (e) => {

    e.preventDefault();
    if (idArtista){
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('imagenUrl', imagen);
      fetch(`http://localhost:3000/api/artista/${idArtista}`, {
        method: 'PUT',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          navigate('/admin/artista/'+idGenero);
        })
        .catch((error) => {
          console.error(error);
        });
      }
    else{
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('imagenUrl', imagen);
      fetch(`http://localhost:3000/api/artista/${idGenero}`, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          navigate('/admin/artista/'+idGenero);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    

    
  };

  return (
    <AdminLayout>
        
        <Form className='p-5'>
          <Form.Group className='p-3'>
            <Form.Label htmlFor="nombre">Nombre</Form.Label>
            <Form.Control type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Nombre del Genero" id='nombre'/>
          </Form.Group>
          <Form.Group className='p-3'>
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="file" name='imagenUrl' onChange={(e)=>setImagen(e.target.files[0])}/>
          </Form.Group>
          <Button className='col-1 m-3' onClick={handleSubmit} variant="primary">
            Enviar
          </Button>


        </Form>
    </AdminLayout>
  )
}

export default AdminArtistaFormPage