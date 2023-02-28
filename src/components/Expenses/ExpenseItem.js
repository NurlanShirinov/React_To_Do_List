import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
  // console.log('props.title: ', props.title);
  const [isClicked, setIsClicked] = useState(false);
  // const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount);

  const clickHandler = () => {
    setIsClicked(!isClicked);
    // if (title !== "Updated!") {
    //   setTitle("Updated!");
    // } else {
    //   setTitle(props.title);
    // }
  };

  const priceClickHandler = () => {
    const newPrice = parseInt(prompt("Enter Price!"));
    if (newPrice >= 0 && newPrice.toString != null) setPrice(newPrice);
  };

  return (
    <li>
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{ !isClicked ? props.title : "Updated!" }</h2>
        <div className="expense-item__price">${price}</div>
        <button className="change-title" onClick={clickHandler}>Change title</button>
        <button className="change-title" onClick={priceClickHandler}>Change Price</button>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;