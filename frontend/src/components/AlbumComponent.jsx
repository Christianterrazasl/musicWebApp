import React from 'react'
import { Row } from 'react-bootstrap'
import defaultImg from '../assets/albumLogo.jpg'
import  defaultAudio from '../assets/audio1.mp3'


function AlbumComponent({album}) {
  return (<>
    <Row className='text-light p-4 offset-1 d-flex justify-content-between align-items-center'>
        <h2 className='col-3'>{album.nombre}</h2>
        <img className="img-fluid col-1" src={album.imagenUrl? album.imagenUrl : defaultImg} alt="imagen del album" />
    </Row>
    <Row className="bg-light" style={{height: '1px'}}>

    </Row>
    <ul class="p-5">
        {album.cancions.map((cancion) => (
            <li class="list-group-item text-light p-5 d-flex justify-content-between"  style={{backgroundColor: 'transparent'}} key={cancion.id}>
                
                <h4 className='offset-2'>{cancion.nombre}</h4>
                <audio controls className='col-3 me-5'>
                    <source src={cancion.audioUrl? cancion.audioUrl : defaultAudio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

            </li>
        ))}

    </ul>
    
  </>
    
  )
}

export default AlbumComponent