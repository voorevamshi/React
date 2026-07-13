import React from 'react'

function ListOfStrings() {
  const fruits = ["apple", "banana", "orange", "grapes", "Mango"];

  // 1. Run the map loop outside and store the JSX elements in a variable
  const fruitListItems = fruits.map((fruit, index) => (
    <li key={index}>
      Fruit Name: {fruit} (Index: {index})
    </li>
  ));

  // 2. Keep the return statement clean by just injecting the variable
  return (
    <>
      <h2>Fruit names:</h2>
      <ol>
        {fruitListItems}
      </ol>
    </>
  )
}

export default ListOfStrings