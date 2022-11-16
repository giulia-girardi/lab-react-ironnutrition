import logo from './logo.svg';
import './App.css';
import foodsJSON from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsJSON)
  return (
    <div className="App">
      <Divider>Food List</Divider>
      {foods.map((food)=> {
        return (
          <Row style={{ width: '100%', justifyContent: 'center' }}>
            <FoodBox food={food} />
          </Row>
          

        )
      })}
      {/* <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} /> */}
    </div>
  );
}

export default App;
