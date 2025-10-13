import React, { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [second, setSecond] = useState("");
  const [period, setPeriod] = useState("");



  const getCurrentTime = () => {
    const now = new Date();
    const dateObject = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    // getHours 
    let Hours = dateObject.getHours();
    //getMinutes
    const currentMinutes = dateObject.getMinutes();
    // getSecond 
    const currentSecond = dateObject.getSeconds();
    // getTimePerIod
    const currentPeriod = Hours >= 12 ? "PM" : "AM";


    Hours = Hours % 12 || 12;

    // function 
    const format = (num) => (num < 10 ? `0${num}` : num);


    setHour(format(Hours));
    setMinutes(format(currentMinutes));
    setSecond(format(currentSecond));
    setPeriod(currentPeriod);
  }


  useEffect(() => {
    getCurrentTime();
    const interval = setInterval(getCurrentTime, 10);
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'f') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    }
   

    // add event when user press f -> full , f -> out of fullScreen 
    document.addEventListener('keydown', handleKeyDown);
    // cleaner function 
    return () => window.removeEventListener('keydown', handleKeyDown);
  })

  return (
    <div className='clock_container'>
      <div className='live_clock'>{`${hour}:${minutes}:${second} ${period}`}
      </div>
    </div>
  )
}

export default App
