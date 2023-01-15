import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState("");
  const [textContent, setContent] = useState("Add to Cart");

  function handleOnClick() {
    setCart("in-cart");
    setContent("Remove From Cart");
  }
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleOnClick}>{textContent}</button>
    </li>
  );
}

export default Item;
