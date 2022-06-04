import axios from "axios"
import { TodosT } from "../Types"

const instance=axios.create({
    baseURL:"https://62738d7a345e1821b21d377c.mockapi.io/"
})

export const getTodos=async()=>{
    const response=await instance.get<TodosT>("todos")
    return response.data
}
export const setTodos=async(obj:TodosT)=>{
    const response=await instance.post<TodosT>("todos",obj)
    //console.log(response)
    return response.data
}
export const deleteTodos=async(id:number)=>{
    const response=await instance.delete<TodosT>("todos/"+id)
    return response.data.id
}
export const updateTodos=async(obj:TodosT)=>{
    const response=await instance.put<TodosT>("todos/"+ obj.id,obj)
    console.log(response.data)
    return response.data
}
export const updateTodosIsComplete=async(obj:TodosT)=>{
    const response=await instance.put<TodosT>("todos/"+ obj.id,obj)
    //console.log(response.data)
    return response.data
}
