import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarHeroes = () => {
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
            <span className="nav-item nav-link text-primary">Luciana</span>
            <button className="nav-item nav-link btn">Logout</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export { NavbarHeroes };
