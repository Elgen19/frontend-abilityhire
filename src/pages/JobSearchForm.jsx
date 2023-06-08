import { Container, Col, Row, Button, Form, ListGroup } from 'react-bootstrap';
import NavigationMainComp from '../components/NavigationsMain';
import '../App.css'
import RedBull from '../images/RedBull.svg'
import Shareit from '../images/SHAREit.svg'
import Mcdonalds from '../images/McDonalds.svg'
import Starbuck from '../images/Starbucks.svg'
import CitiBank from '../images/Citibank.svg'
import Shangrila from '../images/ShangriLa.svg'
import Hilton from '../images/Hilton.svg'
import NationalG from '../images/NationalGeographic.svg'
import BBC from '../images/BBCNews.svg'
import AirAsia from '../images/AirAsia.svg'

function JobSearch() {
    const jobTypes = ['Full-Time', 'Part-Time', 'Remote', 'Internship', 'Contract'];
    const jobCategories = ['Design', 'Sales', 'Marketing', 'Business', 'Customer Service', 'Technology', 'Operations', 'Health', 'Education'];
    const disabilityTypes = ['Hearing Impairment', 'Visual Impairment', 'Mobility Impairment'];





    return (
        <>
            <NavigationMainComp />

            <Form >
                <Container fluid className='mt-3 bg-dark text-light'>
                    <Row className='d-flex justify-content-end'>
                        <Col >
                            <h3 className="text-center">Find Jobs</h3>
                        </Col>

                        <Col xs={5}>
                            <Form.Group className="mb-3 " controlId="company_name">
                                <Form.Control type="text" placeholder="Enter Desired Company Name" />
                            </Form.Group>
                        </Col>

                        <Col xs={3} >
                            <Form.Group className="mb-3 " controlId="location_search">
                                <Form.Control type="text" placeholder="Enter your location" />
                            </Form.Group>
                        </Col>


                        <Col xs={2}>
                            <Button variant="success" className='w-100'>Search</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={2} >
                            <Row className='mb-3'>
                                <Col>
                                    <h5>Employment Type</h5>
                                    {jobTypes.map((jobType) => (
                                        <Form.Check
                                            key={jobType}
                                            type="checkbox"
                                            id={jobType}
                                            label={jobType}
                                            value={jobType}

                                        />
                                    ))}
                                </Col>
                            </Row>

                            <Row className='mb-3'>
                                <Col>
                                    <h5>Job Categories</h5>
                                    {jobCategories.map((jobCategory) => (
                                        <Form.Check
                                            key={jobCategory}
                                            type="checkbox"
                                            id={jobCategory}
                                            label={jobCategory}
                                            value={jobCategory}

                                        />
                                    ))}
                                </Col>
                            </Row>


                            <Row>
                                <Col>
                                    <h5>Disability Type</h5>
                                    {disabilityTypes.map((disabilityType) => (
                                        <Form.Check
                                            key={disabilityType}
                                            type="checkbox"
                                            id={disabilityType}
                                            label={disabilityType}
                                            value={disabilityType}

                                        />
                                    ))}
                                </Col>
                            </Row>
                        </Col>





              
                        <Col className='mx-3' style={{ overflow: 'auto', maxHeight: '600px' }}>
                            <Row>
                                <Col>
                                    <h3>All Jobs (10)</h3>
                                </Col>
                            </Row>
                            <Row className='mb-1'>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item className=' '>
                                            <Container>
                                                <Row>
                                                    <Col className='d-flex justify-content-center align-items-center' xs={2}>
                                                        <img src={RedBull} alt="Red Bull Logo" style={{ height: '80px' }} />
                                                    </Col>

                                                    <Col className='mx-3'>
                                                        <Row>
                                                            <Col className="pt-3">
                                                                <h5>
                                                                    <span style={{ backgroundColor: "#198754", color: "#fff", padding: "5px 5px" }}>Brand Designer</span> (Red Bull)
                                                                </h5>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col className='mt-1'>
                                                                <p> Remote | Design ● Marketing | Mobility ● Hearing</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col xs={2} >
                                                        <Row className='mb-3'>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Apply</Button>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-dark" className="w-100">View</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>

                            <Row className='mb-1'>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item className=' '>
                                            <Container>
                                                <Row>
                                                    <Col className='d-flex justify-content-center align-items-center' xs={2}>
                                                        <img src={Shareit} alt="SHAREit Logo" style={{ height: '80px' }} />
                                                    </Col>

                                                    <Col className='mx-3'>
                                                        <Row>
                                                            <Col className="pt-3">
                                                                <h5>
                                                                    <span style={{ backgroundColor: "#198754", color: "#fff", padding: "5px 5px" }}>Digital Marketing Assistant</span> (SHAREit)
                                                                </h5>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col className='mt-1'>
                                                                <p>Internship | Technology ● Marketing | Mobility</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col xs={2} >
                                                        <Row className='mb-3'>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Apply</Button>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-dark" className="w-100">View</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>

                            <Row className='mb-1'>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item className=' '>
                                            <Container>
                                                <Row>
                                                    <Col className='d-flex justify-content-center align-items-center' xs={2}>
                                                        <img src={Mcdonalds} alt="McDonalds Logo" style={{ height: '80px' }} />
                                                    </Col>

                                                    <Col className='mx-3'>
                                                        <Row>
                                                            <Col className="pt-3">
                                                                <h5>
                                                                    <span style={{ backgroundColor: "#198754", color: "#fff", padding: "5px 5px" }}>Drive-Thru Attendant</span> (McDonalds)
                                                                </h5>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col className='mt-1'>
                                                                <p>Part-Time | Operations ● Customer Service | Mobility ● Visual ● Hearing</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col xs={2} >
                                                        <Row className='mb-3'>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Apply</Button>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-dark" className="w-100">View</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>

                            <Row className='mb-1'>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item className=' '>
                                            <Container>
                                                <Row>
                                                    <Col className='d-flex justify-content-center align-items-center' xs={2}>
                                                        <img src={Starbuck} alt="Starbucks Logo" style={{ height: '80px' }} />
                                                    </Col>

                                                    <Col className='mx-3'>
                                                        <Row>
                                                            <Col className="pt-3">
                                                                <h5>
                                                                    <span style={{ backgroundColor: "#198754", color: "#fff", padding: "5px 5px" }}>Digital Customer Support</span> (Starbucks)
                                                                </h5>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col className='mt-1'>
                                                                <p>Full-Time | Business ● Technology | Mobility</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col xs={2} >
                                                        <Row className='mb-3'>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Apply</Button>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-dark" className="w-100">View</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>

                            <Row className='mb-1'>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item className=' '>
                                            <Container>
                                                <Row>
                                                    <Col className='d-flex justify-content-center align-items-center' xs={2}>
                                                        <img src={CitiBank} alt="CitiBank Logo" style={{ height: '80px' }} />
                                                    </Col>

                                                    <Col className='mx-3'>
                                                        <Row>
                                                            <Col className="pt-3">
                                                                <h5>
                                                                    <span style={{ backgroundColor: "#198754", color: "#fff", padding: "5px 5px" }}>Document Processor</span> (Citi Bank)
                                                                </h5>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col className='mt-1'>
                                                                <p>Full-Time | Business ● Operations | Hearing ● Mobility</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col xs={2} >
                                                        <Row className='mb-3'>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Apply</Button>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-dark" className="w-100">View</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>

                            <Row className='mb-1'>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item className=' '>
                                            <Container>
                                                <Row>
                                                    <Col className='d-flex justify-content-center align-items-center' xs={2}>
                                                        <img src={Shangrila} alt="Shangri-La Logo" style={{ height: '80px' }} />
                                                    </Col>

                                                    <Col className='mx-3'>
                                                        <Row>
                                                            <Col className="pt-3">
                                                                <h5>
                                                                    <span style={{ backgroundColor: "#198754", color: "#fff", padding: "5px 5px" }}>Guest Service Associate</span> (Shangri-La)
                                                                </h5>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col className='mt-1'>
                                                                <p>Full-Time | Customer Service ● Operations | Mobility</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col xs={2} >
                                                        <Row className='mb-3'>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Apply</Button>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-dark" className="w-100">View</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>

                            <Row className='mb-1'>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item className=' '>
                                            <Container>
                                                <Row>
                                                    <Col className='d-flex justify-content-center align-items-center' xs={2}>
                                                        <img src={Hilton} alt="Hilton Worldwide Logo" style={{ height: '80px' }} />
                                                    </Col>

                                                    <Col className='mx-3'>
                                                        <Row>
                                                            <Col className="pt-3">
                                                                <h5>
                                                                    <span style={{ backgroundColor: "#198754", color: "#fff", padding: "5px 5px" }}>Accessibility Coordinator</span> (Hilton Worldwide)
                                                                </h5>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col className='mt-1'>
                                                                <p>Part-Time | Customer Service ● Operations | Hearing ● Mobility</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col xs={2} >
                                                        <Row className='mb-3'>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Apply</Button>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-dark" className="w-100">View</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>

                            <Row className='mb-1'>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item className=' '>
                                            <Container>
                                                <Row>
                                                    <Col className='d-flex justify-content-center align-items-center' xs={2}>
                                                        <img src={NationalG} alt="National Geographic Logo" style={{ height: '80px' }} />
                                                    </Col>

                                                    <Col className='mx-3'>
                                                        <Row>
                                                            <Col className="pt-3">
                                                                <h5>
                                                                    <span style={{ backgroundColor: "#198754", color: "#fff", padding: "5px 5px" }}>Photo Editor</span> (National Geographic)
                                                                </h5>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col className='mt-1'>
                                                                <p>Remote | Design ● Technology | Mobility</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col xs={2} >
                                                        <Row className='mb-3'>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Apply</Button>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-dark" className="w-100">View</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>



                            <Row className='mb-1'>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item className=' '>
                                            <Container>
                                                <Row>
                                                    <Col className='d-flex justify-content-center align-items-center' xs={2}>
                                                        <img src={BBC} alt="BBC News Logo" style={{ height: '80px' }} />
                                                    </Col>

                                                    <Col className='mx-3'>
                                                        <Row>
                                                            <Col className="pt-3">
                                                                <h5>
                                                                    <span style={{ backgroundColor: "#198754", color: "#fff", padding: "5px 5px" }}>Social Media Coordinator</span> (BBC News)
                                                                </h5>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col className='mt-1'>
                                                                <p>Contract | Marketing ● Technology | Mobility ● Visual ● Hearing</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col xs={2} >
                                                        <Row className='mb-3'>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Apply</Button>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-dark" className="w-100">View</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>

                            <Row className='mb-1'>
                                <Col>
                                    <ListGroup>
                                        <ListGroup.Item className=' '>
                                            <Container>
                                                <Row>
                                                    <Col className='d-flex justify-content-center align-items-center' xs={2}>
                                                        <img src={AirAsia} alt="Air Asia Logo" style={{ height: '80px' }} />
                                                    </Col>

                                                    <Col className='mx-3'>
                                                        <Row>
                                                            <Col className="pt-3">
                                                                <h5>
                                                                    <span style={{ backgroundColor: "#198754", color: "#fff", padding: "5px 5px" }}>Customer Service Representative</span> (Air Asia)
                                                                </h5>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col className='mt-1'>
                                                                <p>Full-Time | Customer Service ● Operations | Mobility ● Visual ● Hearing</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>

                                                    <Col xs={2} >
                                                        <Row className='mb-3'>
                                                            <Col>
                                                                <Button variant="success" className="w-100">Apply</Button>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col>
                                                                <Button variant="outline-dark" className="w-100">View</Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Form>
            
        </>



    );
}

export default JobSearch;