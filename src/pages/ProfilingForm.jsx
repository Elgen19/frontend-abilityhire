import React, { useState, Fragment } from 'react';
import { Container, Col, Row, Button, Form, Card } from 'react-bootstrap';
import NavigationComp from '../components/NavigationsMain';

function ProfilingForm() {
    const [educationAdditionalFields, seteducationAdditionalFields] = useState([{}]);
    const [workAdditionalFields, setWorkAdditionalFields] = useState([{}]);
    const [accommodations, setAccommodations] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            // Add the selected accommodation to the list
            setAccommodations([...accommodations, value]);
        } else {
            // Remove the deselected accommodation from the list
            const updatedAccommodations = accommodations.filter((accommodation) => accommodation !== value);
            setAccommodations(updatedAccommodations);
        }
    };

    const handleAddFields = () => {
        seteducationAdditionalFields([...educationAdditionalFields, {}]);
    };

    const handleWorkFields = () => {
        setWorkAdditionalFields([...workAdditionalFields, {}]);
    };

    const handleDeleteEducationFields = (index) => {
        if (educationAdditionalFields.length === 1) {
            return; // Do not delete the last remaining row
        }

        const updatedFields = [...educationAdditionalFields];
        updatedFields.splice(index, 1);
        seteducationAdditionalFields(updatedFields);
    };

    const handleDeleteWorkFields = (index) => {
        if (workAdditionalFields.length === 1) {
            return; // Do not delete the last remaining row
        }

        const updatedFields = [...workAdditionalFields];
        updatedFields.splice(index, 1);
        setWorkAdditionalFields(updatedFields);
    };

    return (
        <>
            <NavigationComp />

            <Form>
                <Container fluid className="vh-93 bg-dark">
                    <Row className='text-light mt-3 mx-3'>
                        <Col>
                            Please fill in the following form fields to finish creating profile.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className='border-0 mt-3 mx-3 text-light' style={{ backgroundColor: 'black' }}>
                                <Card.Header className='text-light bg-success'>Additional Details</Card.Header>
                                <Row className='mt-3 mx-3'>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="street">
                                            <Form.Label>Street</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Street Address" />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className="mb-3" controlId="village">
                                            <Form.Label>Village/Subdivision/Building</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Village or Subdivision or Building" />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className="mb-3" controlId="baranggay">
                                            <Form.Label>Baranggay</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Baranggay Address" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='mx-3 mt-3'>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="city">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="Enter City Address" />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className="mb-3" controlId="province">
                                            <Form.Label>Province</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Province" />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className="mb-3" controlId="zip">
                                            <Form.Label>Zip Code</Form.Label>
                                            <Form.Control type="Number" placeholder="Enter Zip Code" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className='mx-3 mt-3'>
                                    <Col xs={8}>
                                        <Form.Group className="mb-3" controlId="contact_person">
                                            <Form.Label>Emergency Contact Person</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Contact Person Name" />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className="mb-3" controlId="contact_person_num">
                                            <Form.Label>Emergency Contact Person Number</Form.Label>
                                            <Form.Control type="Number" placeholder="Enter Contact Person Number" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card className='border-0 mt-3 mx-3 text-light' style={{ backgroundColor: 'black' }}>
                                <Card.Header className='text-light bg-success'>Educational Information</Card.Header>
                                {educationAdditionalFields.map((field, index) => (
                                    <Fragment key={index}>
                                        <Container>
                                            <Row className='mt-3'>
                                                <Col xs={3}>
                                                    <Form.Group className="mb-3" controlId={`year${index}`}>
                                                        <Form.Label>Graduation Year</Form.Label>
                                                        <Form.Control type="number" placeholder="Enter Year Graduated" />
                                                    </Form.Group>
                                                </Col>

                                                <Col>
                                                    <Form.Group className="mb-3" controlId={`school${index}`}>
                                                        <Form.Label>School Attended</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter School Name" />
                                                    </Form.Group>
                                                </Col>

                                                <Col>
                                                    <Form.Group className="mb-3" controlId={`course${index}`}>
                                                        <Form.Label>Courses</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Course/Degree/Specialization" />
                                                    </Form.Group>
                                                </Col>

                                                {educationAdditionalFields.length > 1 && (
                                                    <Col className="d-flex align-items-center justify-content-center" xs={1}>
                                                        <Button variant="danger" onClick={() => handleDeleteEducationFields(index)}>Delete</Button>
                                                    </Col>
                                                )}
                                            </Row>
                                        </Container>
                                    </Fragment>
                                ))}

                                <Row className='m-3'>
                                    <Col className="d-flex align-items-center justify-content-start">
                                        <Button variant="outline-light" onClick={handleAddFields}>Add Another Row</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card className='border-0 mt-3 mx-3 text-light' style={{ backgroundColor: 'black' }}>
                                <Card.Header className='text-light bg-success'>Work Experience</Card.Header>
                                {workAdditionalFields.map((field, index) => (
                                    <Fragment key={index}>
                                        <Container>
                                            <Row className='mt-3'>
                                                <Row>
                                                    <Col xs={3}>
                                                        <Form.Group className="mb-3" controlId={`job_title${index}`}>
                                                            <Form.Label>Job Title</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter Job Title" />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col>
                                                        <Form.Group className="mb-3" controlId={`company_name${index}`}>
                                                            <Form.Label>Company Name</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter Company Name" />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col xs={2}>
                                                        <Form.Group className="mb-3" controlId={`employment_period${index}`}>
                                                            <Form.Label>Employment Period</Form.Label>
                                                            <Form.Control type="Number" placeholder="Period in Months" />
                                                        </Form.Group>
                                                    </Col>

                                                    {workAdditionalFields.length > 1 && (
                                                        <Col className="d-flex align-items-center justify-content-end" xs={1}>
                                                            <Button variant="danger" onClick={() => handleDeleteWorkFields(index)}>Delete</Button>
                                                        </Col>
                                                    )}

                                                </Row>

                                                <Row>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId={`role${index}`}>
                                                            <Form.Label>Job Responsibilities</Form.Label>
                                                            <Form.Control as="textarea" style={{ resize: 'none' }} rows={4}
                                                                cols={40} type="text" placeholder="Enter detailed description of your role." />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>



                                            </Row>
                                        </Container>
                                    </Fragment>
                                ))}

                                <Row className='m-3'>
                                    <Col className="d-flex align-items-center justify-content-start">
                                        <Button variant="outline-light" onClick={handleWorkFields}>Add Another Row</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <Card className='text-light m-3' style={{ backgroundColor: 'black' }}>
                                <Card.Header className='text-light bg-success' >Accessibility Requirements</Card.Header>
                                
                                <Row className='mt-3 mx-3'>
                                    <Col>
                                    <h5 >Please select the following accessibility requirements that fit your needs.</h5>
                                    </Col>
                                </Row>
                                <Row className='m-3'>
                                    <Col className="text-justify-center">
                                        {[
                                            'Supportive seating (e.g., ergonomic chair, cushioned seating)',
                                            'Environmental adjustments (e.g., noise-canceling headphones, adjustable lighting)',
                                            'Written communication or alternative communication methods',
                                            'Assistance with transportation (e.g., accessible transportation services)',
                                            'Time management accommodations (e.g., reminders, alarms)',
                                            'Accommodations for specific medical conditions or allergies',
                                            'Accessible restroom facilities',
                                        ].map((accommodation) => (
                                            <Form.Check
                                                key={accommodation}
                                                type="checkbox"
                                                id={accommodation}
                                                label={accommodation}
                                                value={accommodation}
                                                onChange={handleCheckboxChange}
                                            />
                                        ))}
                                    </Col>

                                    <Col className="text-justify-center">
                                        {[
                                            'Adjustable workstation (e.g., height-adjustable desk and chair)',
                                            'Assistive technology (e.g., screen reader software, speech recognition software)',
                                            'Modified work schedule (e.g., flexible working hours, part-time hours)',
                                            'Physical accessibility modifications (e.g., ramps, wheelchair-accessible facilities)',
                                            'Visual aids (e.g., magnifying glass, enlarged font sizes)',
                                            'Auditory aids (e.g., closed captioning, amplified sound systems)',
                                            'Ergonomic equipment (e.g., ergonomic keyboard, ergonomic mouse)',
                                        ].map((accommodation) => (
                                            <Form.Check
                                                key={accommodation}
                                                type="checkbox"
                                                id={accommodation}
                                                label={accommodation}
                                                value={accommodation}
                                                onChange={handleCheckboxChange}
                                                style={{ borderColor: 'red' }}

                                            />
                                        ))}
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Row className='mt-3'>
                        <Col className='d-flex justify-content-end pe-0'>
                            <Button variant="success" size='lg'>Finish</Button>
                        </Col>
                    </Row>
                    </Row>

                </Container>
            </Form>
        </>
    );
}

export default ProfilingForm;
