import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomepageComp from '../pages/HomepageComp';

const BaseLayout = ({ children }) => {
    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            backgroundColor: 'lightblue',
            minHeight: '100vh' // Ensure it fills the screen
        }}>
            <Header />
            
            <main>{children}</main>
            
            <HomepageComp />
            <Footer />
        </div>
    );
};

export default BaseLayout;