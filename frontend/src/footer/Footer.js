import './Footer.css';
import { Button } from '@mantine/core';
import React from 'react';

var twitterLogo = require('./twitter-logo.svg');
var linkedinLogo = require('./linkedin-logo.svg');
var discordLogo = require('./discord-logo.svg');

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <Button>This is the footer</Button>
                <div class="twitter" id="twitter-box">
                    <div class="icon" id="twitter-icon">
                        {twitterLogo}
                    </div>
                    <div class="username" id="twitter-username">

                    </div>
                </div>
                <div class="linkedin" id="linkedin-box">
                    <div class="icon" id="linkedin-icon">
                        {linkedinLogo}
                    </div>
                    <div class="username" id="linkedin-username">

                    </div>
                </div>
                <div class="discord" id="discord-box">
                    <div class="icon" id="discord-icon">
                        {discordLogo}
                    </div>
                    <div class="username" id="discord-server">

                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;
