
import React,{ useEffect } from 'react';
import './App.scss';
import TodoList from "./components/TodoList"
import { useAppDispatch, useAppSelector } from './Hooks';
import { GetTodos } from './Redux/TodosSlice';

function App() {
  const dispatch=useAppDispatch()
  useEffect(()=>{
    dispatch(GetTodos())
  },[dispatch])
  const darkTheme=useAppSelector(state=>state.todos.darkTheme)

  return (
    <div className={darkTheme?'todo-app dark':'todo-app'}>
    < TodoList />
  </div>
  ); 
}

export default App;
