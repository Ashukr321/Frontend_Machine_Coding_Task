import React, { useEffect, useState } from 'react'


const ProgressBar = ({ value, labelPosition }) => {

  const textAlign =
    labelPosition === "left" ? "left" :
      labelPosition === "center" ? "center" :
        "right";

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value)
    }, 100)

    return () => timer;
  }, [value])

  const getColor = (value) => {
    if (value < 40) {
      return "#e53935"
    }
    if (value < 70) {
      return "#fbc02d"
    }
    return "#43a047"
  }

  const styles = {
    externalDiv: {
      width: "50%",
      border: "1px solid #ccc",
      borderRadius: '10rem',
      overflow: 'hidden',
      height: "20px",
      role: "progressbar",
    },
    internalDiv: {
      padding: "1px 6px",
      paddingLeft: "0px",
      height: "100%",
      background: `linear-gradient(90deg, ${getColor(progress)}, #81c784)`,
      color: "white",
      width: `${progress}% `,
      textAlign: `${textAlign} `,
      transition: "width 1s cubic-bezier(0.65, 0, 0.35, 1)",
      boxShadow: "0 0 10px rgba(76, 175, 80, 0.5)",
    }

  }


  return (
    <div className='external_div' style={styles.externalDiv} >
      <div className='internal_progress' style={styles.internalDiv}>{value}%</div>
    </div>
  )
}

export default ProgressBar
