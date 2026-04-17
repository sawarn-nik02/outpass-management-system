import React from 'react';
import './Header.css'; // Assuming you want to add some styles

const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo'>Outpass Management System</h1>
            <nav className='navigation'>
                <ul>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;