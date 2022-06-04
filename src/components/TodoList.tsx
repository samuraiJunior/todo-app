import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Clock from './Clock';
import "../App.scss"
import {WiMoonAltWaningCrescent1,WiMoonAltWaxingCrescent6} from "react-icons/wi"
import { ToggleDarkTheme } from '../Redux/TodosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../Hooks';

function TodoList() {
  const darkTheme=useAppSelector(state=>state.todos.darkTheme)
  const dispatch=useAppDispatch()
  
  const toggleDarkTheme=()=>{
    dispatch(ToggleDarkTheme())
  }  
  return (
    <>
    {darkTheme?<> <span className='darkImgWrapper'><p  onClick={toggleDarkTheme}><WiMoonAltWaningCrescent1 /></p></span></>:
     <> <span className="ImgWrapper"><p onClick={toggleDarkTheme}><WiMoonAltWaxingCrescent6 /></p></span></> }
    <span className='clockWrapper'>
      <Clock />
      </span>
      <h1>Какие планы на сегодня ?</h1>
      <TodoForm />
      <Todo/>
    </> 
  );
}

export default TodoList;
