import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footers() {
  return (
    <footer className="bg-dark text-light">
      <Container fluid>
        <Row className="py-4 mx-3">
          <Col md={6} className="text-center text-md-start">
            <h5 style={{color:'#28a745'}}>AbilityHire</h5>
            <p className="mt-3">Opening Doors to Equal Employment</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <h5>Contact Us</h5>
            <p className="mt-3">123 Main Street, Mandaue City, Philippines, 6014</p>
            <p>Email: info@abilityhire.com</p>
            <p>Phone: +1 123-456-7890</p>
            <div className="mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-light">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-3 text-light">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="py-4 mx-3">
          <Col className="text-center text-md-start">
            <p>&copy; 2023 AbilityHire. All rights reserved.</p>
          </Col>

          <Col className="text-center text-md-end">
          <p className="text-light">Privacy Policy</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footers;