import React from 'react'
import useStore  from '../store/store.js';




const Counter=() => {
  
    /* isko esebhi kr sakhtey or dusratarika bhi hai
    const counter = useStore((state)=> state.counter);
     const incrementCounter = useStore((state)=> state.incrementCounter);
    const decrementCounter = useStore((state)=> state.decrementCounter);*/
    const{incrementCounter,decrementCounter,counter,incresBy,decresBy,reset} =useStore()
  return (
    <>
    <h1>Counter</h1>
    <h2>{counter}</h2>
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={decrementCounter}>Decrement</button>
    <button onClick={incresBy}>+10</button>
    <button onClick={decresBy}>decresBy:-10</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter;
