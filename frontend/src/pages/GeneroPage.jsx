import React from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import PanelArtistas from '../components/PanelArtistas';

function GeneroPage() {
    const { id } = useParams();
    return (
    <Layout backButton={true}>
        <PanelArtistas idGenero={id}/>
    </Layout>
    )
}

export default GeneroPage