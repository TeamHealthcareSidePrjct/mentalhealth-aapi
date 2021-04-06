import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar className="navbar navbar-dark" bg="clear" expand="lg">
        <Navbar.Brand href="#home">Team Healthcare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Get Started</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
