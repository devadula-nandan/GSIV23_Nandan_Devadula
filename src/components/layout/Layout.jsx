import React from 'react';
import Navbar from './navbar/Navbar';

// This is the Layout Wrapper component containing the Navbar on top
function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="container px-3 py-4 mx-auto">
                {children}
            </div>
        </div>
    );
}

export default Layout;
