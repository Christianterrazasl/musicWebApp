import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import defaultAudio from '../../assets/audio1.mp3'

function AdminCancionesPanel({idAlbum}) {
    const navigate = useNavigate();

    async function loadElementos(){

        
        await fetch(`http://localhost:3000/api/cancion/album/${idAlbum}`)
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
        fetch(`http://localhost:3000/api/cancion/${id}`, {
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
               <h1 className='col-4'>Administracion Canciones</h1>
                <button className='btn btn-light border-dark col-2 p-3 fs-5' onClick={()=>navigate("/admin/cancion/form/"+idAlbum)}>Agregar Cancion</button>
            </Row>
            <Row className='rounded bg-light p-2'>
                <ul className="list-group list-group-flush rounded list-unstyled">
                    {elementos.map((elemento) => (
                        <div className='list-group-item d-flex justify-content-between align-items-center flex-row p-3 bg-light' key={elemento.id}>
                            <div className='col-3 d-flex gap-5 d-flex align-items-center'>
                                <li className='bg-light p-3 fs-4 col-6'>{elemento.nombre}</li>
                                <audio controls className='col-12 ms-5'>
                                    <source src={elemento.archivoUrl? `http://localhost:3000/${elemento.archivoUrl}` : defaultAudio} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>

                            <div className='col-3 d-flex gap-3'>
                                <button className='btn btn-danger border-dark p-3 fs-5' onClick={()=>handleEliminar(elemento.id)}>Eliminar</button>
                            </div>
                            
                        </div>

                    ))}
                </ul>
            </Row>
        </Container>
    )
}

export default AdminCancionesPanel