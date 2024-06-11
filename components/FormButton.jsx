'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
const FormButton = () => {
    const { pending } = useFormStatus()
    console.log(pending);
    return (
        <>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" disabled={pending}>
              {(pending)?'Adding':'Add'}  
            </button>
        </>
    )
}

export default FormButton
