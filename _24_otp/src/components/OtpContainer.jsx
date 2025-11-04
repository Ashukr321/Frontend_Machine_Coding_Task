import React, { useEffect, useRef, useState } from 'react'

const OtpContainer = ({ length = 6 }) => {
  // state 
  const [otp, setOtp] = useState(Array.from({ length }).fill(""));
  //  autofocus state useRef
  const inputRef  = useRef([]);
  

  // input style 
  const inputStyle ={
    width:"70px",
    textAlign: "center",
  }
 

  // autofocus 
  useEffect(()=>{
    inputRef.current[0]?.focus()
  },[])

  // onchange 
  const handleChange = (index,value)=>{
    if(isNaN(value))return; // only allow number 
    // update otp array clone 
    const updateOpt = [...otp];
    updateOpt[index] = value.slice(-1); // only last character it take 
    setOtp(updateOpt);
    
    // move to next inputfield  
    // index <length -1 , valid last index 
    if(value && index <length-1){
      inputRef.current[index+1]?.focus();
    }

    // submit after 1sec 
    if(updateOpt.every((d)=>d!=="")){
      setTimeout(()=>{
        console.log(o)
      },2000)
    }
  }

  return (
    <div style={{ backgroundColor: "white", borderRadius: "4px", height: "90px", padding: "10px", border: "1px solid white", display:"flex",gap:"8px" }}>
     
     {/* create input field  */}
     {
      otp.map((digit,index)=>(
        <input
         key={index}
         type="text"
         value={digit}
         style={inputStyle}
         ref={(el)=>(inputRef.current[index]=el)}
         onChange={(e) => handleChange(index, e.target.value)}
         />
      ))
     }
    </div>
  )
}

export default OtpContainer




// learning 
//1 . this implicit return whatever we write in side it ()
//  {
//       otp.map((digit,index)=>(
        
//       ))
//      }

// 2  if we {} we need to manually return it 