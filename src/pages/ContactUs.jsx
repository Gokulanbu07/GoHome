// src/pages/ContactUs.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';
import '../styles/ContactUs.css'

const BACKGROUND_DARK_COLOR = '#050508';
const ACCENT_COLOR = '#D4AF37';
const CARD_DARK = '#0b0b10';
const TEXT_LIGHT = '#F5F5F5';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulated API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Full backend logic commented for now
        /*
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setStatus('error');
        }
        */

        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const getStatusMessage = () => {
        if (status === 'success') {
            return (
                <p className="mt-3 fw-bold" style={{ color: '#4caf50' }}>
                    Thank you for contacting us! We will get back to you shortly.
                </p>
            );
        }
        if (status === 'error') {
            return (
                <p className="mt-3 fw-bold" style={{ color: '#f44336' }}>
                    There was an error submitting your message. Please try again.
                </p>
            );
        }
        return null;
    };

    return (
        <div
            className="contact-page"
            style={{ backgroundColor: BACKGROUND_DARK_COLOR, minHeight: '100vh', padding: '4rem 0' }}
        >
            <Container>
                {/* Header */}
                <div className="text-center mb-5">
                    <h1 className="contact-header-title">Get In Touch</h1>
                    <p className="contact-header-sub">
                        We&apos;d love to hear from you. Reach out for support, partnership, or any rental-related queries.
                    </p>
                </div>

                {/* Top contact info cards */}
                <Row className="g-4 mb-5">
                    <Col md={4}>
                        <div className="contact-info-card h-100">
                            <i className="fas fa-map-marker-alt contact-info-icon"></i>
                            <div className="contact-info-title">Our Office</div>
                            <p className="contact-info-text">123 Main Street, Suite 400</p>
                            <p className="contact-info-text">Chennai, Tamil Nadu 600001</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="contact-info-card h-100">
                            <i className="fas fa-phone contact-info-icon"></i>
                            <div className="contact-info-title">Call Us</div>
                            <p className="contact-info-text">+1 (555) 123-4567</p>
                            <p className="contact-info-text">Mon - Fri: 9am - 5pm</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="contact-info-card h-100">
                            <i className="fas fa-envelope contact-info-icon"></i>
                            <div className="contact-info-title">Email Us</div>
                            <p className="contact-info-text">support@gohome.com</p>
                            <p className="contact-info-text">info@gohome.com</p>
                        </div>
                    </Col>
                </Row>

                {/* Form + Map */}
                <Row className="g-5">
                    <Col lg={6}>
                        <Card className="p-4 contact-form-card border-0">
                            <Card.Body>
                                <Card.Title className="contact-form-title">
                                    Send a Message
                                </Card.Title>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <div className="contact-label">Full Name</div>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your name"
                                                    required
                                                    className="contact-input"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <div className="contact-label">Email Address</div>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email"
                                                    required
                                                    className="contact-input"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <div className="contact-label">Subject</div>
                                        <Form.Control
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What is your query about?"
                                            required
                                            className="contact-input"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <div className="contact-label">Message</div>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your message here..."
                                            required
                                            className="contact-input"
                                        />
                                    </Form.Group>

                                    <Button
                                        type="submit"
                                        className="w-100 fw-bold py-2 btn-contact-submit"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Spinner
                                                    animation="border"
                                                    size="sm"
                                                    className="me-2"
                                                />{' '}
                                                Sending...
                                            </>
                                        ) : (
                                            'Submit Message'
                                        )}
                                    </Button>
                                    {getStatusMessage()}
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card className="contact-map-card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.203642342893!2d80.24581450221376!3d13.064562215456455!2m3!1f0!2f0!0f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52662058b8783d%3a0xc6e4b901630c7219!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1627999999000!5m2!1sen!2sin"
                                className="contact-map-iframe"
                                allowFullScreen=""
                                loading="lazy"
                                aria-hidden="false"
                                tabIndex="0"
                                title="Office Location Map"
                            ></iframe>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;
