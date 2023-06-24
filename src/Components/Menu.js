import React, { useState } from 'react'
import '../styles/Menu.css';
import{Data} from '../Helpers/Data'
import MenuItem from './MenuItem';
import axios from 'axios';
import { useEffect } from 'react';
import BurgerImage from '../assets/burger.jpg'



function Menu() {
  const [todos,setTodos]=useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://localhost:7242/Product");
        console.log(response.data)
        setTodos(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <>
      <div className='menu'>
        <h1 className='menuTitle'>Burgerlerimiz</h1>
        <div className='menuList'>
          {todos.map((todos,index) => {          
            return (              
              <MenuItem image={BurgerImage} name={todos.name} content={todos.content} UnitPrice={todos.unitPrice} key={index} />
            );
          })}
        </div>
      </div>
    </>
  )  
}
export default Menu