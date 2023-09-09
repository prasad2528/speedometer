import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  onBrake = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="Speedometer"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            type="button"
            className="button btn1"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="button btn2" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
