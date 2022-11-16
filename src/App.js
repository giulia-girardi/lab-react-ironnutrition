import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import foodsJSON from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
const uuid = require('uuid');

function App() {
  const [foods, setFoods] = useState(foodsJSON)
  const [query, setQuery] = useState('');

  
  const deleteItem = (name) => {
    let copyFoods = [...foods]
    let foodsWithoutDeleted = copyFoods.filter((item)=> item.name !== name)
    setFoods(foodsWithoutDeleted)
    console.log('hello')
  }

  return (
    <div className="App">
      <Toggle>
          <AddFoodForm foods={foods} setFoods={setFoods} />
      </Toggle>
      <Search query={query} setQuery={setQuery} />
      <Divider>Food List</Divider>
      {foods
        .filter((food)=> food.name.toLowerCase().includes(query.toLowerCase()))
        .map((food)=> {
        return (
          <Row style={{ width: '100%', justifyContent: 'center' }}  key={(uuid.v4())}>
            <FoodBox food={food} foods={foods} setFoods={setFoods} deleteItem={deleteItem}/>
          </Row>
        )
      })}

    </div>
  );
}

export default App;
