import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: 'moiz',
    age: 20
  }

  let newArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-8'>Tailwind test</h1>

      <Card username="chaiaurcode" btnText="vitinha" />

      <Card username="Super Saiyan" />
    </>
  )
}

export default App
