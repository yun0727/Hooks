const usePreventLeave = ()=>{
  const listener = (event) =>{
    event.preventDefault();
    event.returnValue ="";
  }
  const enablePrevent = () => window.addEventListener("beforeunload", listener)
  const disablePrevent = () => window.addEventListener("beforeunload", listener)
  return (enablePrevent, disablePrevent)
}

const App = ()=>{
  const {protect, unprotect} = usePreventLeave()
  return (
    <div>
      <button onClick={protect}>Protect</button>
      <button onClick={unprotect}>Unprotect</button>
    </div>
  )
}

export default App