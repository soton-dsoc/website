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
                <Button>This is the footer</Button>
                <div className="social" id="social-box">
                    <div className="twitter" id="twitter-box">
                        <img src={twitterLogo} className="icon" id="twitter-icon">
                            
                        </img>
                        <div className="username" id="twitter-username">

                        </div>
                    </div>
                    <div className="linkedin" id="linkedin-box">
                        <img src={linkedinLogo} className="icon" id="linkedin-icon">
                            
                        </img>
                        <div className="username" id="linkedin-username">

                        </div>
                    </div>
                    <div className="discord" id="discord-box">
                        <img src={discordLogo} className="icon" id="discord-icon">
                            
                        </img>
                        <div className="username" id="discord-server">

                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;
