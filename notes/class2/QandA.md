[<~ Back to Class 2](class2.md)
### Q1: Why can't a standard JavaScript `if` statement be written directly inside a JSX `return` block?

-   **Answer:** JSX is a syntactic extension that compiles down to nested JavaScript function calls (`React.createElement`). Because a standard `if` statement is a statement and does not evaluate directly to a value, it is structurally illegal inside function arguments. To handle logic within JSX, you must open an expression window using curly braces `{}` and use expressions like the **Ternary Operator (`? :`)** or the **Logical AND operator (`&&`)**.
    

### Q2: What are the three standard patterns for handling conditional layout rendering?

-   **Answer:** 1. **Logical AND (`&&`):** Best used when a component should either render when a condition is true or render absolutely nothing when false.
    
    `jsx {isAdmin && <AdminPanel />}`
    
    2. **Ternary Operator (`? :`):** Best used when an alternative fallback interface must be shown if the condition evaluates to false.
    
    `jsx {isAdmin ? <AdminPanel /> : <AccessDenied />}`
    
    3. **Variable Assignment Outside Return:** Best used when the conditions are highly complex or nested, keeping the main JSX code blocks flat and highly readable.
    
    `jsx let displayComponent = null; if (isAdmin) { displayComponent = <AdminPanel />; }`
    

### Q3: Why does modifying local component state via `useState` inside a rendering workflow trigger an infinite re-render loop error?

-   **Answer:** When a component runs its function body, calling a state setter function (like `setValue`) explicitly instructs React to schedule an immediate re-render of that component to capture the new state. If this setter runs directly in the body layout without being enclosed in an event handler (like `onClick`) or a lifecycle hook (like `useEffect`), the component falls into an infinite loop: _Render $\rightarrow$ Set State $\rightarrow$ Trigger Re-render $\rightarrow$ Render $\rightarrow$ Set State..._ until the engine crashes to save system memory.
    

### Q4: What is the golden rule regarding computing values from existing props or state?

-   **Answer:** **If a value can be derived or calculated directly from existing props or state, do not store it in local state.** You should compute the value dynamically during the rendering phase. When the underlying state updates, React automatically recalculates the dependent variables, preventing state synchronization bugs and minimizing unnecessary component re-renders.
    
### The Wrong Way (Creating a "Syncing State" Bug)

Here, a developer creates a separate state variable for `totalPrice`. This looks like it works at first, but it creates a bug: when items are removed or updated, `totalPrice` easily gets out of sync because you have to remember to call `setTotalPrice` perfectly everywhere. It also causes unnecessary extra re-renders.
   
```
// ❌ BAD PRACTICE
function CartComponent() {
  const [cartItems, setCartItems] = useState([{ name: 'Tomato', price: 30, qty: 2 }]);
  const [totalPrice, setTotalPrice] = useState(60); // 🔴 Redundant state!

  const addItem = (newItem) => {
    setCartItems([...cartItems, newItem]);
    setTotalPrice(totalPrice + newItem.price); // 🔴 Manually syncing state is error-prone
  };
  
  return <h1>Total: {totalPrice}</h1>;
}
```
### The Right Way (Derived State)

Here, there is no extra state. `totalPrice` is just a plain variable calculated on the fly during the render step. Because `cartItems` is a reactive state, whenever it changes, React automatically re-runs the component function, calculating the fresh `totalPrice` perfectly every single time.
    ```
    // ✅ INDUSTRY STANDARD BEST PRACTICE
     function CartComponent() { 
     const [cartItems, setCartItems] = useState([{ name: 'Tomato', price: 30, qty: 2 }]);
      // Derived Value: Calculated dynamically during rendering
       const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
        return <h1>Total: {totalPrice}</h1>; 
        }
    ```

### Q5: Why do `console.log` statements fire twice on component mount or state update during local development?

-   **Answer:** This is caused by **`<StrictMode>`** wrapping your application root layout inside `main.jsx`. In development mode, React intentionally executes component functions twice to stress-test your code and detect unintended side effects or impure functions. The virtual updates are scrubbed, and only a single rendering pass is committed to the real browser DOM. This double logging stops completely when compiling production builds.
    

### Q6: What structural adjustments must be made when setting up an array data store structure in a Redux Toolkit slice?

-   **Answer:** 1. The `initialState` configuration field must explicitly match the collection type (e.g., an empty array `[]` rather than an object `{}`).
    
    2. When using standard JavaScript array traversal within modern Redux reducers, utilize pure array locators like **`.find()`** to locate internal records.
    
    3. To append complex payload data cleanly without unintended formatting issues, pass copies of objects directly into the array stack:
    
    `javascript state.push({ ...action.payload, quantity: 1 });`
    

### Q7: Why does a JavaScript `switch` block require explicit colons (`:`) for its operations?

-   **Answer:** The language compiler uses the colon (`:`) syntax token inside a `switch` statement to delineate the evaluation case match block from the actual line of instructions that follow it. Omitting the colon leaves the compiler unable to determine where the target text string finishes and where executable code blocks begin.
    

### Q8: What is the enterprise industry-standard architecture for separating component layouts from complex business calculations?

-   **Answer:** 1. **Extract Utility Files:** Move calculations, pricing algorithms, and validation checks entirely out of your visual `.jsx` files and into isolated JavaScript helper files (e.g., `src/utils/couponHelpers.js`). This makes the logic reusable and easily testable using testing frameworks.
    
    2. **Leverage Redux Selectors:** For intense dataset operations or array reductions, utilize memoized selectors via `createSelector`. This caches calculated values so they don't run again unless relevant state dependencies change.
    
    3. **Enforce Backend Truth:** Frontend UI logic is strictly for user interaction speed and responsiveness. **Never trust client-side data for transactional integrity.** All pricing computations, discounts, and payment balances must be re-validated and calculated securely on your backend APIs (such as Spring Boot or Node) prior to routing to a payment gateway.
