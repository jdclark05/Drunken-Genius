import React, { Component } from 'react'
import '../App.css';

class Timer2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  render () {
    const {count} = this.state
    return (
      <div>
        <h1 className="actualTimer">{count} seconds(s)</h1>
      </div>
    )
  }

  componentDidMount () {
    let startCount = 35 ;
    this.setState({
      count: startCount
    })
    this.doIntervalChange()
  }

  doIntervalChange = () => {
      this.myInterval = setInterval(() => {
        if(this.state.count > 0){
          this.setState(prevState => ({
            count: prevState.count - 1
          })
        )} 
        if(this.state.count < 0){
          this.setState({
            count: 0
          })
        };
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.myInterval)
  }
}

export default Timer2;