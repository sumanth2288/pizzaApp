import React from 'react'
import { useState } from 'react';
import PizzaCard from './PizzaCard';
import pizza from "./PizzaData";
import {Button, Dropdown} from "react-bootstrap"

const Home = () => {

  const [pizzaData,setPizzaData] = useState(pizza);

  const filterItem = (category) =>{
    const Update = pizza.filter((curElem)=>{
      return curElem.category === category;
    });
    setPizzaData(Update);

  }
  return (
    <>
      <Dropdown className='mx-1'>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className='mt-1'>
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div style={{display:"flex" , justifyContent:"space-around"}}>
          <Button variant='outline-dark' onClick={() => filterItem("veg")}>Veg</Button>
        <Button variant='outline-dark'  onClick={() => filterItem("nonveg")}>Nonveg</Button>
        </div>
        
        
      </Dropdown.Menu>
    </Dropdown>   
       <PizzaCard x={pizzaData}/>
    </>
  )
}

export default Home