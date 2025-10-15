import React, {  useState } from 'react'
import './App.css'
import ImageCarousel from './components/ImageCarousel'
import Child from './components/Child';
const App = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(prev => prev + 1);
  }
  const user = React.useMemo(() => ({ name: "Ashutosh kuamr singh" }), []);

  return (
    <div>
      <h1>Image Carousel</h1>
      {/* <ImageCarousel /> */}
      <h1>{count}</h1>
      <button onClick={incrementHandler}>increment</button>
      <Child user={user} />
    </div>
  )
}



export default App
