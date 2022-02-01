import './Footer.css';
import React from 'react';

import twitterLogo from './twitter-logo.svg';
import linkedinLogo from './linkedin-logo.svg';
import discordLogo from './discord-logo.svg';
import dsocLogo from './soton-dSoc-icon-white.svg';
import EmailForm from './EmailForm';

class Footer extends React.Component {

    render() {
        return (
            <div className="Footer">
                <div id="social-box">
                    <div className="social twitter" id="twitter-box">
                        <img alt="" src={twitterLogo} className="icon" id="twitter-icon">
                            
                        </img>
                    </div>
                    <div className="social linkedin" id="linkedin-box">
                        <img alt="" src={linkedinLogo} className="icon" id="linkedin-icon">
                            
                        </img>
                    </div>
                    <div className="social discord" id="discord-box">
                        <img alt="" src={discordLogo} className="icon" id="discord-icon">
                            
                        </img>
                    </div>
                </div>
                <div className="footertext">Home</div>
                <div className="footertext">About</div>
                <div className="footertext">Events</div>
                <div id="dsoc-icon">
                    <img alt="" id="dsoc-logo" src={dsocLogo}></img>
                </div>
                <div className="EmailForm">
                    <EmailForm />
                </div>
            </div>
        );
    };
};

export default Footer;
