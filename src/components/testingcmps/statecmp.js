import { useState } from "react";
function StateTest(props) {
  const [message, setMessage] = useState(props.name);
  return (
    <div>
      <div>
        Hi props Value =<h1> {props.name} </h1>
      </div>
      <div>
        <button onClick={()=>setMessage('Kuldeep Sharma')} >Change</button>
      </div>

      <div>
        Value After Change =<h1>{message}</h1>
      </div>
    </div>
  );
}

export default StateTest;
