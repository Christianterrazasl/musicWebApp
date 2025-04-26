import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Carta from './Carta'

function PanelArtistas({idGenero}) {
  const [artistas, setArtistas] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/api/artista/genero/${idGenero}`)
      .then(response => response.json())
      .then(data => {
        setArtistas(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [])


  return (
    <Row className='text-light m-5 d-flex justify-content-center align-items-center flex-wrap gap-4'>
        {artistas.map((artista) => (
          <Carta key={artista.id} tipo='artista' id={artista.id} title={artista.nombre} imgUrl={artista.imagenUrl? artista.imagenUrl : undefined}/>
        ))}
    </Row>
  )
}

export default PanelArtistas