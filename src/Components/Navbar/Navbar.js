import React from 'react';
import './Navbar.css'
import { withRouter } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav>
            <button className='nav-button' onClick={() => props.history.push('/')}>Home</button>
            <button className='middle-button' onClick={() => props.history.push('/projects')}>Projects</button>
            <button className='nav-button' onClick={() => props.history.push('/about')}>About</button>
        </nav>
    );
}

export default withRouter(Navbar);