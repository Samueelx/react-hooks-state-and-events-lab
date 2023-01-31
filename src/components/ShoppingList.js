import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All");
  function handleChange(e) {
    setCategory(() => e.target.value);
  }

  const updatedList = items.filter(list => {
    if(selectedCategory ==="All"){
      return true
    }else{
    return list.category === selectedCategory
    }
  }) 
  // if(selectedCategory !== "All") {
  //   items = items.filter(item => item.category === selectedCategory);
  // }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={ handleChange }>
          <option value="All">{selectedCategory}</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {updatedList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
