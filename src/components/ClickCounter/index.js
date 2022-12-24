import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickme = () => {
    this.setState(previousState => ({count: previousState.count + 1}))
  }

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="mainDiv">
        <h1>
          The Button has been clicked <span className="spanele">{count}</span>{' '}
          times
        </h1>
        <p>Click the button to increase the count</p>
        <button className="buttonsty" onClick={this.onClickme}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
