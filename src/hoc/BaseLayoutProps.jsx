import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomepageComp from '../pages/HomepageComp';

const BaseLayoutProps = ({ children }) => ({...props}) => {
    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            backgroundColor: 'lightblue',
            minHeight: '100vh' // Ensure it fills the screen
        }}>
            <Header />
            
            <component {...props}/>
            
            <HomepageComp />
            <Footer />
        </div>
    );
};
export default BaseLayoutProps;