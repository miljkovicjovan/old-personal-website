import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-dark p-0">
            <Container className="p-0 ps-5 py-4 justify-content-between">
                <Navbar.Brand className="link-underline text-light fs-4" href="#home">miljkovicjovan.com</Navbar.Brand>
                <Nav className="fs-4">
                    <Nav.Link className="link-underline text-light" href="#about">About</Nav.Link>
                    <Nav.Link className="link-underline text-light ms-5" href="#projects">Projects</Nav.Link>
                    <Nav.Link className="link-underline text-light mx-5" href="#blog">Blog</Nav.Link>
                    <span className="d-flex border-start border-end fs-4">
                        <Nav.Link><FontAwesomeIcon className="icon-hover ms-5" icon={faLinkedin}/></Nav.Link>
                        <Nav.Link><FontAwesomeIcon className="icon-hover mx-5" icon={faGithub}/></Nav.Link>
                    </span>                        
                </Nav>
            </Container>
        </Navbar>
    );
}
  
export default Navigation;