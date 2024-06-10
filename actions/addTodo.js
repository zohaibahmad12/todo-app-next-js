import { revalidatePath } from "next/cache";
export const addTodo = async (formData) => {
    'use server'
    const todoName = formData.get("todoName")
    const response = await fetch('http://localhost:3000/api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name:todoName, completed:true }),
    });
    revalidatePath('/')
};
