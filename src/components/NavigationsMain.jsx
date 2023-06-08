import { Container, Nav, Navbar } from 'react-bootstrap';

function NavigationsMain() {
    return (
        <Navbar style={{ backgroundColor: '#000000' }}>
            <Container>
                <Navbar.Brand href="/" style={{ color: '#28a745', fontWeight: 'bold' }}>AbilityHire</Navbar.Brand>
                <Nav className="justify-content-end" >
                <Nav.Link href="/JobSearchForm" className='pe-3' style={{color: 'white'}}>Job Search</Nav.Link>
                <Nav.Link href="/ProfilingForm" style={{color: 'white'}}>Profile Creation</Nav.Link>
                <Nav.Link href="" style={{color: 'white', marginRight: '40px'}}>FAQs</Nav.Link>
                <Nav.Link href="/LoginForm" style={{color: 'white'}}>Sign Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationsMain;
