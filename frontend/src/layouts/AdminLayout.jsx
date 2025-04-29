import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../components/Logo'
import {Link, useNavigate} from 'react-router-dom'

function AdminLayout({children}) {
  return (<Container fluid className="p-0 bg-light min-vh-100">

            <nav className="navbar navbar-expand-lg navbar-light bg-dark p-4">
            <div className='me-5'>
                <Logo/>
            </div>
            <div className="navbar-nav gap-5">
            <Link className="nav-item nav-link text-light" to={'#'}><h5>Generos</h5></Link>
            <Link className="nav-item nav-link text-light" to={'#'}><h5>Artistas</h5></Link>
            <Link className="nav-item nav-link text-light" to={'#'}><h5>Albums</h5></Link>
            <Link className="nav-item nav-link text-light" to={'#'}><h5>Canciones</h5></Link>
            </div>
            </nav>
            <div>
                {children}
            </div>
        </Container>
    
        )
}

export default AdminLayout