import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const sayHello=()=>console.log("Hello")
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [])
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={()=>setNumber(number+1)} />
      <button onClick={()=>setAnumber(aNumber+1)} />
    </div>
  );
}

export default App;
