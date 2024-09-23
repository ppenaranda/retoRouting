import Container from "react-bootstrap/Container";
import Navbar  from "react-bootstrap/Navbar";
import "./App.css";

function NavBar() {
    return (
        <>
        <Navbar bg="light" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/mascotas">Adoptame</Navbar.Brand>
            </Container>

        </Navbar>
        </>
     );
}

export default NavBar;
