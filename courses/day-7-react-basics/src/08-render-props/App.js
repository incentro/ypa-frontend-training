import React, {Component} from 'react'

const Container = ({children}) => (<div>{children}</div>)
const Title = ({children, small}) => (<h1 style={{fontSize: small ? '1rem' : '2rem'}}>{children}</h1>)
const Emojis = ({children}) => (
  <Container role="img" aria-label="emoji">
    {children}
  </Container>
)

const emojis = ['💩', '🎉', '🦄', '🍔', '💅', '⚡️', '🔥', '🤦‍']

// TODO:
// Call the render function with a random emoji from the array above 🤓
const RandomEmoji = () => null

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Container>
        <Title>Here, have a free, random emoji</Title>
        {/** Pass a function to the render prop that renders an emoji inside the <Emojis /> component **/}
        <RandomEmoji />
      </Container>
    )
  }
}

export default App
