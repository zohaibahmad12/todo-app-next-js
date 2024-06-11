'use client'
import React from 'react'
import { deleteTodo } from '@/actions/deleteTodo';
import { useState, useRef, useEffect } from 'react';
import { updateTodoCheck } from '@/actions/updateTodoCheck';
import { updateTodoName } from '@/actions/updateTodoName';
const TodoItem = ({ todo }) => {
    const [isUpdate, setIsUpdate] = useState(false)
    const [value, setValue] = useState(todo.name)
    const ref = useRef();
    useEffect(() => {
        if (isUpdate) {
            ref.current.focus()
        }
    }, [isUpdate])
    return (
        <>
            <div className="flex items-center">
                <input type="checkbox" checked={todo.completed} className="mr-4 cursor-pointer" onChange={() => { updateTodoCheck(todo._id, todo.name, todo.completed) }} />
                {
                    (isUpdate) ?
                        <input ref={ref} type="text" value={value} onChange={(event) => setValue(event.target.value)} className="border rounded-md py-2 px-3 mr-2 focus:outline-none focus:border-blue-500" /> :
                        <p className={todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}>{todo.name}</p>
                }

            </div>
            <div className="flex space-x-2">
                {
                    (isUpdate) ?
                        <>
                            <button onClick={() => { setIsUpdate(false) }} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">Cancel</button>
                            <button
                                onClick={() => {
                                    setIsUpdate(false)
                                    updateTodoName(todo._id, value, todo.completed)
                                }}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Make Update</button>
                        </> :
                        <>
                            <button onClick={() => { deleteTodo(todo._id) }} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">Delete</button>
                            <button onClick={() => setIsUpdate(true)}  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Update</button>
                        </>
                }

            </div>
        </>
    )
}

export default TodoItem
