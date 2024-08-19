// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  createRandomnum = () => {
    const generateNum = Math.random() * 100
    const intNum = parseInt(generateNum)
    this.setState(prevState => ({num: prevState.num + intNum}))
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.createRandomnum} className="btn" type="button">
            Generate
          </button>
          <p className="num">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
