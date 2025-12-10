// src/pages/UserDashboard.jsx

import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UserNavbar from '../components/common/UserNavbar';

import '../styles/UserDashboard.css';

const ACCENT_COLOR = '#D4AF37';
const BACKGROUND_DARK_COLOR = '#050508';
const CARD_DARK = '#0b0b10';
const TEXT_LIGHT = '#F5F5F5';

const UserDashboard = () => {
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // Redirect if not logged in
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    if (!user) return null;

    const firstName = user.full_name ? user.full_name.split(' ')[0] : 'User';

    return (
        <div
            className="d-flex flex-column min-vh-100"
            style={{ backgroundColor: BACKGROUND_DARK_COLOR }}
        >
            <UserNavbar primaryColor={ACCENT_COLOR} lightBg={false} />

            <div className="ud-wrapper">
                <Container>
                    {/* Greeting + Summary */}
                    <Row className="mb-4">
                        <Col lg={8} className="mx-auto">
                            <div className="ud-summary-card">
                                <Row className="align-items-center g-3">
                                    <Col xs="auto">
                                        <div className="ud-avatar">
                                            {user.full_name
                                                ? user.full_name.charAt(0).toUpperCase()
                                                : 'U'}
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="ud-greeting-title">
                                            Hi {firstName}, welcome back 👋
                                        </div>
                                        <div className="ud-greeting-sub">
                                            Manage your listings, explore rentals, and keep your profile up to date.
                                        </div>
                                        <div className="ud-role-pill">
                                            {user.role === 'admin' ? 'ADMIN' : 'USER'}
                                        </div>
                                    </Col>
                                </Row>

                                {/* Quick stats */}
                                <Row className="mt-4 g-3">
                                    <Col sm={4}>
                                        <div className="ud-stat-card">
                                            <div className="ud-stat-label">My Listings</div>
                                            <div className="ud-stat-value">–</div>
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="ud-stat-card">
                                            <div className="ud-stat-label">Saved Homes</div>
                                            <div className="ud-stat-value">–</div>
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className="ud-stat-card">
                                            <div className="ud-stat-label">Messages</div>
                                            <div className="ud-stat-value">–</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    {/* Action cards */}
                    <Row className="g-4">
                        <Col lg={8} className="mx-auto">
                            <div className="ud-actions-title">Quick Actions</div>
                            <Row className="g-3">
                                <Col md={6}>
                                    <div className="ud-action-card">
                                        <div>
                                            <div className="ud-action-title">Browse Properties</div>
                                            <div className="ud-action-text">
                                                Explore all available rentals and find homes that match your needs.
                                            </div>
                                        </div>
                                        <Button
                                            as={Link}
                                            to="/browse"
                                            className="ud-btn-gold mt-1"
                                        >
                                            View Properties
                                        </Button>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="ud-action-card">
                                        <div>
                                            <div className="ud-action-title">My Listings</div>
                                            <div className="ud-action-text">
                                                See and manage the properties you&apos;ve listed on GoHome.
                                            </div>
                                        </div>
                                        <Button
                                            as={Link}
                                            to="/my-properties"
                                            className="ud-btn-gold mt-1"
                                        >
                                            Go to My Listings
                                        </Button>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="ud-action-card">
                                        <div>
                                            <div className="ud-action-title">Add New Property</div>
                                            <div className="ud-action-text">
                                                Own a place to rent? Add it here and start receiving enquiries.
                                            </div>
                                        </div>
                                        <Button
                                            as={Link}
                                            to="/add-property"
                                            className="ud-btn-gold mt-1"
                                        >
                                            Add Property
                                        </Button>
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="ud-action-card">
                                        <div>
                                            <div className="ud-action-title">Profile & Settings</div>
                                            <div className="ud-action-text">
                                                Review your account details, contact info, and role.
                                            </div>
                                        </div>
                                        <Button
                                            as={Link}
                                            to="/profile"
                                            className="ud-btn-gold mt-1"
                                        >
                                            View Profile
                                        </Button>
                                    </div>
                                </Col>

                                {user.role === 'admin' && (
                                    <Col md={6}>
                                        <div className="ud-action-card">
                                            <div>
                                                <div className="ud-action-title">Admin Dashboard</div>
                                                <div className="ud-action-text">
                                                    Access admin tools, manage users and oversee platform activity.
                                                </div>
                                            </div>
                                            <Button
                                                as={Link}
                                                to="/admin/dashboard"
                                                className="ud-btn-gold mt-1"
                                            >
                                                Go to Admin
                                            </Button>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default UserDashboard;
