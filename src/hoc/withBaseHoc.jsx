import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BaseHOC = (WrappedComponent) => {
    return (props) => {      
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'offwhite', width: '100%', height: '100%' }}>
                <Header />
                <WrappedComponent {...props} />
                <Footer />
            </div>
        );
    }
};

export default BaseHOC;