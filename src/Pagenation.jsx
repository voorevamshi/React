import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Pagenation() {

     let dispatct= useDispatch();
    const vegetables = useSelector((globalState)=>globalState.products.vegetables);
console.log(vegetables);
 
let [currentPage,setCurrentPage]=useState(1);
const itemsPerPage=5;
const totalPages = Math.ceil(vegetables.length/itemsPerPage);
const indexOfLastItem = currentPage*itemsPerPage;
const indexOfFirstItem = indexOfLastItem-itemsPerPage;
const currentItems=vegetables.slice(indexOfFirstItem,indexOfLastItem);

const currentItemList =currentItems.map((currentItem,index)=> (
         <li key={index}> 
       {currentItem.name}-{currentItem.price}
      </li>
        ));
        

console.log("totalPages:"+totalPages+",indexOfFirstItem:"+indexOfFirstItem+",indexOfLastItem:"+indexOfLastItem+",currentItems:"+currentItems);
console.log()
  return (
    <>
    <br></br>
    {Array.from({length:totalPages}, (_,index)=>(
        <button style={{color:currentPage==(index+1)? "red":"blue" }}
        onClick={()=>setCurrentPage(index+1)} >
        {index+1}</button>
    )) }
    <br></br>
    <br></br>
        {currentItemList}
        </>
  )
}

export default Pagenation