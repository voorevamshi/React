[<~ Back to Class 2](class2.md)

Here is the master list of all dependencies, routing mechanisms, and state hooks utilized throughout Chapter 2:


### State and Global Architecture

-   **`import React, { useState } from 'react'`**
    
    -   `useState`: Core React hook used to manage reactive text/variables (like tracking the typed `couponCode` string) within an isolated component.
        
-   **`import { useSelector, useDispatch } from 'react-redux'`**
    
    -   `useSelector`: A Redux hook that extracts specific slices of data from the centralized global store (e.g., subscribing to `state.cart` or `state.products.vegetables`).
        
    -   `useDispatch`: A Redux hook that returns a reference to the dispatch function, allowing you to send action payloads (like `addToCart(item)`) up to the Redux reducers.
        

### Action Creators and Configuration

-   **`import { configureStore, createSlice } from "@reduxjs/toolkit"`**
    
    -   `createSlice`: A Redux Toolkit utility that accepts an initial state and an object of reducer functions to automatically generate action creators and action types.
        
    -   `configureStore`: A wrapper around the standard Redux createStore providing simplified configuration options including automatic slice combination and middleware setup.
        
-   **`import { addToCart } from './store'`**
    
    -   A generated action creator exported from your custom cart slice, executed within a component's dispatch hook to push payload data into the store.
        

### Multi-Page Navigation Layouts

-   **`import { BrowserRouter, Link, Route, Routes } from "react-router-dom"`**
    
    -   `BrowserRouter`: The base wrapper context component that enables dynamic client-side URL routing.
        
    -   `Link`: Accessible navigation element that modifies the browser URL path without triggering a full page reload.
        
    -   `Routes`: The structural container that looks through all its child `<Route>` configurations to find a match against the current URL.
        
    -   `Route`: Direct mapping configuration linking a specific path (e.g., `/cart`) to its visual component rendering target (`<Cart />`).
        
