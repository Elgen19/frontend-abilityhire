import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HomeNavigation() {
  return (
    <Navbar style={{backgroundColor: '#000000'}} >
        <Container>
          <Navbar.Brand href="/" style={{color: '#28a745', fontWeight:'bold'}}>AbilityHire</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/AboutUsPage" className='text-light'>About Us</Nav.Link>
            <Nav.Link href="/EventsPage" className='text-light'>Events</Nav.Link>
            <Nav.Link href="/LoginForm" className='text-light'>Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default HomeNavigation;
