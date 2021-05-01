import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function NavBar() {
  return (
    <div>
      <Navbar className="navbar navbar-dark" bg="clear" expand="lg">
        <Navbar.Brand className={styles.navbarstitlestyles} href="/">
          Hyphenated
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={"ml-auto pr-3"}>
            <Nav.Link href="/about">
              <h3>About</h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
