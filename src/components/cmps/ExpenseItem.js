import './ExpenseItem.css'
import { ExpenseDate } from './ExpenseDate'
export const ExpeneseItem =(props)=>{
    // const expenseDate= new Date(2021,2,28);
    // const expenseTitle='Car Insurance';
    // const expenseAmount=300.45;
return (
//     <div className="expense-item">        
//     <div>{props.expense.date!=null? props.expense.date.toDateString():''}</div>
//     <div className="expense-item__description">
//         <h2>{props.expense.title}</h2>
//         <div className="expense-item__price">
//             ${props.expense.amount}
//         </div>
//     </div>
// </div>

    <div className="expense-item">
    <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{props.expenseTitle}</h2>
            <div className="expense-item__price">
                ${props.expenseAmount}
            </div>
        </div>
    </div>


)
}