import React, { useState, useEffect, useRef, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../Hooks';
import { SetTodos, UpdateTodos } from '../Redux/TodosSlice';
import { TodosT } from '../Types';

interface formProps{
  edit?:TodosT
  submitUpdate?:()=>void
}

const TodoForm:FC <formProps>=({edit,submitUpdate})=> {
  const [input, setInput] = useState(edit ? edit.text : '');
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if(inputRef.current){
     inputRef.current.focus()
    }
  });
 
  const handleChange = (e:any) => {
    setInput(e.target.value);
  };

  const dispatch=useAppDispatch()

  const handleSubmit = () => {
    dispatch(SetTodos({
      id:1,
      parentID:Math.floor(Math.random() * 10000),
      text: input,
      isComplete:false,
    }))
    setInput('');
  };
  const darkTheme=useAppSelector(state=>state.todos.darkTheme)
 console.log(darkTheme)
 
  const update=(text:string)=>{
    if(edit&&submitUpdate !==undefined){
      dispatch(UpdateTodos({...edit,text:text}))
      submitUpdate()
    }
  }

  return (
    <form className='todo-form'>
      
      {edit ? (
        <>
        <span>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className={!darkTheme?'todo-input edit':"todo-input edit dark"}
          />
          <button onClick={()=>update(input)} className='todo-button edit'>
            Update
          </button>
          </span>
        </>
      ) : (
        <>
        <span>
          <input
            placeholder='Добавьте заметку'
            value={input}
            onChange={handleChange}
            name='text'
            className={!darkTheme?'todo-input':"todo-input  dark"}
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Добавить
          </button>
          </span>
        </>
      )}
    </form>
  );
}

export default TodoForm;

      