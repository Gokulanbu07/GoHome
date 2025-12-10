import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutUs.css';

const AboutUs = () => {
    const navigate = useNavigate();

    const handleCtaClick = () => {
        navigate('/contact');
    };

    return (
        <div className="about-us-page">
            {/* Hero */}
            <header className="about-hero">
                <Container>
                    <div className="about-eyebrow">ABOUT GOHOME</div>
                    <h1 className="about-hero-title">
                        Building <span>trusted</span> rental experiences.
                    </h1>
                    <p className="about-hero-sub">
                        We combine local expertise with technology to help you discover verified rentals,
                        comfortable stays, and homes that truly fit your life.
                    </p>
                </Container>
            </header>

            {/* Core values / mission & vision */}
            <section className="about-section">
                <Container>
                    <div className="about-section-heading">
                        <h2>Our Core Values</h2>
                        <p>
                            A clear purpose drives us forward and guides every interaction with owners and tenants.
                        </p>
                    </div>
                    <Row className="g-4">
                        <Col md={6}>
                            <div className="about-card h-100">
                                <h4>Our Mission</h4>
                                <p>
                                    To simplify the home rental process for everyone. We focus on transparency,
                                    reliability, and genuine support — so every move feels like a step up, not a
                                    burden.
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="about-card h-100">
                                <h4>Our Vision</h4>
                                <p>
                                    To be the most trusted rental platform, where every listing is verified, every
                                    conversation is clear, and every user feels confident about the place they choose
                                    to call home.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team */}
            <section className="about-team-section">
                <Container>
                    <Row className="text-center mb-4">
                        <Col lg={{ span: 8, offset: 2 }} className="about-team-heading">
                            <h2>Meet Our Top Agents</h2>
                            <p>
                                A dedicated team working closely with owners and tenants to ensure smooth, honest, and
                                stress-free renting.
                            </p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <Col lg={4} md={6}>
                            <div className="team-member-card">
                                <img
                                    src="https://placehold.co/120x120/222222/F5F5F5?text=V"
                                    className="team-member-img"
                                    alt="Vasanth"
                                />
                                <div className="team-member-name">Prema</div>
                                <div className="team-member-role">Managing Director, Chennai</div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="team-member-card">
                                <img
                                    src="https://placehold.co/120x120/222222/F5F5F5?text=N"
                                    className="team-member-img"
                                    alt="Nishita"
                                />
                                <div className="team-member-name">Nishita</div>
                                <div className="team-member-role">Senior Consultant, Coimbatore</div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="team-member-card">
                                <img
                                    src="https://placehold.co/120x120/222222/F5F5F5?text=G"
                                    className="team-member-img"
                                    alt="Gokul"
                                />
                                <div className="team-member-name">Gokul</div>
                                <div className="team-member-role">Regional Manager, Bangalore</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* CTA */}
            <section className="about-cta-section">
                <Container>
                    <h2 className="about-cta-title">Ready to start your search?</h2>
                    <p className="about-cta-sub">
                        Tell us what you&apos;re looking for — a family home, bachelor stay, or PG — and we&apos;ll
                        help you find the best options faster.
                    </p>
                    <Button
                        size="lg"
                        onClick={handleCtaClick}
                        className="about-cta-button"
                    >
                        Contact Us <i className="fas fa-chevron-right ms-2"></i>
                    </Button>
                </Container>
            </section>
        </div>
    );
};

export default AboutUs;
