import React from 'react';
import { Card, Button } from 'react-bootstrap';
import NavigationComp from '../components/Navigations';
import FooterComp from '../components/Footers';

const events = [
    {
        title: 'Tech Talks Summit',
        date: 'September 15-16, 2023',
        time: '10:00 AM - 5:00 PM',
        location: 'Grand Convention Center',
        description: 'Join us for the Tech Talks Summit, a two-day conference bringing together tech enthusiasts, industry experts, and thought leaders. Explore the latest trends in technology, attend insightful sessions, and network with like-minded individuals. Whether you are a developer, designer, entrepreneur, or technology enthusiast, this event offers a platform to expand your knowledge and stay up-to-date with the ever-evolving tech landscape.',
        speakers: ['John Smith', 'Jane Doe', 'Sarah Thompson'],
    },
    {
        title: 'Health and Wellness Expo',
        date: 'October 5-6, 2023',
        time: '9:00 AM - 6:00 PM',
        location: 'Wellness Center',
        description: 'Join us at the Health and Wellness Expo, a two-day event dedicated to promoting physical and mental well-being. Discover a wide range of exhibitors showcasing the latest products and services related to health, fitness, nutrition, and mental wellness. Attend interactive workshops, participate in fitness challenges, and gain valuable insights from renowned health experts. Whether you are a fitness enthusiast, health professional, or simply looking to improve your well-being, this expo offers a holistic experience for all.',
        speakers: ['Dr. Amanda Davis', 'Yoga Guru Lisa', 'Nutritionist Mark Johnson'],
    },
    {
        title: 'Entrepreneurship Bootcamp',
        date: 'November 10-12, 2023',
        time: '9:00 AM - 6:00 PM',
        location: 'Startup Hub',
        description: 'Join us at the Entrepreneurship Bootcamp, a three-day intensive program designed to equip aspiring entrepreneurs with the skills and knowledge needed to launch and grow successful startups. Learn from experienced mentors and industry experts, participate in hands-on workshops, and network with fellow entrepreneurs. Whether you have a business idea or are looking to enhance your entrepreneurial skills, this bootcamp provides a supportive environment to turn your dreams into reality.',
        speakers: ['Entrepreneur Jessica', 'Business Coach Michael', 'Startup Founder Rachel'],
    },
];

function Events() {
    return (
        <>
            <NavigationComp />

           
            <div className="container">
            <div className="d-flex align-items-center justify-content-end mt-3">
                <h1 className="text-white bg-success px-3 py-2 mb-3">Upcoming Events</h1>
            </div>

                {events.map((event, index) => (
                    <Card key={index} className="mb-4">
                        <Card.Body>
                            <Card.Title>{event.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">{event.time}</Card.Subtitle>
                            <Card.Text>{event.location}</Card.Text>
                            <Card.Text>{event.description}</Card.Text>
                            <Card.Text>Speakers: {event.speakers.join(', ')}</Card.Text>
                            <Button variant="success">Register</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <FooterComp/>
        </>

    );
}

export default Events;
