'use server'
import { revalidatePath } from "next/cache";
export const updateTodoName = async (id,name,completed) => {
    try {
        const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({completed,name  }), 
        });
    } catch (error) {
        console.error('Error updating todo:', error);
    }
    revalidatePath('/')
};