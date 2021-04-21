import React, {Component} from 'react'

class ClassComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      inputValue: '',
      array: ['pizza', 'something else']
    }
    this.decreaseCount = this.decreaseCount.bind(this)
    this.increaseCount = this.increaseCount.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.attachItemToArray = this.attachItemToArray.bind(this)
  }

  decreaseCount(){
    this.setState({count: this.state.count - 1})
  }

  increaseCount(){
    this.setState({count: this.state.count + 1})
  }

  handleChange(value){
    this.setState({inputValue: value})
  }

  attachItemToArray(){
    this.setState({
      array: [...this.state.array, this.state.inputValue],
      inputValue: '',
    })
  }

  render(){
    return(
      <div className='class-component'>
        <h1>This is Class Component</h1>
        <h3>COUNT: {this.state.count}</h3>
        <button onClick={this.decreaseCount}>Decrease Count</button>
        <button onClick={this.increaseCount}>Increase Count</button>
        {/* <input value={this.state.inputValue} onChange={this.handleChange} /> */}
        <input 
        value={this.state.inputValue} 
        onChange={(e) => this.handleChange(e.target.value)} />
        <button onClick={this.attachItemToArray}>Attach Item to Array</button>
        <div>
          <ol>
          {this.state.array.map((element) => {
            return (
              <li>{element}</li>
            )
          })}
          </ol>

        </div>
      </div>
    )
  }
}

export default ClassComponent