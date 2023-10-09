import './App.css';
// import { ListComp } from './components/testingcmps/listCmp';
//import TestingStart from './components/testingcmps/testcmp';
//import StateTest from './components/testingcmps/statecmp'
//import EventHndlr from './components/testingcmps/eventhandler';
//import ParentCmp from './components/testingcmps/parntCmp';
import { ExpeneseItem } from './components/cmps/ExpenseItem';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      {/* <TestingStart name='Kuldeep' />
      <TestingStart name='Aman' />
      <TestingStart name='Amit'>
        <div>
          hello this is test div
        </div>
        <div>
          this can be ussed as dynamic html section
        </div>
      </TestingStart> */}
        {/* <StateTest name='Kuldeep'></StateTest> */}
         {/* <EventHndlr> </EventHndlr> */}
         {/* <ParentCmp /> */}
         {/* <ListComp /> */}

{
  expenses.map((exp,indx)=>{
    return(
      <div>
        {/* <h1>
          {exp.date.toLocaleString()}
        </h1> */}
      <ExpeneseItem 
      expenseTitle={exp.title} 
      expenseAmount={exp.amount}
      date={exp.date}></ExpeneseItem>

       {/* <ExpeneseItem expense={exp} ></ExpeneseItem> */}
      </div>
    )
  })
}
         
    </div>
  );
}

export default App;
