const { useState } = require("react");

const useInput = (initialView, validator) =>{
  const [value, setValue] = useState(initialView);
  const onChange = event =>{
    const {
      targer:{value}
    } = event;
    let willUpdate = true;
    if (typeof validator === "function"){
      willUpdate = validator(value)
    }
    if (willUpdate){
      setValue(value)
    }
  };
  return [value, onChange]
}

const App =()=>{
  const maxLen = value => value.length < 10;
  const name = useInput("Mr.", maxLen);
  return(
    <div>
      <input placeholder="Name" {...name} />
    </div>
  )
}

export default App