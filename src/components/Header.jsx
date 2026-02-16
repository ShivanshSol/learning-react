import React from 'react';

const Header = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'lightgray', padding: '10px'}}>
            <h1>Learning React</h1>
            <ul style={{display: 'flex', listStyleType: 'none', gap: '20px'}}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Header;