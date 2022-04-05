import React, {Component} from 'react';

class TemperatureInput extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const temperature = this.props.temperature;
        return(
            <fieldset style={{margin:"10px"}}>      
                <legend>{this.props.scale}</legend>
                <input value={temperature} onChange = {this.handleChange}/>
            </fieldset>
        )
    }
};

export default TemperatureInput;