import React, { useState, useEffect } from 'react'; // Added hooks
import { Container, Button, Row, Col, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import '../styles/HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();
    
    // --- API STATE ---
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    // --- FETCH DATA FROM LARAVEL ---
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/properties')
            .then(response => {
                setProperties(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching properties:", error);
                setLoading(false);
            });
    }, []);

    const handleViewDetails = (propertyId) => {
        navigate(`/properties/${propertyId}`);
    };

    // --- DARK LUXURY THEME COLORS (UNCHANGED) ---
    const BACKGROUND_DARK_COLOR = '#050508'; 
    const PRIMARY_TEXT_COLOR = '#F5F5F5';    
    const ACCENT_GOLD = '#D4AF37';           
    const CARD_DARK = '#111118';             

    const HERO_IMAGE_URL = '/assets/Home.jpg';

    // --- Categories & WhyPoints (UNCHANGED) ---
    const categories = [
        { key: 'rent', label: 'Rent', description: 'Curated rental homes with transparent pricing.', badge: 'Popular', icon: '🏠' },
        { key: 'pg', label: 'PG', description: 'Comfortable PG options for students & working professionals.', badge: 'Budget Friendly', icon: '🛏️' },
        { key: 'family', label: 'Family', description: 'Spacious homes in family-friendly localities.', badge: 'Safe Localities', icon: '👨‍👩‍👧‍👦' },
        { key: 'bachelor', label: 'Bachelors', description: 'Flexible bachelor accommodations with essential amenities.', badge: 'Flexible Stay', icon: '🧑‍💻' },
        { key: 'rooms', label: 'Rooms', description: 'Single & shared rooms with all basics covered.', badge: 'Easy Move-in', icon: '🚪' },
    ];

    const whyPoints = [
        { key: 'verified', title: 'Verified Listings', description: 'Every property is verified by our team to ensure accurate details, real photos, and genuine owners.', icon: '✔️' },
        { key: 'support', title: 'Dedicated Support', description: 'Get assistance at every step — from shortlisting to finalizing the agreement and moving in.', icon: '🤝' },
        { key: 'transparent', title: 'Transparent Pricing', description: 'No hidden charges. View clear rent, deposit, and maintenance details before you decide.', icon: '💰' },
        { key: 'comfort', title: 'Comfort & Convenience', description: 'Find homes and rooms near your workplace or college, with the amenities you truly need.', icon: '✨' },
    ];

    return (
        <>
            <div className="homepage-main" style={{ backgroundColor: BACKGROUND_DARK_COLOR, color: PRIMARY_TEXT_COLOR }}>
                {/* ================= HERO SECTION ================= */}
                <section
                    className="hero-section"
                    style={{
                        backgroundImage: `
                            linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(8, 8, 10, 0.9)),
                            url('${HERO_IMAGE_URL}')
                        `,
                    }}
                >
                    <div className="hero-overlay" />
                    <Container>
                        <div className="hero-content">
                            <div className="hero-badge">
                                PREMIUM RENTALS
                                <span style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: ACCENT_GOLD }} />
                                CURATED FOR YOU
                            </div>
                            <h1 className="hero-title">
                                Find your <span className="hero-highlight">next perfect stay</span> in the city.
                            </h1>
                            <p className="hero-subtitle">
                                Discover handpicked homes, PGs, and apartments for families and bachelors.
                                Verified listings, transparent pricing, and a smooth renting experience — all in one place.
                            </p>
                            <div className="hero-actions">
                                <Button className="btn-gold-primary" onClick={() => navigate('/properties')}>
                                    Explore Listings
                                </Button>
                                <Button
                                    className="btn-outline-light-rounded"
                                    onClick={() => {
                                        const el = document.getElementById('featured-section');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    View Featured Homes
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ================= SEARCH BAR ================= */}
                <section className="search-bar-wrapper">
                    <Container>
                        <div className="search-bar-container">
                            <Form>
                                <Row className="g-3 align-items-end">
                                    <Col xs={12} md={4}>
                                        <div>
                                            <div className="search-label">Location</div>
                                            <Form.Control type="text" placeholder="Enter city or area" className="search-input" />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <div>
                                            <div className="search-label">Category</div>
                                            <Form.Select className="search-select">
                                                <option value="">Select category</option>
                                                <option value="rent">Rent</option>
                                                <option value="pg">PG</option>
                                                <option value="family">Family</option>
                                                <option value="bachelor">Bachelors</option>
                                                <option value="rooms">Rooms</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <div>
                                            <div className="search-label">Budget (₹)</div>
                                            <Form.Control type="number" placeholder="Max budget" className="search-input" />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={1}>
                                        <Button className="btn-search-gold">Search</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Container>
                </section>

                {/* ================= CATEGORY SECTION ================= */}
                <section className="category-section">
                    <Container>
                        <div className="category-header">
                            <h2 className="category-title">
                                Browse by <span style={{ color: ACCENT_GOLD }}>Category</span>
                            </h2>
                            <p className="category-subtitle">
                                Find the perfect match for your lifestyle – from cozy PGs to premium family homes and flexible bachelor stays.
                            </p>
                        </div>
                        <Row className="g-4">
                            {categories.map((cat) => (
                                <Col key={cat.key} xs={12} sm={6} lg={4}>
                                    <div className="category-card">
                                        <div className="category-icon-wrap"><span role="img" aria-label={cat.label}>{cat.icon}</span></div>
                                        <div className="category-label-row">
                                            <div className="category-label">{cat.label}</div>
                                            <div className="category-badge">{cat.badge}</div>
                                        </div>
                                        <div className="category-description">{cat.description}</div>
                                        <div className="category-link" onClick={() => navigate('/properties')}>
                                            Explore {cat.label} <span>→</span>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* ================= WHY CHOOSE US SECTION ================= */}
                <section className="why-section">
                    <Container>
                        <div className="why-header">
                            <h2 className="why-title">Why <span style={{ color: ACCENT_GOLD }}>Choose Us</span>?</h2>
                            <p className="why-subtitle">We focus on trust, comfort, and transparency.</p>
                        </div>
                        <Row className="g-4">
                            {whyPoints.map((point) => (
                                <Col key={point.key} xs={12} sm={6} lg={3}>
                                    <div className="why-card">
                                        <div className="why-icon-wrap"><span role="img" aria-label={point.title}>{point.icon}</span></div>
                                        <div className="why-card-title">{point.title}</div>
                                        <div className="why-card-text">{point.description}</div>
                                        <div className="why-card-tag">trusted by renters</div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* ================= FEATURED LISTINGS (REAL DATA) ================= */}
                <Container id="featured-section" className="mt-5 pb-5">
                    <h2 className="text-center mb-4">Featured Listings</h2>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {loading ? (
                            <Col className="text-center w-100"><p>Loading Premium Homes...</p></Col>
                        ) : (
                            properties.map((property) => (
                                <Col key={property.id}>
                                    <Card className="property-card h-100" style={{ backgroundColor: CARD_DARK, border: `1px solid #222` }}>
                                        {/* Matches backend field 'image' or 'image_url' */}
                                        <Card.Img variant="top" src={property.image || 'https://placehold.co/400x300/111118/F5F5F5?text=Property'} alt={property.title} />
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title className="card-title" style={{ color: ACCENT_GOLD }}>{property.title}</Card.Title>
                                            <Card.Text style={{ color: PRIMARY_TEXT_COLOR }}>
                                                <strong>Price:</strong> ₹{property.price}<br />
                                                <strong>Location:</strong> {property.location}
                                            </Card.Text>
                                            <Button
                                                className="mt-auto btn-gold-primary"
                                                onClick={() => handleViewDetails(property.id)}
                                            >
                                                View Details
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        )}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default HomePage;