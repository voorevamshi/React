import React from 'react'

function Object1() {

    const employee = { id:1,name:"Ajay",age:32,salary:3400000.0}
  return (
    <>
    <h2>Employee Detailses</h2>
    <ol>
        <li>Employee Id: {employee.id}</li>
        <li>Employee name: {employee.name}</li>
        <li>Employee age: {employee.age}</li>
        <li>Employee salary: {employee.salary}</li>
    </ol>
    </>
  )
   
}


export default Object1