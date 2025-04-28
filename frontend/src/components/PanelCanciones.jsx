import React from 'react'
import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import TituloArtista from './TituloArtista';
import AlbumComponent from './AlbumComponent';

function PanelCanciones({idArtista}) {
  const [cancionesData, setCancionesData] = useState({});

  const loadCanciones = async () => {
    await fetch(`http://localhost:3000/api/cancion/artista/${idArtista}`)
      .then(response => response.json())
      .then(data => {
        setCancionesData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  useEffect(() => {
    loadCanciones();
  }, [idArtista]);

  if(cancionesData.albums && cancionesData.albums.length > 0){ 
  return (
  <>
  <Row className='p-4 text-light d-flex justify-content-center'>
        <TituloArtista title={cancionesData.nombre} />
  </Row>
  {cancionesData.albums.map((album) => (
      <AlbumComponent key={album.id} album={album}/>
    ))}
  </>)
    
  
}else{
    return (
      <Row className='text-light m-5 d-flex justify-content-center align-items-center flex-wrap text-center' style={{height: '75vh'}}>
          <h1>No hay canciones disponibles</h1>
      </Row>
      )
    }
  }

export default PanelCanciones