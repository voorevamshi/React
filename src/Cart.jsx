import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Cart() {

let cartItems = useSelector(globalState=>globalState.cart);
const totalCartAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  
  let [couponCode,setCouponCode] =useState('');
  const [couponResult,setCouponResult] =useState({isValid:false,discountPercentage:0,discountAmount:0})
  
 console.log(cartItems)
   
  const cartItemList =cartItems.map((cartItem)=>
      <li key={cartItem.id} > {cartItem.name} -  {cartItem.price} * {cartItem.quantity} <button >Remove</button></li>
  )

  const getCouponResult = (key)=>{
    debugger;
  let discountPercentage=0;
  let discountAmount=0;
  let isValid=false;
   switch (key) {
    case 'VMC10': 
      discountPercentage = 10;
      break;
    case 'VMC20': 
      discountPercentage = 20;
      break;
    case 'VMC30': 
      discountPercentage = 30;
      break;
    default:
      discountPercentage = 0;
      break;
   }
    isValid=discountPercentage>0;
    if (isValid) {
      discountAmount=discountPercentage* totalCartAmount /100 
    }
console.log(isValid)
console.log(discountPercentage)
console.log(discountAmount)
 const couponResult = { 
    isValid: isValid, 
    discountPercentage: discountPercentage, 
    discountAmount: discountAmount 
  };
 return couponResult;
  }

  const netAmount =totalCartAmount-couponResult.discountAmount;

  return (
    <>
    <ul>
      {cartItemList}      
    </ul>
      <span>CouponCodes: VMC10  , VMC20, VMC30</span>
      <br></br>
      Enter Coupon :<input type = "text" onChange={(e)=>setCouponCode(e.target.value)}></input>  <button onClick={()=>setCouponResult(getCouponResult(couponCode))}>Apply Coupon</button>
      <br></br>
      <div>{couponResult.isValid? (<h3>Coupon {couponCode} applied:  {couponResult.discountPercentage}% off -  {couponResult.discountAmount} rupees</h3> ): couponCode && <h3 style={{color:"red"}}>Invalid coupon code</h3> }</div>
      <br></br>
     <button >10% discount</button>
     <button >20% discount</button>
     <button >30% discount</button>
    <h3>Total Amount: {totalCartAmount}</h3>
    <h3>Final Amount: {netAmount}</h3>
    </>
  )
}

export default Cart