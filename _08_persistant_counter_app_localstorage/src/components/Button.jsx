import React from 'react'

const ButtonCom = ({ handler, title }) => {
  console.log("child btn call")

  const buttonColor = title == "increment" ? "green" : title == "decrement" ? "red" : "blue" //here we do  the nested conditional rendering 
  return (

    <div>
      <button onClick={handler} style={{
        padding: "10px 22px",
        borderRadius: "8px",
        cursor: "pointer",
        backgroundColor: buttonColor,
        outline: "none",
        border: "none",
        color: "white"
      }}>{title}</button>
    </div>
  )
}

export default React.memo(ButtonCom)
