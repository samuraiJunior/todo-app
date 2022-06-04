import React, { FC, useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { DeleteTodos, updateTodosIscomplete } from '../Redux/TodosSlice';
import {AiFillCheckSquare} from "react-icons/ai"
import { useAppDispatch, useAppSelector } from '../Hooks';
import { TodosT } from '../Types';

const Todo:FC =() => {
  
  const [edit, setEdit] = useState<TodosT>({
    id: 0,
    text: '',
    parentID:1,
    isComplete:false
  });

  const submitUpdate =() => {
    setEdit({
      id: 0,
      text: '',
      parentID:1,
      isComplete:false
    });
  };
  const dispatch=useAppDispatch()

  const deleteTodo=(id:number)=>{
    dispatch(DeleteTodos(id))
  }
  const Todos=useAppSelector(state=>state.todos.todos)
  
 const completetodo=(obj:TodosT)=>{
   //let e=obj.isComplete
  dispatch(updateTodosIscomplete({...obj,isComplete:!obj.isComplete}))
 }
  /*if (edit.id) {
    return <TodoForm  edit={edit} submitUpdate={submitUpdate} />;
  }*/
 
  return(<>
   { edit.id!==0?<TodoForm  edit={edit} submitUpdate={submitUpdate} />:
    Todos.map((td) => (<>
      <div
        className={td.isComplete ? 'todo-row complete' :'todo-row'} key={td.id}  >
      
        <div key={td.id} >
          {td.text}
        </div>
        <div className='icons'>
          <AiFillCheckSquare  onClick={() => completetodo(td)}/>
          <RiCloseCircleLine
            onClick={() => deleteTodo(td.id)}
          />
          <TiEdit
            onClick={() => setEdit({ id:td.id,parentID:td.parentID,text: td.text })}
  
          />
        </div>
      </div>
    
      </>))
      }</>) 
};

export default Todo;

  