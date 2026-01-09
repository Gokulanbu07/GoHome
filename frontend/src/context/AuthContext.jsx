import React, { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if user is already logged in on page load
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        if (storedToken && storedUser) {
            setUser(JSON.parse(storedUser));
            api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        }
        setLoading(false);
    }, []);

    // Matches your Register.jsx: await register(email, password, { extraData })
    const register = async (email, password, extraData) => {
        try {
            const payload = {
                email,
                password,
                ...extraData // This pulls in full_name, phone_number, and role
            };
            const response = await api.post('/register', payload);
            
            if (response.data.success) {
                const { user, access_token } = response.data;
                localStorage.setItem('token', access_token);
                localStorage.setItem('user', JSON.stringify(user));
                api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                setUser(user);
                return { success: true, user };
            }
            return { success: false, message: response.data.message };
        } catch (error) {
            return { 
                success: false, 
                message: error.response?.data?.message || 'Registration failed' 
            };
        }
    };

    // Matches your Login.jsx: await login(email, password)
    const login = async (email, password) => {
    try {
        const response = await api.post('/login', { email, password });
        if (response.data.success) {
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
            setUser(response.data.user);
            return { success: true, user: response.data.user };
        }
        return { success: false, message: 'Invalid credentials' };
    } catch (error) {
        return { 
            success: false, 
            message: error.response?.data?.message || 'Server error' 
        };
    }
};

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        delete api.defaults.headers.common['Authorization'];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);