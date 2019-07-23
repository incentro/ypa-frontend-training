import React, {Component} from 'react'

const Container = ({children}) => (<div>{children}</div>)
const Title = ({children, small}) => (<h1 style={{fontSize: small ? '1rem' : '2rem'}}>{children}</h1>)
const Emojis = ({children}) => (
  <Container role="img" aria-label="emoji">
    {children}
  </Container>
)

const emojis = ['💩', '🎉', '🦄', '🍔', '💅', '⚡️', '🔥', '🤦‍']

const RandomEmoji = ({render}) =>
  render(emojis[Math.floor(Math.random() * emojis.length)])

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <Container>
        <Title>Here, have a free, random emoji</Title>
        <RandomEmoji render={emoji => <Emojis>{emoji}</Emojis>} />
      </Container>
    )
  }
}

export default App
