import React from 'react'



import { useState, useCallback } from 'react';

const ThrottleSearch = () => {
  const [data, setData] = useState([]);


  const throttle = (func, delay) => {
    let lastCall = 0;
    return (...args) => {
      let now = Date.now();
      if (now - lastCall >= delay) {
        func(...args);
        lastCall = now;
      }
    }
  }
  const fetchApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setData(data);
  }

  const throttleFunc = useCallback(throttle(fetchApi, 10000), []);


  const handleApiCall = () => {
    throttleFunc();
  }


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>throttle function</h1>
      <button onClick={handleApiCall}>call api</button>
    </div>
  )
}

export default ThrottleSearch
