import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import NavigationComp from '../components/Navigations';
import FooterComp from '../components/Footers'
import Elgens from '../images/Elgen.jpg'

function AboutUs() {
  return (
    <>
      <NavigationComp />
      <div className="container">
        <h1 className="font-weight-bold d-flex justify-content-end mt-3 mb-3">
          <span className="bg-success text-white px-3 py-2">About Us</span>
        </h1>

        <Card className='mb-3 bg-dark text-light border-0'>
          <Card.Body>
            <h5 className="font-weight-bold d-flex justify-content-start mt-3 mb-3">
              <span className="bg-success text-white px-3 py-2">Introduction</span>
            </h5>
            <Card.Text>
              AbilityHire is a leading platform dedicated to creating equal employment opportunities for persons with disabilities (PWDs).
              We understand the unique challenges faced by PWDs in accessing the job market, and we are committed to breaking down barriers and fostering inclusivity in the workforce.
              Through our innovative approach and comprehensive support, we aim to empower PWDs to showcase their skills, talents, and potential.
            </Card.Text>
          </Card.Body>
        </Card>


        <Card className='mb-3 bg-dark text-light border-0'>
          <Card.Body>
            <h5 className="font-weight-bold d-flex justify-content-start mt-3 mb-3">
              <span className="bg-success text-white px-3 py-2">Unique Selling Points</span>
            </h5>

            <Row>
              <Col md={4}>
                <Card className="mb-3 bg-dark text-light border-0 h-100">
                  <Card.Img variant="top" src="https://gurtam.com/storage/news/6024eb14597a5/data-processing.png" alt="Customized Job Matching" style={{ height: '400px' }} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Customized Job Matching</Card.Title>
                    <Card.Text>
                      We utilize advanced algorithms to match PWDs with job opportunities that align with their skills, abilities, and preferences.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 bg-dark text-light border-0 h-100">
                  <Card.Img variant="top" src="https://images.policyproscdn.co.uk/images/Articles/workwheelchair.jpg" alt="Inclusive Employer Network" style={{ height: '400px' }} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Inclusive Employer Network</Card.Title>
                    <Card.Text>
                      We have built a diverse network of employers who are committed to hiring and supporting PWDs, ensuring equal opportunities in the workplace.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 bg-dark text-light border-0 h-100">
                  <Card.Img variant="top" src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_408,w_724,x_0,y_10/w_auto:100,w_1200,q_35,f_auto/v1/Technology/assistivetech_ywth0s.jpg" alt="Accessibility Solutions" style={{ height: '400px' }} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>Accessibility Solutions</Card.Title>
                    <Card.Text>
                      We provide resources and support to employers for creating accessible work environments, including assistive technologies and accommodations.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>


        <Card className='mb-3'>
          <Card.Body>
            <h5 className="font-weight-bold d-flex justify-content-start mt-3 mb-3">
              <span className="bg-success text-white px-3 py-2">About the Author</span>
            </h5>

            <Row>
              <Col sm={4} className="text-center ">
                <img src={Elgens} alt="Elgen Prestosa" style={{ height: '350px', width: '350px' }} className='d-flex justfy-content-start' />
                <div>
                  <h5>Elgen Prestosa</h5>
                  <p>Lead Developer</p>
                </div>
              </Col>
              <Col sm={8}>
                <div >
                  <p>
                    Elgen Prestosa, our Lead Developer, is the driving force behind the inception and development of AbilityHire.
                    With a deep passion for technology and a commitment to social impact, Elgen envisioned a platform that could bridge the gap between persons with disabilities (PWDs) and employment opportunities.
                    Inspired by personal experiences and the challenges faced by PWDs in accessing the job market, Elgen embarked on a mission to create a platform that would empower PWDs to showcase their abilities and connect with inclusive employers.
                  </p>
                  <p>
                    Through meticulous planning, innovative problem-solving, and countless hours of development, Elgen brought AbilityHire to life.
                    His expertise in web development, coupled with a strong understanding of accessibility and user experience, has enabled him to create a user-friendly platform that caters to the unique needs of PWDs and employers alike.
                    Elgen's unwavering dedication and his belief in the power of technology to drive positive change have been instrumental in shaping AbilityHire into what it is today.
                  </p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>

      <FooterComp />
    </>
  );
}

export default AboutUs;
