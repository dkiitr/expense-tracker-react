// import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    // let expenseDate = new Date(2019, 2, 28);
    // let expenseTitle = "Car Insurance";
    // let expenseAmount = 294.67;

    // const [title, setTitle] = useState(props.title);

    // function clickHandler() {
    //     setTitle("Updated!!!");
    //     console.log(title);
    // }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
