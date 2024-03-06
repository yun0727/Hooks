import { useEffect, useRef, useState } from 'react';
import './App.css';

const useClick = (onClick) =>{
  const element = useRef();
  useEffect(()=>{
    if (typeof onClick !== "function"){
      return;
    }
    if (element.current){
      element.current.addEventListener("click", onClick)
    }
    return ()=>{
      if (element.current){
        element.current.removeEventListener("click", onClick);
      }
    }
  },[])
  return typeof onClick !== "function" ? undefined: element;
}

function App() {
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

export default App;
