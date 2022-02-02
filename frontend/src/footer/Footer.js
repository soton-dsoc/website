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
                <div className="footer-left">
                    <div className="social-box">
                        <div className="twitter-box">
                            <img alt="" src={twitterLogo} className="footer-icon" id="twitter-icon"/>
                        </div>
                        <div className="linkedin-box">
                            <img alt="" src={linkedinLogo} className="footer-icon" id="linkedin-icon"/>
                        </div>
                        <div className="discord-box">
                            <img alt="" src={discordLogo} className="footer-icon" id="discord-icon"/>
                        </div>
                    </div>
                    <div className="hae">
                        <div className="hae-element">Home</div>
                        <div className="hae-element">About</div>
                        <div className="hae-element">Events</div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="dsoc-icon">
                        <img alt="" id="dsoc-logo" src={dsocLogo}/>
                    </div>
                    <div className="EmailForm">
                        <EmailForm/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;
