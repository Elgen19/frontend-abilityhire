import { Container, Col, Row, Button, Form, Card, Alert } from 'react-bootstrap';
import NavigationComp from '../components/Navigations';
import axios from 'axios';
import { useState } from 'react';
function Login() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            email: event.target.elements.email.value,
            password: event.target.elements.password.value,
        };

        try {
            const response = await axios.post('http://localhost:8080/users/login', formData);
            console.log(response.data);
            setErrorMessage('');
            // Redirect to job search form or desired page upon successful login
            // Replace '/JobSearchForm' with the desired route
            window.location.href = '/JobSearchForm';
        } catch (error) {
            console.error(error.response.data);
            setErrorMessage('Login unsuccessful. Please check your email and password.');
        }
    };
    return (
        <>
            <NavigationComp />

            <Form onSubmit={handleSubmit}>
                <Container fluid className="vh-93 bg-dark">
                    <Row className="h-93">
                        <Col xs={7} className='p-0'>
                            <Card border='0'>
                                <Card.Img
                                    variant="top"
                                    src="https://s3.amazonaws.com/disabledperson/images/images/000/000/161/original/housing_for_people_with_disabilities.jpeg?1586135724"
                                    style={{ height: '93vh', borderRadius: '0' }}
                                />
                            </Card>
                        </Col>

                        <Col className='mx-3 bg-dark text-light'>
                            <Row className="mt-5 text-center">
                                <Col>
                                    <h1 style={{ color: '#28a745' }}>Sign In</h1>
                                </Col>
                            </Row>

                            <Row>
                                <Col className='text-center'>
                                    <p>
                                        To keep connected with us, please login with your personal
                                        information through E-mail address and password.
                                    </p>
                                </Col>
                            </Row>

                            {errorMessage && (
                                <Row>
                                    <Col className="text-center">
                                        <Alert variant="danger">{errorMessage}</Alert>
                                    </Col>
                                </Row>
                            )}


                            <Row>
                                <Col>
                                    <Form.Group className="mb-3 mt-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            size="lg"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            size="lg"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mt-5">
                                <Col className="d-flex justify-content-center">
                                    <Button variant="success" type="submit" size="lg" className="w-100">
                                        Sign In
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="d-flex justify-content-center mt-3">
                                    <p>
                                        Do not have an account? <a href="/SignUpForm">Sign Up</a>
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

export default Login;
