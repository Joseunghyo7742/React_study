import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function Hello(){
  
  useEffect(()=>{
    console.log("Hi");
    return ()=>console.log("Bye");
  },[]);
    
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing]= useState(false);
  const onClick =()=> setShowing((prev)=>!prev);
  return <div>
    {showing ? <Hello/>: null} //자바스크립트 쓸때는 중괄호, Component는 단지 jsx를 부루는 function
    <button onClick={onClick}>{showing ? "Hide":"Show"}</button>
  </div>;
}

export default App;
