import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../layouts/Layout';
import PanelCanciones from '../components/PanelCanciones'

function ArtistaPage() {
  const { id } = useParams();  
  return (
    <Layout backButton={true}>
        <PanelCanciones idArtista={id}/>
    </Layout>
  )
}

export default ArtistaPage