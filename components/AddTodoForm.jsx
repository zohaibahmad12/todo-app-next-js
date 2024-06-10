import React from 'react'
import { addTodo } from '@/actions/addTodo';
const AddTodoForm = () => {

    return (
        <div>
            <form action={addTodo} className="mb-4">
                <input type="text" name='todoName' className="border rounded-md py-2 px-3 mr-2 focus:outline-none focus:border-blue-500" />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default AddTodoForm
