import React from 'react'
import { useSelector } from 'react-redux';

function NonVeg() {
    
  const nonVegProducts = useSelector((globalState)=>globalState.products.nonVegProducts);

console.log(nonVegProducts);


const nonVegListObject =nonVegProducts.map((veg)=>
    <li key={veg.id} > {veg.name} -  {veg.price} <button>AddToCart</button></li>
)

  return (
     <>
    <ul>{nonVegListObject}</ul>
    </>
  )
}

export default NonVeg