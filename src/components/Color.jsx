import React from "react";
import { useState } from "react";

const Color = () => {
  const[color,setColor]=useState('beige');
  console.log(color,"color")


  const handleGreen=()=>{
    setColor('pink')
  }

  const hanldeblue = ()=>{
    setColor('orange')
    
  }
  return (
    
    <>
      <div className='app-wrap' style={{backgroundColor:color}}>
        <button style={{backgroundColor:color}} className='custom' onClick={handleGreen}>Shade</button>
        <button style={{backgroundColor:color}} className='custom' onClick={hanldeblue}>Shade</button>
      
      </div>
    </>
  );
};

export default Color;