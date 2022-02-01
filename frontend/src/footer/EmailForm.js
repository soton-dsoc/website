import './EmailForm.css';
import React from 'react';

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
                <label for="email" className="footertext right">
                    <div className="textandform">
                        Subscribe to our newsletter
                    </div>
                    <input className={this.state.value ? "box_expanded" : "box_compressed"} onChange={this.handleChange} id="email" name="email" placeholder="Enter your email address" type="email"/>
                </label>
                <input type="submit" value="PAPER PLANE" />
            </form>
        );
    };
};

export default EmailForm;