import React from 'react'

function Veg() {

    const vegetables = [
  {
    id: 1,
    name: "Tomato",
    price: 30,
    quantity: 50,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 2,
    name: "Potato",
    price: 25,
    quantity: 100,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 3,
    name: "Onion",
    price: 40,
    quantity: 80,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 4,
    name: "Carrot",
    price: 60,
    quantity: 30,
    unit: "kg",
    category: "Vegetable"
  }
];
console.log(vegetables);
 
const vegListObject =vegetables.map((veg)=>
    <li key={veg.id} > {veg.name} -  {veg.price} <button>AddToCart</button></li>
)
  return (
    <>
    <ul>{vegListObject}</ul>
    </>
  )
}

export default Veg