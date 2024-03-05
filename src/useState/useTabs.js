import { useState } from 'react';
import './App.css';

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2"
  },
]

const useTabs = (initialTab, allTabs)=>{
  const [currentIndex, setCurrentIndex] = useState(initialTab)
  if (!allTabs || !Array.isArray(allTabs)){
    return;
  }
  return{
    currentItem:allTabs[currentIndex],
    changeItem:setCurrentIndex
  }
}

function App() {
  const {currentItem, changeItem} = useTabs(0, content)
  return (
    <div className="App">
      {content.map((section, index) =>(
        <button onClick={()=>changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
