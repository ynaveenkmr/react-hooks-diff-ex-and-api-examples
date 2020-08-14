import React,{Component} from 'react'

class UsingClassOnloadEveryTimeRendering extends Component{
  constructor(props){
    super(props)
    this.state = {
        count:0,
        name:''
    }
  }
 increment = () => {
this.setState({
  count:this.state.count+1
})
  }
componentDidMount(){
  document.title = `your clicked ${this.state.count} times`
}
componentDidUpdate(prevProps, prevState){
  if(prevState.count !== this.state.count){
  console.log("updating document title")
  document.title = `your clicked ${this.state.count} times`
}
}
  render(){
    return(
        <>
        <br />
        <br />
        <h4><u>Using class examples</u></h4>
        <input type="text" value={this.state.name} 
        onChange={e=>{this.setState({name:e.target.value})}} />
          <button onClick={this.increment}>clicked {this.state.count} times</button>
        </>
    )
  }
}

export default UsingClassOnloadEveryTimeRendering
