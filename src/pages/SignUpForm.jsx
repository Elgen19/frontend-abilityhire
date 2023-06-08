import { Container, Col, Row, Button, Form, Alert } from 'react-bootstrap';
import NavigationComp from '../components/Navigations';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstName: event.target.elements.firstname.value,
      lastName: event.target.elements.lastname.value,
      dateOfBirth: event.target.elements.date_of_birth.value,
      sex: event.target.elements.sex.value,
      email: event.target.elements.email.value,
      disabilityType: event.target.elements.disability.value,
      phoneNumber: event.target.elements.phone_number.value,
      password: event.target.elements.password.value,
    };

    if (formData.disabilityType === 'Select Disability Type') {
      setErrorMessage('Please select a disability type.');
      return;
    }

    if (formData.sex === 'Select Sex') {
        setErrorMessage('Please select your sexuality.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:8080/users/register', formData);
        console.log(response.data);
        setSuccessMessage('Registration successful');
        setErrorMessage('');
        // Clear form fields
        event.target.reset();
        // Redirect to login form
        navigate('/LoginForm');
      } catch (error) {
        console.error(error.response.data);
        setErrorMessage(`Registration unsuccessful. Please check to see that you do not have an existing account yet.
        If everything else fails, something might be wrong with the system. Please consult an IT Professional.`);
         setSuccessMessage('');
        // Handle error response
      }
  };

  return (
    <>
      <NavigationComp />

      <Form onSubmit={handleSubmit}>
        <Container fluid className="vh-93 bg-dark text-light">
          <Row>
            <Col>
              <Row className="mt-3 text-center">
                <Col>
                  <h1 style={{ color: '#28a745' }}>Sign Up</h1>
                </Col>
              </Row>

              <Row>
                <Col className="text-center">
                  <p>Please fill up the necessary information to get started.</p>
                </Col>
              </Row>

              {successMessage && (
                <Row>
                  <Col className="text-center">
                    <Alert variant="success">{successMessage}</Alert>
                  </Col>
                </Row>
              )}

              {errorMessage && (
                <Row>
                  <Col className="text-center">
                    <Alert variant="danger">{errorMessage}</Alert>
                  </Col>
                </Row>
              )}

              <Row className="mx-5">
                <Col>
                  <Form.Group className="mb-3 mt-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" required />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3 mt-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mx-5">
                <Col>
                  <Form.Group className="mb-3 mt-3" controlId="date_of_birth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" placeholder="Enter Date of Birth" required />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3 mt-3" controlId="sex">
                    <Form.Label>Sex</Form.Label>
                    <Form.Select aria-label="Sex Selection" required>
                      <option>Select Sex</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mx-5">
                <Col>
                  <Form.Group className="mb-3 mt-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email Address" required />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3 mt-3" controlId="disability">
                    <Form.Label>Disability Type</Form.Label>
                    <Form.Select aria-label="Disability Selection" required>
                      <option>Select Disability Type</option>
                      <option value="Visual Impairment">Visual Impairment</option>
                      <option value="Hearing Impairment">Hearing Impairment</option>
                      <option value="Mobility Impairment">Mobility Impairment</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mx-5">
                <Col>
                  <Form.Group className="mb-3 mt-3" controlId="phone_number">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="Number" placeholder="Enter Mobile Number" required />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3 mt-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mx-5 mt-5">
                <Col className="d-flex justify-content-center">
                  <Button variant="success" type="submit" size="lg" className="w-100">
                    Sign Up
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col className="d-flex justify-content-center mt-3 mb-4">
                  <p>
                    Already have an account? <a href="/LoginForm">Sign In</a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}

export default Register;
    
