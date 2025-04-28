import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Carta from './Carta'

function PanelGeneros() {
  const [generos, setGeneros] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/genero')
      .then(response => response.json())
      .then(data => {
        setGeneros(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [])

  if (generos.length >0){
    return (
      <Row className='text-light m-5 d-flex justify-content-center align-items-center flex-wrap gap-4'>
          {generos.map((genero) => (
            <Carta key={genero.id} id={genero.id} title={genero.nombre} tipo='genero' imgUrl={genero.imagenUrl? genero.imagenUrl : undefined}/>
          ))}
      </Row>
    )
  }else{
    return (
      <Row className='text-light m-5 d-flex justify-content-center align-items-center flex-wrap text-center' style={{height: '75vh'}}>
          <h1>No hay generos disponibles</h1>
      </Row>
    )
  }
  
}

export default PanelGeneros