import { useState } from 'react'
import './App.css'
import LandingPage  from './LandingPage'
import './landingpage.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <LandingPage />
  )
}

export default App
