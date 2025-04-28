import React from 'react'

function TituloArtista({title}) {
  return (
    <div className='p-4 text-light bg-dark text-center h-100 col-12 rounded-3'>
        <h2 className='m-5'>{title}</h2>
    </div>
  )
}

export default TituloArtista