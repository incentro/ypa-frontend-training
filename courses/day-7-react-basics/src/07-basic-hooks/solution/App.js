import React, {useState} from 'react'

const Container = ({children}) => (<div>{children}</div>)
const Title = ({children, small}) => (<h1 style={{fontSize: small ? '1rem' : '2rem'}}>{children}</h1>)

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Title>The number is {count}</Title>
      <button onClick={() => setCount(count + 1)}>+</button>
    </Container>
  )
}

export default App
