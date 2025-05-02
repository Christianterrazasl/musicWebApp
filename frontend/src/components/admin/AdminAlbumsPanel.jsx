import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import defaultImg from '../../assets/album-de-musica.png'
import {useNavigate} from 'react-router-dom'

function AdminAlbumsPanel({idArtista}) {

    const navigate = useNavigate();

    async function loadElementos(){

        
        await fetch(`http://localhost:3000/api/album/artista/${idArtista}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setElementos(data);
        })
    }

    const [elementos, setElementos] = useState([]);
    useEffect(()=>{
        loadElementos();
    },[]);


    async function handleEliminar(id){
        fetch(`http://localhost:3000/api/album/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                console.log("Elemento eliminado correctamente");
                loadElementos();
            } else {
                console.error("Error al eliminar el elemento");
            }
        }).catch((error) => {
            console.error("Error en la solicitud:", error);
        })
    }


    return (
        <Container fluid className="p-5 bg-white min-vh-100">
            <Row className='d-flex justify-content-between align-items-center flex-row mb-5'>
               <h1 className='col-4'>Administracion Albums</h1>
                <button className='btn btn-light border-dark col-2 p-3 fs-5' onClick={()=>navigate("/admin/album/form/"+idArtista)}>Agregar Album</button>
            </Row>
            <Row className='rounded bg-light p-2'>
                <ul className="list-group list-group-flush rounded list-unstyled">
                    {elementos.map((elemento) => (
                        <div className='list-group-item d-flex justify-content-between align-items-center flex-row p-3 bg-light' key={elemento.id}>
                            <div className='col-3 d-flex gap-5 d-flex align-items-center'>
                                <li className='bg-light p-3 fs-4 col-3'>{elemento.nombre}</li>
                                <img src={elemento.imagenUrl? `http://localhost:3000/${elemento.imagenUrl}` : defaultImg} className="img img-fluid col-3 border border-dark border-2 rounded-3" alt="imagen del artista" />
                            </div>

                            <div className='col-3 d-flex gap-3'>
                                <button className='btn btn-light border-dark p-3 fs-5' onClick={()=>navigate(`/admin/cancion/${elemento.id}`)}>Ver categoria</button>
                                <button className='btn btn-primary border-dark p-3 fs-5' onClick={()=>navigate(`/admin/album/form/${idArtista}/${elemento.id}`)}>Modificar</button>
                                <button className='btn btn-danger border-dark p-3 fs-5' onClick={()=>handleEliminar(elemento.id)}>Eliminar</button>
                            </div>
                            
                        </div>

                    ))}
                </ul>
            </Row>
        </Container>
    )
}

export default AdminAlbumsPanel