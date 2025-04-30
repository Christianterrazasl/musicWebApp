import React from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../components/Logo'
import {Link, useNavigate} from 'react-router-dom'

function AdminLayout({children, backButton=false, backButtonLink="/admin"}) {
    const navigate = useNavigate();


  return (<Container fluid className='m-0 p-0 w-100 overflow-hidden min-vh-100'>
    <div className="p-3 pt-5 bg-dark row d-flex  justify-content-between align-items-center">
      <div className="col-auto">
          <Logo/>
      </div>
      <div className="col-auto">
          {
              backButton ? 
              <button className="btn btn-light" onClick={() => navigate(backButtonLink)}>Volver</button> :
              <div className="col-2"></div>
          }
      </div>      
    </div>
    <div style={{minHeight: "80vh"}}>
        {children}
    </div>
      
  </Container>
        )
}

export default AdminLayout