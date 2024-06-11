'use server'
import { revalidatePath } from "next/cache";
export const updateTodoCheck = async (id,name,completed) => {
    try {
        const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({completed:!completed,name  }), 
        });
    } catch (error) {
        console.error('Error updating todo:', error);
    }
    revalidatePath('/')
};