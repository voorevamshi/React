import React from 'react'
const nonVegProducts = [
  {
    id: 1,
    name: "Chicken Breast",
    price: 280,
    quantity: 25,
    unit: "kg",
    category: "Poultry"
  },
  {
    id: 2,
    name: "Chicken Wings",
    price: 220,
    quantity: 30,
    unit: "kg",
    category: "Poultry"
  },
  {
    id: 3,
    name: "Mutton",
    price: 850,
    quantity: 15,
    unit: "kg",
    category: "Meat"
  },
  {
    id: 4,
    name: "Fish",
    price: 320,
    quantity: 20,
    unit: "kg",
    category: "Seafood"
  },
  {
    id: 5,
    name: "Prawns",
    price: 650,
    quantity: 12,
    unit: "kg",
    category: "Seafood"
  }
];

console.log(nonVegProducts);


const nonVegListObject =nonVegProducts.map((veg)=>
    <li key={veg.id} > {veg.name} -  {veg.price} <button>AddToCart</button></li>
)

function NonVeg() {
  return (
     <>
    <ul>{nonVegListObject}</ul>
    </>
  )
}

export default NonVeg