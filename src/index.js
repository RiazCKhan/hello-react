import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // console.log(props)
  
  const resetHandler = props.reset

  return (
    <button onClick={resetHandler}>{props.children}</button>
    )
  };


const Application = () => {
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <input 
      value={name}
      onChange={(event) => {setName(event.target.value)}}
      placeholder="Type Your Name" />
      <Button reset={reset}>Reset</Button>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
