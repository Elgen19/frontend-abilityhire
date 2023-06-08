import React from 'react';
import { Container, Col, Row, Button, Form, Card, Carousel } from 'react-bootstrap';
import { FaBriefcase, FaLaptop, FaHeart, FaGraduationCap, FaCoffee } from 'react-icons/fa';
import NavigationComp from '../components/Navigations';
import FooterComp from '../components/Footers';
import Airasia from '../images/AirAsia.svg';
import Mcdo from '../images/McDonalds.svg';
import Starbs from '../images/Starbucks.svg';
import BBC from '../images/BBCNews.svg';
import Redbull from '../images/RedBull.svg';
import Shangrila from '../images/ShangriLa.svg';

function HomePage() {
    const mission = "We are dedicated to empowering individuals with disabilities by connecting them to a diverse range of meaningful job opportunities. Through our inclusive platform, we aim to bridge the gap between talent and employers, ensuring that every person with a disability has equal access to fulfilling employment.";

    const vision = "We envision a world where every person with a disability can find sustainable and rewarding employment. We strive to break down barriers and challenge stereotypes, creating a society that values the unique abilities and contributions of individuals with disabilities. Our goal is to transform the job market into an inclusive space that embraces diversity and provides equal opportunities for everyone.";

    const values = [
        "Inclusivity: Embracing diversity and providing equal opportunities for all individuals with disabilities.",
        "Empowerment: Equipping individuals with the tools and support needed to succeed in their careers.",
        "Accessibility: Creating an inclusive job search platform that is accessible to all users.",
        "Collaboration: Fostering partnerships and collaborations to expand employment opportunities for people with disabilities."
    ];

    const testimonials = [
        {
            name: "John Smith",
            jobPosition: "Software Engineer",
            disability: "Visual Impairment",
            image: "https://alis.alberta.ca/media/697690/software-engineer-shutterstock-401334661.jpg",
            testimonial: "The Job Search Application for PWDs has been a game-changer for me. As a visually impaired individual, finding job opportunities that cater to my needs was challenging. But with this app, I can easily search and filter jobs based on accessibility features. It has opened up new possibilities and helped me secure a job that values my skills and provides the necessary support."
        },
        {
            name: "Emma Johnson",
            jobPosition: "Customer Service Representative",
            disability: "Hearing Impairment",
            image: "https://images.fineartamerica.com/images-medium-large-5/6-disabled-woman-at-work-lee-powersscience-photo-library.jpg",
            testimonial: "I can't thank the Job Search Application for PWDs enough. As someone with a hearing impairment, communication accessibility is crucial for me. The app allows me to explore job opportunities that provide inclusive communication methods, such as video relay services or closed-captioning. It has enabled me to find a fulfilling job where my abilities are recognized and accommodated."
        },
        {
            name: "Alex Rodriguez",
            jobPosition: "Graphic Designer",
            disability: "Mobility Impairment",
            image: "https://bethel-university.imgix.net/news/articles/2020/images/smif-3.jpg?w=1600",
            testimonial: "Finding a job as a graphic designer with a mobility impairment was challenging until I discovered this app. It not only offers a wide range of remote job opportunities but also provides information about companies that prioritize accessibility in their workspaces. Thanks to the app, I found a remote position that allows me to unleash my creativity and work without limitations."
        }
    ];


    const jobCategories = [
        { name: 'Business', icon: <FaBriefcase /> },
        { name: 'Technology', icon: <FaLaptop /> },
        { name: 'Healthcare', icon: <FaHeart /> },
        { name: 'Education', icon: <FaGraduationCap /> },
        { name: 'Hospitality', icon: <FaCoffee /> },
    ];

    const featuredEmployers = [
        { name: 'Air Asia', logo: Airasia },
        { name: 'Starbucks', logo: Starbs },
        { name: 'BBC News', logo: BBC },
        { name: 'Redbull', logo: Redbull },
        { name: 'McDonalds', logo: Mcdo },
        { name: 'Shangri-La', logo: Shangrila },
    ];

    return (
        <>
            <NavigationComp />

            <Form>
                <Container fluid className="vh-93 bg-dark">
                    <Row>
                        <Col className='mt-3'>
                            <Card className="border-0 rounded-0">
                                <Row className="g-0">
                                    <Col md={8}>
                                        <Card.Img variant="top" src="https://apm.net.au/api/galleryhandler.ashx?moid=2589&dt=3&g=2" alt="Hero Image" style={{ height: '450px' }} />
                                    </Col>
                                    <Col className="text-center text-light bg-dark">
                                        <Card.Body>
                                            <div className="d-flex align-items-center">
                                                <h1 className="text-white bg-success px-3 py-2 mb-3">Discover your Path to Success.</h1>
                                            </div>
                                            <Card.Text className="mb-5 mt-3 d-flex align-items-center" >
                                                <span className="h5">Find meaningful employment opportunities tailored specifically for individuals with disabilities. We connect you to inclusive companies that value your unique abilities and provide the support you need to succeed.</span>
                                            </Card.Text>
                                            <div className="d-flex justify-content-center" >
                                                <Button variant="success" size="lg" href='/LoginForm'>Get Started</Button>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>


                            <Card className="mt-5 bg-dark border-0">
                                <Card.Body>
                                    <h1 className="font-weight-bold">
                                        <span className="bg-success text-white px-3 py-2">Mission, Vision, and Values</span>
                                    </h1>


                                    <Row className='mt-4'>
                                        <Col md={4} >
                                            <Card className="mb-4 h-100">
                                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Mission" />
                                                <Card.Body>
                                                    <Card.Title className="font-weight-bold text-center">Mission</Card.Title>
                                                    <Card.Text className='text-center'>{mission}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card className="mb-4 h-100">
                                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Vision" />
                                                <Card.Body>
                                                    <Card.Title className="font-weight-bold text-center">Vision</Card.Title>
                                                    <Card.Text className='text-center'>{vision}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4}>
                                            <Card className="mb-4 h-100">
                                                <Card.Img variant="top" style={{ height: '300px' }} src="https://images.unsplash.com/photo-1463736932348-4915535cf6f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFzc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Values" />
                                                <Card.Body>
                                                    <Card.Title className="font-weight-bold text-center">Values</Card.Title>
                                                    <ul>
                                                        {values.map((value, index) => (
                                                            <li key={index}>
                                                                <strong>{value.split(":")[0]}:</strong> {value.split(":")[1]}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row>
                                </Card.Body>
                            </Card>

                            <Card className="mt-4 bg-dark border-0" >
                                <Card.Body>

                                    <h1 className="font-weight-bold mb-4 d-flex justify-content-end">
                                        <span className="bg-success text-white px-3 py-2">Job Catergories</span>
                                    </h1>

                                    <Row className="justify-content-center">
                                        {jobCategories.map((category, index) => (
                                            <Col sm={4} md={3} lg={2} key={index}>
                                                <Card className="category-card">
                                                    <Card.Body>
                                                        {category.icon}
                                                        <Card.Title>{category.name}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>

                            <Card className="mt-4 bg-dark text-light border-0">
                                <Card.Body>
                                    <h1 className="font-weight-bold d-flex justify-content-start">
                                        <span className="bg-success text-white px-3 py-2">Testimonials</span>
                                    </h1>

                                    <Carousel controls={false} indicators={false} >
                                        {testimonials.map((testimonial, index) => (
                                            <Carousel.Item key={index} interval={2000}>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Card.Title className='mt-3' > <h3>{testimonial.name}</h3></Card.Title>
                                                        <Card.Subtitle className='mb-3'>{testimonial.jobPosition} ({testimonial.disability})</Card.Subtitle>
                                                        <Card.Text style={{ lineHeight: 2.0 }}>{testimonial.testimonial}</Card.Text>
                                                    </Col>
                                                    <Col sm={8} >
                                                        <Card.Img src={testimonial.image} alt={testimonial.name} style={{ height: '500px' }} />
                                                    </Col>

                                                </Row>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Card.Body>
                            </Card>







                            <Card className="mt-4">
                                <Card.Body>
                                    <h1 className="font-weight-bold d-flex justify-content-end mb-3">
                                        <span className="bg-success text-white px-3 py-2">Featured Employers</span>
                                    </h1>
                                    <Row className="justify-content-center align-items-center">
                                        {featuredEmployers.map((employer, index) => (
                                            <Col sm={4} md={3} lg={2} key={index} className="text-center">
                                                <Card className='border-0 mb-3'>
                                                    <Card.Img variant="top" src={employer.logo} alt={employer.name} />
                                                    <Card.Body>
                                                        <Card.Title>{employer.name}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Form>

            <FooterComp />
        </>
    );
}

export default HomePage;
