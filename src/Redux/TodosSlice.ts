import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteTodos, getTodos, setTodos, updateTodos, updateTodosIsComplete } from "../API/API";
import { TodosT } from "../Types";

export const GetTodos=createAsyncThunk<TodosT[]|any>(
    "todos/GetTodos",
    async()=>{
        try {
        const response=await getTodos()
        return response
        } catch (error:any) {
            alert("Что-то пошло не так(")
        }
        
    }
)
export const SetTodos=createAsyncThunk<TodosT|any,TodosT>(
    "todos/SetTodos",
    async(obj)=>{ 
        try {
         const response=await setTodos(obj)
        return response
        } catch (error:any) {
            alert("Что-то пошло не так(")
        }
        
    }
)
export const DeleteTodos=createAsyncThunk<TodosT|any,number>(
    "todos/DeleteTodos",
    async(id)=>{
        try {
            const response=await deleteTodos(id)
        return response
        } catch (error:any) {
            alert("Что-то пошло не так(")
        }
        
    }
)
export const UpdateTodos=createAsyncThunk<TodosT[]|any,TodosT>(
    "todos/UpdateTodos",
    async(obj)=>{
        try {
            const response=await updateTodos(obj)
        return response
        } catch (error:any) {
            alert("Что-то пошло не так(")
        }
        //console.log(obj.id,obj)
        
    }
)
export const updateTodosIscomplete=createAsyncThunk<TodosT[]|any,TodosT>(
    "todos/updateTodosIscomplete",
    async(obj)=>{
        try {
            const response=await updateTodosIsComplete(obj)
        console.log(response)
        return response
        } catch (error:any) {
            alert("Что-то пошло не так(")
        }
        
    }
)

interface initState{
        todos:TodosT[],
        darkTheme:boolean,
}
const initialState:initState={
    todos:[],
    darkTheme:false,
}


const TodosSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        ToggleDarkTheme(state){
            state.darkTheme=!state.darkTheme
        }
    },
    extraReducers:(builder)=>{builder
        .addCase(GetTodos.fulfilled,(state,action)=>{
            state.todos=action.payload
        })
       .addCase(DeleteTodos.fulfilled,(state,action)=>{
        state.todos=state.todos.filter(td=>td.id!==action.payload)
       })
       .addCase(SetTodos.fulfilled,(state,action)=>{
        state.todos.push(action.payload)
       })
       .addCase(UpdateTodos.fulfilled,(state,action)=>{
        state.todos=state.todos.map(item=>{
           if(item.id===action.payload.id){   
               debugger                                     
            return {...item,text:action.payload.text}
           }
           return item
            })
       })
       .addCase(updateTodosIscomplete.fulfilled,(state,action)=>{
        state.todos=state.todos.map(item=>{
            if(item.id===action.payload.id){
               //console.log(action.payload)                                         
              //console.log({...item,isComplete:action.payload.isComplete})
             return {...item,isComplete:action.payload.isComplete}
            }else{
                return item
            }
             })
       })
    }/*{
        [GetTodos.fulfilled]:(state,action)=>{
            state.todos=action.payload
        },
        [DeleteTodos.fulfilled]:(state,action)=>{
            state.todos=state.todos.filter(td=>td.id!==action.payload)
        },
        [SetTodos.fulfilled]:(state,action)=>{
            state.todos.push(action.payload)
        },
        [UpdateTodos.fulfilled]:(state,action)=>{
           console.log(state.todos.find(td=>td.id===action.payload.id).text=action.payload.text) 
            state.todos.map(item=>{
           if(item.id===action.payload.id){                                        
            return {...item,text:action.payload.text}
           }
           return item
            })
        },
        [updateTodosIscomplete.fulfilled]:(state,action)=>{
            state.todos=state.todos.map(item=>{
                if(item.id===action.payload.id){
                    console.log(action.payload)                                         
                  console.log({...item,isComplete:action.payload.isComplete})
                 return {...item,isComplete:action.payload.isComplete}
                }else{
                    return item
                }
                 })
        }
    }*/
})
export default TodosSlice.reducer
export const {ToggleDarkTheme,} = TodosSlice.actions