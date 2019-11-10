// import React, { Component } from 'react'
// import './index.css'

// class Weather extends Component {
//     constructor() {
//         super();
//         this.state = { data: [] };
//     }

//     componentDidMount() {
//         fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ec1df8487dd99e172a69dc18ab26306a/49.279652,-123.126151`)
//         .then(res => res.json())
//         .then(api => {
//             this.setState([{
//                 temperature: `°${api.currently.temperature}`,
//                 summary: `Weather conditions: ${api.currently.summary}`,
//                 precipity: `Chance of rain: ${api.currently.precipProbability}%`
//             }])
//     render() {
//         return (
//             <div className="location">
//                 {this.state.data.map(weather => {
//                     <p>{weather.temperature}</p>
//                     <p>{weather.summary}</p>
//                     <p>{weather.precipity}</p>
//                 })}
//             </div>
//         )
//     }
// }

// export default Weather