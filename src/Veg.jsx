import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';

function Veg() {
    let dispatct= useDispatch();
    const vegetables = useSelector((globalState)=>globalState.products.vegetables);
console.log(vegetables);
 
const vegListObject =vegetables.map((veg)=>
    <li key={veg.id} > {veg.name} -  {veg.price} <button onClick={()=>dispatct(addToCart(veg))}>AddToCart</button></li>
)
  return (
    <>
    <ul>{vegListObject}</ul>
    </>
  )
}

export default Veg