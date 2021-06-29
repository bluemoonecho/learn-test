import './App.css';
import {useEffect, useState, useRef} from 'react'
import Button from './components/Button'
import Search from './components/Search'
import ButtonTwo from './components/ButtonTwo'
import ButtonThree from './components/ButtonThree/ButtonThree'
import Input from './components/Input/Input'


function App() { 

  const [showDiv, setShowDiv] = useState(true)
  
  
  return (
    <div className="App">
      <Button/>
      <Search/>
      <ButtonTwo label='click me please'/>
      <ButtonThree/>
      <Input showDiv={showDiv}/>
    </div>
  );
}

export default App;
