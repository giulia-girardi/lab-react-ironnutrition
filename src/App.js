import logo from './logo.svg';
import './App.css';
import foodsJSON from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';


function App() {
  const [foods, setFoods] = useState(foodsJSON)
  return (
    <div className="App">
      <Divider>Food List</Divider>
      {foods.map((food)=> {
        return (
        <>
          <p>{food.name}</p>
          <img src={food.image} width='80px' />
        </>
        )
      })}
    </div>
  );
}

export default App;
