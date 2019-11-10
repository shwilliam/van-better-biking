import React, { Component } from 'react'
import './index.css'

class Weather extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        const that = this;
        fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ec1df8487dd99e172a69dc18ab26306a/49.279652,-123.126151?exclude=minutely,hourly,daily,flags`)
        .then(response => response.json())
        .then(json => this.setState({ data: json.currently }));
    }   
    
    render() {
        return (
            <div className="location">
                {!this.state.data || !this.state.data.summary ? 'Loading...' : 
                    (<>
                        <p style={{fontWeight: 'bold'}}>{this.state.data.summary}</p>
                        <p>Chance of rain: {this.state.data.precipProbability * 100}%</p>
                        <p>Temp: {this.state.data.temperature} ºF</p>
                    </>)
                }
            </div>
        )
    }
}

export default Weather