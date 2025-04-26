import Logo from "./Logo";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Layout = ({ children, backButton=false}) => {
  const navigate = useNavigate();

  return (
    <Container fluid className='m-0 p-0 w-100 overflow-hidden ' style={{ backgroundColor: "#000" }}>
        <div className="p-3 pt-5 bg-dark row d-flex  justify-content-between align-items-center">
            <div className="col-auto">
              <Logo/>
            </div>
            <div className="col-auto">
            {
                backButton ? 
                <button className="btn btn-light" onClick={() => navigate(-1)}>Volver</button> :
                <div className="col-2"></div>
            }
            </div>
            
        </div>
        {children}
    </Container>

  );
}

export default Layout;