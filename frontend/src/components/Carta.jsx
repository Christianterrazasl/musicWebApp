import React from 'react'
import { Button, Card, CardBody, CardTitle } from 'react-bootstrap'
import imgDefault from '../assets/album-de-musica.png'
import { useNavigate } from 'react-router-dom'


function Carta({title="Titulo", imgUrl=imgDefault, id, tipo}) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${tipo}/${id}`);
  }
  
  return (
    <Card className='bg-dark rounded col-3 text-light card-hover col-xl-2 p-2' >
            <Card.Img variant="top" src={imgUrl} alt="imagen de la carta"/>
            <CardBody>
                <CardTitle><h5>{title}</h5></CardTitle>
                <Button className='btn card-hover' onClick={()=>handleClick(id)} style={{backgroundColor: "green", border:'none'}}>Ver</Button>
            </CardBody>
            
    </Card>
  )
}

export default Carta