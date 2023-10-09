import { useState } from "react";
export const ListComp = () => {
  const [empArray, setEmpArry] = useState([{ name: "EMP1" , Id: 1, age: 40 + 1 }]);
  
  const addEmp =()=>{
    const last=empArray.length;
    setEmpArry([...empArray,{ name: "EMP" + last+1, Id: last+1, age: 40 + last+1 }]);
  }

const deleteEmp =(id)=>{
  alert(id);
  setEmpArry(
    empArray.filter(emp=>id!==emp.Id)
  )
}

  return (
    <div>
      <table border={'1px'}>
        <thead>
        <tr>
          <th>SNo.</th>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {empArray.map((emp, index) => {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{emp.Id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td><button onClick={addEmp}>Add</button> / <button onClick={()=> deleteEmp(emp.Id)}>Delete</button></td>
            </tr>
          )
         
        })}
         </tbody>
      </table>
    </div>
  );
};
