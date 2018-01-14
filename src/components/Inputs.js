import React from 'react';

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeZipcode = this.handleChangeZipcode.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        const name = e.target.value;
        this.props.onName(name);
    }

    handleChangeZipcode(e) {
        const zipcode = e.target.value;
        this.props.onZipcode(zipcode);

        if(zipcode.length < 5 ) {
            document.querySelector('#error').style.display='block';
        } else {
            fetch(`http://api.zippopotam.us/us/${zipcode}`)
                .then(res => {
                    if(res.status != 200) {
                        document.querySelector('#error').style.display='block';
                        // throw Error(res.statusText)
                    } else {
                        document.querySelector('#error').style.display='none';
                        // return res.json();
                    }
                })
                .then(data => {
                    console.log(data)
                })
                // .catch(err => console.log(err))
        }
    }

    handleChangeEmail(e) {
        const email = e.target.value;
        this.props.onEmail(email);
    }

    handleChange(e) {
        const state = e.target.value;
        this.props.onChange(state);
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        const States = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
        const statesList = States.map((states) => <option className="blue-text" key={states.toUpperCase()} value={states.toLowerCase()}>{states}</option>)
        
        const name = this.props.name;
        const email = this.props.email;
        const state = this.props.state;
        const zipcode = this.props.zipcode;

        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <div className='contact'>
                        <h2>Contact Us</h2>
                        <p>Contact us for anything about cats </p>
                    </div>

                    <div className="row">
                        {/* full name */}
                        <div className="input-field col s12 m6">
                            <input id="name" type="text" className="validate" onChange={ this.handleChangeName }/>
                            <label >Full Name</label>
                        </div>

                        {/* zipcode */}
                        <div className="input-field col s12 m6">
                            <input id="zipcode" type="text" onChange={ this.handleChangeZipcode } onSubmit={this.getZip}/>
                            <label >Zipcode</label>
                        </div>

                        <div id='error' className='row'>
                            <article className='red lighten-2 col s12'>Invalid Zipcode</article>
                        </div>

                        {/* email */}
                        <div className="input-field col s12">
                            <input id="email" type="email" class="validate" onChange={ this.handleChangeEmail }/>
                            <label data-error='Enter valid Email'>Email</label>
                        </div>
                    </div>

                    <div class="input-field col s12">
                        <select id="states" value='' onChange={ this.handleChange }>
                            <option value="" disabled selected>Select State</option>
                            { statesList }
                        </select>
                    </div>

                    {/* <select id="states" onChange={ this.handleChange }> { statesList } </select> */}
                    <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default Inputs;