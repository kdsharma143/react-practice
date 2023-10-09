import { useState } from "react";
const EventHndlr = (props) => {
  const clickhndler = (event, count = 1) => {
    console.log(event, count);
  };
  const [txtBx, setMessage] = useState();
  const changeText = (event) => {
    console.log(event);
    setMessage(event.target.value)
  };
  return (
    <div>
      <div style={{ display: "none" }}>
        <h1>Click Handler</h1>
        <button onClick={clickhndler}> Click Me</button>

        <button onClick={(event) => clickhndler(event, 5)}>
          Click With Multiple Parms
        </button>
      </div>

      <div>
        <h1>On Change</h1>
        <input type="text" onChange={changeText}></input>
        <br />
        <span>TxtBox={txtBx}</span>
      </div>
    </div>
  );
};

export default EventHndlr;
