import React, { Component } from 'react'

class ClassCountBySettingInterval extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

	componentDidMount() {
		this.interval = setInterval(this.tick, 1000)
	}
	componentWillUnmount() {
		clearInterval(this.interval)
	}
	tick = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		return(
      <>
      <hr/>
<h4><u>Using Class count by setting interval</u></h4>
<h4>{this.state.count}</h4>
      </>
    )
	}
}

export default ClassCountBySettingInterval