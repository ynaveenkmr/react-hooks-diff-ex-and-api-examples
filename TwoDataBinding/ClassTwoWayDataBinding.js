import React,{ Component } from 'react'

class ClassTwoWayDataBinding extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue:''
    }
  }
handleInputValue = (e) => {
this.setState({
  inputValue:e.target.value
})
}

  render(){
    return(
      <>
        <h4><u>Class Two way data binding</u></h4>
        <input type="text" value={this.state.value} onChange={this.handleInputValue} />
        <div>{this.state.inputValue}</div>

      </>
    )
  }
}

export default ClassTwoWayDataBinding