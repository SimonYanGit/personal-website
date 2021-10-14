
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'


const Header = () => {
    const location = useLocation();
    const routes = {
        "/about":1,
        "/experience":2,
        "/contact":3
    }
    let activeKey = routes[location.pathname];

    return (
        <>
            <Navbar bg="light" variant="light"
                sticky="top" expand="sm">
                <Navbar.Brand className="name">
                    Simon Yan
                </Navbar.Brand>
        
                <Navbar.Toggle className="toggle"/>
                <Navbar.Collapse>
                    <Nav className="ms-auto" activeKey={activeKey}>
                        <Nav.Link eventKey="1" className="item" href="about">About</Nav.Link>
                        <Nav.Link eventKey="2" className="item" href="experience">Experience</Nav.Link>
                        <Nav.Link eventKey="3" className="item" href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
