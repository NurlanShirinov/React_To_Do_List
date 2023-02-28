import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [visibility, setVisiblity] = useState(false);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const showButtonHandle = () => {
    setVisiblity(!visibility);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <>
      <Card className={`expenses ${!visibility ? "hidden" : "visible"}`}>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpensesChart expenses = {filteredExpenses}/>
       <ExpensesList items = {filteredExpenses}/>
      </Card>
      <div className="d-flex">
        <button className="show-hidden-button" onClick={showButtonHandle}>
          {!visibility ? "Show" : "Hide"}
        </button>
      </div>
    </>
  );
};

export default Expenses;