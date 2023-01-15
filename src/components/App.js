import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"
  
  const [appClass, setClass] = useState(true);
  function handleMode() {
    setClass(!appClass);
  }

  return (
    <div className={appClass ? "App light" : "App dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{appClass ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
