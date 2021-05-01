import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar className="navbar navbar-dark" bg="clear" expand="lg">
        <Navbar.Brand href="/">Hyphenated</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
