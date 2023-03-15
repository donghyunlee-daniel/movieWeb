import Button from "./Button";
import styles from './App.module.css';
import { useState, useEffect } from "react";
function App() {
  const [counter,setValue] =useState(0);
  const [keyword,setKeyword] = useState("");
  const onCLick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once.");
  }
  useEffect(iRunOnlyOnce,[]);
  return (
    <div>
      <input value={keyword} 
      onChange={onChange} 
      type="text" 
      placeholder="Seach here..."/>
      <h1>{counter}</h1>
      <button onClick={onCLick}>Click me</button>
      </div>
  );
}

export default App;
