import React, { useState } from 'react'
import './ExpenseTracker.css'

const ExpenseTracker = () => {

    const [input,setInput] = useState("")
    const [amount,setAmount] = useState("") 
    const [expenses,setExpenses] = useState([])

    const addExpense = ()=>{
      if(!input || !amount)return;
      const newExpense = {
        id: expenses.lenght +1,
        title : input,
        amount :amount
      };
      setExpenses([...expenses,newExpense]);
      setAmount('');
      setInput('');
    }

    const deleteExpense = (id) =>{
      setExpenses(expenses.filter((expenses) => expenses.id !== id)) 
    }


  return (
    <div className='container'>
      <h2>Expense Tracker</h2>
      <div className='input-box'>
        <input type='taxt' name='expense' placeholder='Expense' value={input} onChange={(e)=> setInput(e.target.value)} />
        <input type='number' name='amount' placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={addExpense} >Add Expense</button>
      </div>
      <ul className='expense-list'>
        {
          expenses.map((expense)=>(
            <li key={expense.id}>
              <span>{expense.title}</span>
              <span>{expense.amount}</span>

              <button onClick={()=>deleteExpense(expense.id)}>Delete</button>
            </li>
          ))
        }  
      </ul>
    </div>
  )
}

export default ExpenseTracker
