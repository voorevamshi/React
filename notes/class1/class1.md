# React Class 01: Project Architecture & Core React Elements

## 1. Project Setup (Vite)

-   [Node js download and installatoin](/nodeJsInstallation.md)

-   **Command:** npm create vite@latest
    
-   **Selections:** Project Name (React) $\rightarrow$ Framework (React) $\rightarrow$ Variant (JavaScript).
    
-   **Startup Steps:** cd React $\rightarrow$ npm install $\rightarrow$ npm run dev.
    

----------

## 2. Folder Structure Demystified

### Core Directories

-   **node_modules/**
    
    -   Contains all external libraries and development dependencies required to build and run the application (e.g., compilers like Babel).
        
    -   **Crucial Concept:** Needed **only during development**. Once the project is built for production (npm run build), node_modules is compiled away and not sent to the hosting server.
        
-   **public/**
    
    -   The holding ground for static assets that don't change, like images, video clips, and audio tags.
        
-   **src/**
    
    -   The heart of your workspace where you write all source code. Contains key entry files:
        
        -   main.jsx: The absolute root JavaScript entry file that connects React to the HTML page.
            
        -   App.jsx: The main root component file containing your UI layouts.
            

### Configuration & Meta Files

-   **package.json**
    
    -   **The Heart of the App:** Stores crucial project meta-information, configuration scripts (like npm run dev), and project dependencies with their versions (e.g., react, react-dom).
        
-   **package-lock.json**
    
    -   Acts as a strict backup file mapping exact versions, deep internal sub-dependencies, and libraries. It ensures the environment remains identical across different machines.
        
-   **index.html**
    
    -   The single HTML entry page. It contains a single target element: . React hooks into this specific div to render the entire UI.
        
-   **eslint.config.js**
    
    -   Handles code linting, spellchecking, and code style/naming conventions.
        
-   **vite.config.js**
    
    -   Configures Vite plugins and dev-server parameters.
        

----------

## 3. Vanilla JS vs. Core React Core Concepts

### Under the Hood: React Elements

Before JSX existed, React applications relied purely on React.createElement() to construct the virtual DOM tree.

-   **Syntax:** React.createElement("tagname", { attributes }, "Content/Children")
    
-   **React Core:** The engine responsible for component logic and element creation.
    
-   **ReactDOM:** The package responsible for actually rendering those elements into the physical browser window via createRoot().
    

### Code Comparison: Creating Elements

JavaScript

```
import React from "react";
import ReactDom from "react-dom/client";

// --- 1. The Vanilla JS Way ---
let jsElement = document.createElement("h1");
jsElement.innerHTML = "I am a h1 tag by js";

// --- 2. The Core React Way ---
let reactElement = React.createElement("h1", null, "I am a h1 tag by react");

// --- 3. Complex Nested React Structure ---
let productCard = React.createElement(
  "article",
  null,
  React.createElement("p", null, "Product Name: Mobile"),
  React.createElement("p", null, "Product Price: 30000"),
  React.createElement("button", null, "Add To Cart")
);

// --- Rendering to the Browser Window ---
ReactDom.createRoot(document.getElementById("root")).render(productCard);

```

----------

## Key Interview Takeaways 💡

1.  **What is the difference between package.json and package-lock.json?**
    
    package.json provides a high-level list of required dependencies and scripts. package-lock.json locks down the _exact_ nested dependency versions to guarantee reproducibility across teams.
    
2.  **Why do we not need node_modules in production?**
    
    Because tools like Vite bundle, compile, and optimize only the used code into raw, lightweight static assets inside a distribution folder during the build phase.
    

----------
