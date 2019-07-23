import React, {Component} from 'react'

const Container = ({children}) => (<div>{children}</div>)
const Title = ({children, small}) => (<h1 style={{fontSize: small ? '1rem' : '2rem'}}>{children}</h1>)

class App extends Component {
  state = {
    count: 0,
  }

  setCount = () => this.setState({count: this.state.count + 1})
  render() {
    const {count} = this.state
    return (
      <Container>
        <Title>The number is {count}</Title>
        <button onClick={() => this.setCount(count + 1)}>+</button>
      </Container>
    )
  }
}

export default App
