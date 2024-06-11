import React from 'react'
import { addTodo } from '@/actions/addTodo';
import FormButton from './FormButton';
const AddTodoForm = () => {

    const handleForm = async (formData) => {
        'use server'
         await addTodo(formData)
    }
    return (
        <div className='flex justify-center'>
            <form action={handleForm} className="mb-4">
                <input type="text" name='todoName' className="border rounded-md py-2 px-3 mr-2 focus:outline-none focus:border-blue-500" />
                <FormButton />
            </form>
        </div>
    )
}

export default AddTodoForm
