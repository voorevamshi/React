[<~ Back to Class 2](class2.md)
## 🛠️ Step 0: The Configuration & Environment Setup

Before touching your components, you need to change your configuration files so the project knows how to compile TypeScript.

### 1. Rename File Extensions

Rename your files to change their extensions from JavaScript to TypeScript:

-   `jsconfig.json` $\rightarrow$ **`tsconfig.json`**
    
-   `main.jsx` $\rightarrow$ **`main.tsx`**
    
-   `App.jsx` $\rightarrow$ **`App.tsx`**
    
-   `store.js` $\rightarrow$ **`store.ts`**
    
-   `Veg.jsx` $\rightarrow$ **`Veg.tsx`**
    
-   `Cart.jsx` $\rightarrow$ **`Cart.tsx`**
    
    _(Note: `.ts` is for plain files, `.tsx` is for files containing JSX/HTML elements)._

### 2. Replace `jsconfig.json` with `tsconfig.json`

Delete `jsconfig.json` and create a **`tsconfig.json`** file in your root folder:
```
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting / Strictness */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## 📄 File-by-File Code Migration

### 3. `store.ts` (Global State & Types Definition)

In TypeScript, we must explicitly define the structures (interfaces) of our data slices so Redux knows exactly what properties exist in our global state.

```
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1. Define the interface for a Single Product
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  category: string;
}

// 2. Define the interface for the Products slice state
interface ProductState {
  vegetables: Product[];
}

const initialProductState: ProductState = {
  vegetables: [
    { id: 1, name: "Tomato", price: 30, quantity: 50, unit: "kg", category: "Vegetable" },
    { id: 2, name: "Potato", price: 25, quantity: 100, unit: "kg", category: "Vegetable" }
  ]
};

const productSlice = createSlice({
  name: 'products',
  initialState: initialProductState,
  reducers: {}
});

// 3. Define the Cart slice state (an array of Products)
const initialCartState: Product[] = [];

const cartSlice = createSlice({
  name: 'cart',    
  initialState: initialCartState,
  reducers: {
    // Use PayloadAction<Product> to specify exactly what data type comes with this action
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    }
  }
});

export const { addToCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer
  }
});

// 4. Export the RootState type so hooks know what the global state looks like
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

```

### 4. `main.tsx` (Application Entry Mount)

We can now use the TypeScript **Non-Null Assertion operator (`!`)** that we discussed earlier to safely bypass the element validation rule.

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' // TypeScript automatically finds App.tsx
import { Provider } from 'react-redux'
import store from './store'

// The '!' guarantees to TypeScript that the 'root' element exists in index.html
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
```

### 5. `App.tsx` (Main Layout & Router)

We apply our `RootState` type to the `useSelector` hook so it knows the structural configuration of the store.

```
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { RootState } from "./store"; // 👈 Import the state type

function App() {
  // Explicitly tell useSelector to use our RootState schema
  const cartItems = useSelector((globalState: RootState) => globalState.cart);
  
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
 
  return (
    <>    
      <BrowserRouter>
        <div style={{ padding: "50px" }}>
          <Link to="/vegtables"><div style={{ padding: "5px" }}>Veg</div></Link>
          <Link to="/nonVegtables"><div style={{ padding: "5px" }}>Non Veg</div></Link>
          <Link to="/cart">
            <div style={{ padding: "5px" }}>Cart ({totalCartCount})</div>
          </Link>
        </div>
        <br />
        <Routes>
          <Route path="/vegtables" element={<Veg />} />
          <Route path="/nonVegtables" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
```

### 6. `Veg.tsx` & `NonVeg.tsx` (Product Maps)

Typing these components guarantees that the objects mapped from the array explicitly contain properties like `.id`, `.name`, and `.price`.
```

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, RootState, Product } from './store'; // 👈 Import interfaces

function Veg() {
    const dispatch = useDispatch();
    
    // Type checking the global store layout
    const vegetables = useSelector((globalState: RootState) => globalState.products.vegetables);
 
    // Explicitly typing the individual 'veg' parameter as a Product object
    const vegListObject = vegetables.map((veg: Product) => (
        <li key={veg.id}> 
            {veg.name} - {veg.price} 
            <button onClick={() => dispatch(addToCart(veg))}>
                Add to Cart
            </button>
        </li>
    ));

    return (
        <>
            <ul>{vegListObject}</ul>
        </>
    )
}

export default Veg;
```
(Note: Apply the exact same structural template to `NonVeg.tsx`, just replacing the `vegetables` slice with your non-veg data slice).

### 7. `Cart.tsx` (Calculations & Form Events)

When working with forms and inputs in TypeScript, we must explicitly type the browser event parameter as a **`React.ChangeEvent<HTMLInputElement>`** so the editor safely recognizes `e.target.value`.

```
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, Product } from './store'

// 1. Define the layout interface for our coupon results object
interface CouponResult {
  isValid: boolean;
  discountPercentage: number;
  discountAmount: number;
}

function Cart() {
  const cartItems = useSelector((globalState: RootState) => globalState.cart);
  const [couponCode, setCouponCode] = useState<string>(''); // Strongly type the state string

  const totalCartAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  // 2. Type checking our helper parameters and specifying the strict CouponResult return type
  const getCouponResult = (code: string, totalAmount: number): CouponResult => {
    let discountPercentage = 0;

    switch (code.toUpperCase().trim()) { 
      case 'VMC10': discountPercentage = 10; break;
      case 'VMC20': discountPercentage = 20; break;
      case 'VMC30': discountPercentage = 30; break;
      default: discountPercentage = 0;
    }

    const isValid = discountPercentage > 0;
    const discountAmount = (totalAmount * discountPercentage) / 100;

    return { isValid, discountPercentage, discountAmount };
  };

  const { isValid, discountPercentage, discountAmount } = getCouponResult(couponCode, totalCartAmount);
  const netAmount = totalCartAmount - discountAmount;

  const cartItemList = cartItems.map((cartItem: Product) => (
    <li key={cartItem.id}> 
      {cartItem.name} - {cartItem.price} * {cartItem.quantity} <button>Remove</button>
    </li>
  ));

  return (
    <>
      <ul>{cartItemList}</ul>
      <span><strong>Available Coupon Codes:</strong> VMC10, VMC20, VMC30</span>
      <br /><br />
      
      <label>Enter Coupon: </label>
      {/* 3. Strongly typing the onChange input element parameter event */}
      <input 
        type="text" 
        value={couponCode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCouponCode(e.target.value)} 
        placeholder="Type coupon here"
      />
      
      {isValid && <p style={{ color: 'green' }}>Saved {discountPercentage}%</p>}
      <hr />
      <h3>Total Price: ${totalCartAmount}</h3>
      <h3>Discount: -${discountAmount}</h3>
      <h2>Net Payable Amount: ${netAmount}</h2>
    </>
  )
}

export default Cart;
```