import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav() {
  return (
    <Navbar sticky="top" variant="dark" bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/about">Spenser Dewey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about/projects">Projects</Nav.Link>
            <Nav.Link href="/about/links">Links</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNav;