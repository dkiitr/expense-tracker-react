import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2019, 2, 28),
    },
    {
        id: "e2",
        title: "Shopping",
        amount: 550.49,
        date: new Date(2020, 2, 15),
    },
    {
        id: "e3",
        title: "Car Wash",
        amount: 99.99,
        date: new Date(2021, 4, 13),
    },
    {
        id: "e4",
        title: "Table Purchase",
        amount: 249.49,
        date: new Date(2019, 6, 28),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const AddExpenseHandler = (expense) => {
        // setExpenses([expense, ...expenses]);
        setExpenses((prevExpense)=> {
            return [expense, ...prevExpense]
        })
    };
    return (
        <div>
            <NewExpense onAddExpense={AddExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
