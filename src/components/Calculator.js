import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
    constructor(props){
        super(props);

        this.state = {
            temperature: '',
            scale: 'celsius'
        }

        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    }

    handleCelsiusChange (temperature) {
        this.setState({
            temperature,
            scale: "celsius"
        })
    }

    handleFahrenheitChange (temperature) {
        this.setState({
            temperature,
            scale: "fahrenheit"
        })
    }

    tryConvert (temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        let rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    toFahrenheit (c) {
        return (9/5 * c) + 32;
    }

    toCelsius (f) {
        return (f - 32) * 5/9;
    }

    render () {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === "celsius" ? temperature : this.tryConvert(temperature, this.toCelsius);
        const fahrenheit = scale === "fahrenheit" ? temperature : this.tryConvert(temperature, this.toFahrenheit);
        let verdict = celsius < 100 ? <div>Water won't boil</div> : <div>Water will boil</div>;
        return(
            
            <div className='calculator'>
                <TemperatureInput scale="celsius" onTemperatureChange={this.handleCelsiusChange} temperature={celsius}/>
                <TemperatureInput scale="fahrenheit" onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit}/>
                {verdict}
            </div>
        )
    }

};

export default Calculator;