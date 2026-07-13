import React from 'react'

function ListOfObjects() {

    const employees=[
        { id:101,name:"Ajay",age:32,salary:3400.0},
        { id:102,name:"Hanvik",age:2,salary:1.0},
        { id:103,name:"Vamshi",age:33,salary:3200.0},
        { id:104,name:"Shreshta",age:1,salary:1.0}
    ];
  
    const employeeListItems = employees.map((employee) => (
    <li key={employee.id}>
      Empployee Name: {employee.name} Age: {employee.age} Salary: {employee.salary}
    </li>
  ));

  return (
   <>
   <h2>Employee Data:</h2>
   <ol>{employeeListItems}</ol>
   </>
  )
}

export default ListOfObjects