 'use server'
import { revalidatePath } from "next/cache";
export const deleteTodo = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
   revalidatePath('/')
};