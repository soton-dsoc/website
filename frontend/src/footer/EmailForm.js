import './EmailForm.css';
import React from 'react';

import planeLogo from './Exclude.svg';

class EmailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form action="">
                <label for="email">
                    <div className="textandform" id="subscribe-text">
                        Subscribe to our newsletter
                    </div>
                    <input className={this.state.value ? "box_compressed" : "box_expanded"} onChange={this.handleChange} id="email" name="email" placeholder="Enter your email address" type="email"/>
                </label>
                {/* <div> */}
                <input id="paper-plane" src={planeLogo} type="image"/>
                {/* </div> */}
            </form>
        );
    };
};

export default EmailForm;