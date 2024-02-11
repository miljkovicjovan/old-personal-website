import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Navigation() {
    return (
        <Navbar id="top" expand="lg" className="navbar-dark bg-dark p-0">
            <Container className="p-0 ps-5 py-4">
                <Navbar.Brand className="link-underline text-light fs-4 me-5">Miljkovic Jovan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="fs-5">
                        <Nav.Link className="link-underline text-light">
                            <Link to="wip" spy={true} smooth={true} duration={500}>About</Link>
                        </Nav.Link>
                        <Nav.Link className="link-underline text-light mx-0 mx-lg-4">
                            <Link to="wip" spy={true} smooth={true} duration={500}>Projects</Link>
                        </Nav.Link>
                        <Nav.Link className="link-underline text-light">
                            <Link to="wip" spy={true} smooth={true} duration={500}>Blog</Link>
                        </Nav.Link>             
                        <Nav.Link className="link-underline text-light ms-0 ms-lg-4">
                            <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                        </Nav.Link>              
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}