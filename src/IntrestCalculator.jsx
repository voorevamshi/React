import React from 'react'
import { useState } from 'react'

function IntrestCalculator() {

    let prinicple = 5000;
    let [intrest,setIntrest] = useState(0);


    // Standard compound/simple addition formula: 
    // New Amount = Current Amount + (Current Amount * Rate / 100)
    const interestEarned = (prinicple * intrest) / 100;
    const totalRePayment = prinicple + interestEarned;
  
  
  return (
   <>
    <h2>Priniciple Amount: {prinicple}</h2>
    <h2>Intrest Amount: {interestEarned}</h2>
    <h2>Total Re Payment: {totalRePayment}</h2>
    <button style={{backgroundColor:"green" , width:"150px",padding:"10px"}} onClick={()=>setIntrest(10)}>Apply 10% Intrest</button>
    <button style={{backgroundColor:"green" , width:"150px",padding:"10px"}} onClick={()=>setIntrest(20)}>Apply 20% Intrest</button>
   </>
  )
}

export default IntrestCalculator