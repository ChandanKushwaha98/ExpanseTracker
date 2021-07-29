import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {
    const [isBtnClicked, setIsBtnClicked] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsBtnClicked(false)
    }
    const buttonActive = () => {
        setIsBtnClicked(true);
    }
    const buttonInactive = () => {
        setIsBtnClicked(false)
    }
    return (
        <div className="new-expense">
            {!isBtnClicked && <button onClick={buttonActive}>Add New Expense</button>}

            {isBtnClicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={buttonInactive} />}
        </div>
    )
}

export default NewExpense
