import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

const NavbarHeroes = () => {

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login', {replace: true});
  };


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Asociaciones
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/marvel">
              Marvel
            </Nav.Link>
            <Nav.Link as={Link} to="/dc">
              DC
            </Nav.Link>
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <span className="nav-item nav-link text-primary">{ user?.name }</span>
            <button 
              className="nav-item nav-link btn"
              onClick={onLogout}
              >
                Logout
            </button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export { NavbarHeroes };
