import './Navbar.css';
import { Button } from '@mantine/core';
import React, { useState } from 'react';
import dsocLogo from './dsoc_logo.svg'
import uosLogo from './uos_logo.svg'




function Navbar() {

    const [scroll, setScroll] = useState(false)

    window.onscroll = (e) => {
        if (window.scrollY > 10) {
            setScroll(true)
        }

        else {
            setScroll(false)
        }
    }

    return (
        <div className="Navbar" style={scroll ? { boxShadow: '0px 5px 20px 0px black', backgroundColor: 'rgba(0, 0, 0, 0.25)' } : null}>
            <div className='navbar-content-wrapper'>
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
        </div>
    )
}

export default Navbar;
