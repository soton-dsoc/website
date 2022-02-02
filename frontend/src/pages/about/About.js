import react from 'react';
import React from 'react';

import './About.css';
import { Button } from '@mantine/core';
import george from './george.png'


function About() {
    return (
        <div className='about' id="about">
            <h1>About us</h1>

            <div className='about-text'>
                <p >
                    We are a group of enthusiasts seeking to discuss the emerging world of crypto, blockchain, web3 and beyond...
                </p>
                <p>
                    We are not experts on this, and we invite PhD students to give talks about advanced topics who you can ask more in-depth questions
                </p>

                <div className='spacer'></div>
            </div>

            <div className='team flex row' >
                <div className='team-card flex row' >
                    <img src={george} style={{ height: "100px" }} ></img>
                    <div className='team-card-text flex column'>
                        <div className='team-card-name'>
                            George Giamouridis
                        </div>
                        <div className='team-card-name-text'>
                            PhD Researcher <br></br>
                            Cyber Security Research Group <br></br>
                            University of Southampton
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About;