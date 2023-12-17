import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from './LogoutButton';
import { UserContext } from '../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const userInfo = useContext(UserContext)
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Рекламные Компании</Navbar.Brand>
          {userInfo.user &&
          <Nav className="me-auto">
            <Nav.Link><Link to="/people">Люди</Link></Nav.Link>
            <Nav.Link><Link to="/compain">Компании</Link></Nav.Link>
          </Nav>}
          <LogoutButton userInfo={userInfo} />
        </Container>
      </Navbar>
  );
}

export default NavBar;