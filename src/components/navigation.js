import React from 'react';
import Login from './login';
import Registry from './registry';

const Navigation = () => {
    return (
    <nav>
        <ul>
        <li><Link to="./login">Login</Link></li>
        <li><Link to="./registry">Registry</Link></li>
        </ul>
    </nav>
    );
};

export default Navigation;