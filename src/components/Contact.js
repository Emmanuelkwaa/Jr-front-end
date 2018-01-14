import React from 'react';
import Inputs from './Inputs';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            zipcode: '',
            email: '',
            state: ''
        }
        this.changeName = this.changeName.bind(this);
        this.changeZipcode = this.changeZipcode.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    changeName(newName){
        this.setState({name: newName})
    }

    changeZipcode(zipcode){
        this.setState({zipcode: zipcode})
    }


    changeEmail(newEmail) {
        this.setState({email: newEmail})
    }

    changeState(newState) {
        this.setState({state: newState});
    }

    render() {
        console.log(this.state.state);
        return (
            <div id="contact">
                <Inputs 
                    name={this.state.name} 
                    email={this.state.email} 
                    zipcode={this.state.zipcode}
                    state={this.state.state} 
                    onChange={this.changeState} 
                    onName={this.changeName} 
                    onZipcode={this.changeZipcode} 
                    submit={this.submit}
                    onEmail={this.changeEmail} 
                    value={this.state.state}
                />
            </div>
        );
    }

} 

export default Contact;