
import { GiApc } from 'react-icons/gi'
import './App.css'
import ProgressBar from './compnents/ProgressBar'

function App() {
  const progressData = [
    {
      value: 30,
      labelPosition: "left"
    },
    {
      value: 10,
      labelPosition: "center"

    },
    {
      value: 80,
      labelPosition: "right"

    },
    {
      value: 60,
      labelPosition: "right"

    },

  ]
  const progressContainer = {
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    alignItems: "center",
    gap: "10px",
    marginTop: "100px",
    
  }
  return (
    <>
      <h1>Progress Bar...</h1>
      <div style={progressContainer}>
        {
          progressData.map((item) => (
            <ProgressBar value={item.value} labelPosition={item.labelPosition} />
          ))
        }

      </div>

    </>
  )
}

export default App
