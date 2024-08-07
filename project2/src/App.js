import React, { useState } from 'react'


//import Card from './components/Card.js'

function App() {
  const [color,setColor]=useState("olive")
  return (
    <div className='W-full h-screen duratin-200' style={{
      backgroundColor: color
    }}>
      <div className='fixed flex flrx-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='fixed flex flrx-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor : "red"}} onClick={()=>setColor("Red")}>Red</button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor : "green"}}  onClick={()=>setColor("Green")}>Green</button>
    <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'style={{backgroundColor : "white"}}  onClick={()=>setColor("White")}>White</button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor : "yellow"}}  onClick={()=>setColor("Yellow")}>Yellow</button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor : "purple"}}  onClick={()=>setColor("Purple")}>Purple</button>
    </div>
    </div>
  {/*<Card userName="Abdul Ahad" />
    <br/>
    <Card  userName="Delba" btnText="Click me" />*/}
    </div>
    
  );
}

export default App;
