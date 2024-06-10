'use client'
import React from 'react'
import { deleteTodo } from '@/actions/deleteTodo';
import { updateTodoCheck } from '@/actions/updateTodo';
const TodoItem = ({ todo }) => {
   

    return (
        <>
            <div className="flex items-center">
                <input type="checkbox" checked={todo.completed} className="mr-4 cursor-pointer" onChange={()=>{updateTodoCheck(todo._id,todo.completed)}}/>
                <p className={todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}>{todo.name}</p>
            </div>
            <div className="flex space-x-2">
                <button onClick={() => {deleteTodo(todo._id)}} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">Delete</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Update</button>
            </div>
        </>
    )
}

export default TodoItem
