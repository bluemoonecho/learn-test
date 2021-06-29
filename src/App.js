import './App.css';
import Button from './components/Button'
import Search from './components/Search'
import ButtonTwo from './components/ButtonTwo'

function App() {
  return (
    <div className="App">
      <Button/>
      <Search/>
      <ButtonTwo label='click me please'/>
    </div>
  );
}

export default App;
