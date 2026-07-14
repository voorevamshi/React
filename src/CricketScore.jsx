import React from 'react'
import { useState } from "react";

function CricketScoer() {

    const [score,setScore]=useState(0);
    
  return (
    <>
    <h2>Cricket Score: {score}</h2>
    <button style={{backgroundColor:"red",width:"150px",padding:"10px"}} onClick={()=>setScore(score+1)}>+1</button>
    <button style={{backgroundColor:"lightblue", width:"150px",padding:"10px"}} onClick={()=>setScore(score+2)}>+2</button>
    <button style={{backgroundColor:"orange", width:"150px",padding:"10px"}} onClick={()=>setScore(score+3)}>+3</button>
    <button style={{backgroundColor:"yellow", width:"150px",padding:"10px"}} onClick={()=>setScore(score+4)}>+4</button>
    <button style={{backgroundColor:"lightgreen",width:"150px",padding:"10px"}} onClick={()=>setScore(score+5)}>+5</button>
    <button style={{backgroundColor:"green" , width:"150px",padding:"10px"}} onClick={()=>setScore(score+6)}>+6</button>
    </>
  )
}

export default CricketScoer