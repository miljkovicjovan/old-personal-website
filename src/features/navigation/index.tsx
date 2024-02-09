import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar expand="lg" className="navbar-dark bg-dark p-0">
            <Container className="p-0 ps-5 py-4">
                <Navbar.Brand className="link-underline text-light fs-4 me-5" href="#home">Miljkovic Jovan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="fs-5">
                        <Nav.Link className="link-underline text-light" href="#about">About</Nav.Link>
                        <Nav.Link className="link-underline text-light mx-0 mx-lg-4" href="#projects">Projects</Nav.Link>
                        <Nav.Link className="link-underline text-light" href="#blog">Blog</Nav.Link>                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
  
export default Navigation;