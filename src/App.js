import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [clicksNum, setClicksNum] = useState(0);

  const clickHandlerFunction = () => {
    setClicksNum(clicksNum + 1);
  };

  const rebootHandlerFunction = () => {
    setClicksNum(0);
  };

  return (
    <div className="App">

      <div className='react-logo-container'>
        <img
          className='react-logo'
          src={logo}
          alt='Logo de React' />
      </div>
      <div className='react-counter-container'>
        <Counter clicksNum={clicksNum} />
        <Button
          text='Click'
          isClickButton={true}
          clickHandler={clickHandlerFunction}
        />
        <Button
          text='Reboot'
          isClickButton={false}
          clickHandler={rebootHandlerFunction}
        />
      </div>
    </div>
  );
}

export default App;
