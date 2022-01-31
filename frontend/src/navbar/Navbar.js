import './Navbar.css';
import { Button } from '@mantine/core';
import React from 'react';
import dsocLogo from './dsoc_logo.svg'
import uosLogo from './uos_logo.svg'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className='left'>
                    <img src={dsocLogo}></img>

                    <div className='pages'>
                        <div>About</div>
                        <div>Events</div>
                    </div>
                </div>

                <div className='right'>
                    <img src={uosLogo}></img>
                </div>
            </div>
        )
    }
}

export default Navbar;
