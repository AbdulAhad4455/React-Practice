//import Chai from "./chai";
import {useCallback, useEffect, useState} from 'react';



function App() {
const [length,setLength]=useState(8)
const[numberAllow,setNumberAllow]=useState(false)
const[chacter,setCharacter]=useState(false)
const[password,setPassword]=useState("");

const passwordGen = useCallback(()=>{
   let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  if(numberAllow)  str += "123456789"
  if(chacter)str += "!@#$%^&*(){}|':;?"
  for (let index = 0; index < length; index++) {
    let char = Math.floor(Math.random() * str.length +1)
    pass += str.charAt(char)
    
    
  }
  setPassword(pass)
},[length,numberAllow,chacter,setPassword])
useEffect(()=>{
  passwordGen();
},[length,numberAllow,chacter,setPassword,passwordGen])
  return (
 <>
<input type='Text' value={password} readOnly  />
<br/>
<input type='Range' min={8} max={100} value={length} onChange={(e)=>{
  setLength(e.target.value)
}}/><label>length{length}</label>
<br/>
<input type='CheckBox' value={numberAllow} onChange={()=>{
  setNumberAllow((prev)=>(!prev))
}} /><label>Number</label>
<br/>
<input type='CheckBox' value={chacter} onChange={()=>{setCharacter((prev)=>(!prev))}}/><label>Charcter</label>
 </>
  );
}

export default App;
