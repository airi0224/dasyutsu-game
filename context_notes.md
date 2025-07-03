# Creating Context

Here is the two-step process for a component like Room1 to access the
inventory:

## Step 1: Create and Export the Context

First, you'd create a file, let's say src/context/InventoryContext.jsx. In
this file, you create and export both the Context object itself and the
Provider component.

```jsx
    1 // src/context/InventoryContext.jsx
    2 import React, { createContext, useState } from
      'react';
    3 
    4 // 1. Create the actual context object and EXPORT it
    5 export const InventoryContext = createContext();
    6 
    7 // 2. Create the Provider component that will hold 
      the state
    8 export function InventoryProvider({ children }) {
    9   const [inventory, setInventory] = useState(['rusty 
      key']); // Example initial item
   10 
   11   // This is the function that components will call 
      to add items
   12   const addItem = (item) => {
   13     // Avoid duplicates
   14     if (!inventory.includes(item)) {
   15       setInventory(prevInventory =>
      [...prevInventory, item]);
   16     }
   17   };
   18 
   19   // 3. This is the "value" that will be made 
      available to all child components.
   20   //    We pass both the data (inventory) and a way 
      to change the data (addItem).
   21   const value = { inventory, addItem };
   22 
   23   return (
   24     <InventoryContext.Provider value={value}>
   25       {children}
   26     </InventoryContext.Provider>
   27   );
   28 }

```

## Step 2: Use the useContext Hook in the Room Component

Now, in any room component (e.g., src/Rooms/Room1/index.jsx), you just need to
do two things:

1. import the InventoryContext object you exported.
2. Call the useContext hook with that object.

The hook will return the entire value object that you defined in the Provider.

```jsx
1 // src/Rooms/Room1/index.jsx
2 import React, { useContext } from 'react'; // Make 
  sure to import useContext
3 import { Link } from 'react-router-dom';
4 import { InventoryContext } from
  '../../context/InventoryContext'; // 1. Import the 
  context
5 
6 export default function Room1() {
7   // 2. Call the hook to get the shared state and 
  methods
8   const { inventory, addItem } = useContext(
  InventoryContext);
9 
10   return (
11     <div>
12       <h2>This is Room 1.</h2>
13       <p>In the corner, you spot a dusty old map.</p>
14 
15       {/* Use the addItem function directly from the 
  context */}
16       <button onClick={() => addItem('dusty map')}>
17         Pick up Map
18       </button>
19 
20       <hr />
21 
22       <h3>Your Current Inventory:</h3>
23       <ul>
24         {/* Use the inventory state directly from the
  context */}
25         {inventory.map(item => <li key={item}>{item}
  </li>)}
26       </ul>
27 
28       <Link to="/start">Go back to the Start</Link>
29     </div>
30   );
31 }

```

## Summary

* No Prop Drilling: The Room1 component gets direct access to
  inventory and addItem without its parent component needing to
  know or pass them along.
* Import, then Use: The pattern is simply: import { MyContext }
  and then const myValue = useContext(MyContext);.
* Clean and Decoupled: This keeps your room components clean.
  They don't care where the inventory state comes from, only
  that they can access it through the InventoryContext.
