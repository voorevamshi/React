import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
 name : 'products',
 initialState:{
 vegetables : [
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
  },
  {
    id: 5,
    name: "Cabbage",
    price: 35,
    quantity: 20,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 6,
    name: "Cauliflower",
    price: 45,
    quantity: 25,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 7,
    name: "Brinjal",
    price: 50,
    quantity: 40,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 8,
    name: "Spinach",
    price: 20,
    quantity: 60,
    unit: "bunch",
    category: "Leafy Vegetable"
  },
  {
    id: 9,
    name: "Lady Finger",
    price: 55,
    quantity: 35,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 10,
    name: "Capsicum",
    price: 70,
    quantity: 15,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 11,
    name: "Beetroot",
    price: 45,
    quantity: 30,
    unit: "kg",
    category: "Root Vegetable"
  },
  {
    id: 12,
    name: "Radish",
    price: 25,
    quantity: 40,
    unit: "kg",
    category: "Root Vegetable"
  },
  {
    id: 13,
    name: "Bottle Gourd",
    price: 35,
    quantity: 25,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 14,
    name: "Bitter Gourd",
    price: 70,
    quantity: 20,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 15,
    name: "Ridge Gourd",
    price: 50,
    quantity: 18,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 16,
    name: "Snake Gourd",
    price: 60,
    quantity: 15,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 17,
    name: "Drumstick",
    price: 90,
    quantity: 12,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 18,
    name: "Green Peas",
    price: 120,
    quantity: 20,
    unit: "kg",
    category: "Legume"
  },
  {
    id: 19,
    name: "Sweet Corn",
    price: 80,
    quantity: 35,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 20,
    name: "Pumpkin",
    price: 30,
    quantity: 50,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 21,
    name: "Cucumber",
    price: 40,
    quantity: 45,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 22,
    name: "Green Chilli",
    price: 100,
    quantity: 10,
    unit: "kg",
    category: "Vegetable"
  },
  {
    id: 23,
    name: "Garlic",
    price: 180,
    quantity: 15,
    unit: "kg",
    category: "Spice Vegetable"
  },
  {
    id: 24,
    name: "Ginger",
    price: 160,
    quantity: 20,
    unit: "kg",
    category: "Spice Vegetable"
  },
  {
    id: 25,
    name: "Mint",
    price: 15,
    quantity: 100,
    unit: "bunch",
    category: "Leafy Vegetable"
  },
  {
    id: 26,
    name: "Coriander",
    price: 20,
    quantity: 90,
    unit: "bunch",
    category: "Leafy Vegetable"
  }
],
 nonVegProducts : [
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
  },
  {
    id: 6,
    name: "Crab",
    price: 500,
    quantity: 10,
    unit: "kg",
    category: "Seafood"
  },
  {
    id: 7,
    name: "Eggs",
    price: 7,
    quantity: 300,
    unit: "piece",
    category: "Poultry"
  },
  {
    id: 8,
    name: "Turkey",
    price: 550,
    quantity: 8,
    unit: "kg",
    category: "Poultry"
  },
  {
    id: 9,
    name: "Duck Meat",
    price: 480,
    quantity: 10,
    unit: "kg",
    category: "Poultry"
  },
  {
    id: 10,
    name: "Salmon",
    price: 950,
    quantity: 6,
    unit: "kg",
    category: "Seafood"
  }
]


 },
 reducers:{}

}) 


const cartSlice =createSlice({
name : 'cart',    
initialState:[],
 reducers:{
addToCart : (state,action) => {
   const existingItem = state.find(item => item.id === action.payload.id);
    if(existingItem){
        existingItem.quantity +=1;
    }else{
     state.push({ ...action.payload, quantity: 1 });
    }
    }
}
})
export let { addToCart} =cartSlice.actions;
const store = configureStore({
    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer
    }
})

export default store
