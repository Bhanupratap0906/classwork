import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [timer , setTimer] = useState(0)
  const [on, setOn] = useState(false)
  
  useEffect(()=>{
    let interval
    if(on){
      interval = setInterval(()=>{
        setTimer((prev)=>prev+1)
      },1000)
    }
    return ()=>clearInterval(interval)
  },[on])
  function start(){
    setOn(true)
  }
  function pause(){
    setOn(false)
  }
  function restart(){
    setOn(false)
    setTimer(0)
  }
  
  return (
    <>
      <h1>{timer}</h1>
      <button onClick={start}>start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={restart}>restart</button>
      
    </>
      
  )
}

export default App
