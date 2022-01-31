import './Footer.css';
import { Button } from '@mantine/core';
import React from 'react';

import twitterLogo from './twitter-logo.svg';
import linkedinLogo from './linkedin-logo.svg';
import discordLogo from './discord-logo.svg';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div id="social-box">
                    <div className="social twitter" id="twitter-box">
                        <img src={twitterLogo} className="icon" id="twitter-icon">
                            
                        </img>
                    </div>
                    <div className="social linkedin" id="linkedin-box">
                        <img src={linkedinLogo} className="icon" id="linkedin-icon">
                            
                        </img>
                    </div>
                    <div className="social discord" id="discord-box">
                        <img src={discordLogo} className="icon" id="discord-icon">
                            
                        </img>
                    </div>
                </div>
                <div class="menutext" id="home">Home</div>
                <div class="menutext" id="home">About</div>
                <div class="menutext" id="home">Events</div>
            </div>
        );
    };
};

export default Footer;
