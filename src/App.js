import logo from './logo.svg';
import './App.css';
import foodsJSON from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJSON)
  return (
    <div className="App">
      <AddFoodForm foods={foods} setFoods={setFoods}/>
      <Divider>Food List</Divider>
      {foods.map((food)=> {
        return (
          <Row style={{ width: '100%', justifyContent: 'center' }}>
            <FoodBox food={food} />
          </Row>
        )
      })}

    </div>
  );
}

export default App;
