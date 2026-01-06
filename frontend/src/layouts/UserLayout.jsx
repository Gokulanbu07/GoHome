// src/layouts/UserLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavbar from '../components/common/UserNavbar';

// --- NEW COLOR CONFIGURATION (Dark Luxury Theme) ---
const BACKGROUND_DARK_COLOR = '#050508';   // Near-black background
const PRIMARY_TEXT_COLOR = '#F5F5F5';      // Light text
const ACCENT_GOLD = '#D4AF37';             

const UserLayout = () => {
    return (
        <div
            className="user-layout"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: BACKGROUND_DARK_COLOR,
                color: PRIMARY_TEXT_COLOR,          
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
        >
            {/* Navbar now assumes a dark background with gold/light text */}
            <UserNavbar 
                primaryColor={ACCENT_GOLD}  
                lightBg={false}             
            />

            {/* Main Content Area */}
            <main style={{ flexGrow: 1 }}>
                <Outlet />
            </main>

            {/* Footer can be added later if needed */}
        </div>
    );
};

export default UserLayout;
