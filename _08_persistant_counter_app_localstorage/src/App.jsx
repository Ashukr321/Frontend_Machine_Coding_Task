import './App.css'
import ButtonCom from './components/Button'
import { useCallback, useEffect, useState, } from 'react';


function App() {

  const [count, setCount] = useState(() => {
    const result = localStorage.getItem("count");
    return Number(result);
  })

  const increment = useCallback(() => {
    setCount((prevValue) => prevValue + 1);
  }, [])

  const decrement = useCallback(() => {
    setCount((prevValue) => prevValue - 1);
  }, [])

  const clearStorage = useCallback(() => {
    localStorage.removeItem("count");
    setCount(0);
  }, [])

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count])
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center",height:"100vh"}}>
      <h1 style={{ textAlign: "center", color: "#333", marginTop: "10px" }}>Persistent Counter App </h1>
      <h2 style={{
        textAlign: "center", margin: "20px 0",
        fontSize: "42px",
        fontWeight:"bold"
      }}>{count}</h2>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <ButtonCom handler={increment} title="increment" />
        <ButtonCom handler={decrement} title="decrement" />
        <ButtonCom handler={clearStorage} title="clear" />
      </div>


    </div>
  )
}

export default App
