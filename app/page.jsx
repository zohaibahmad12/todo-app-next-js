import React from 'react';
import TodoItem from '@/components/TodoItem';
import AddTodoForm from '@/components/AddTodoForm';
const Home = async () => {

    const res=fetch('http://localhost:3000/api/todo')
    const allTodos=await (await res).json()
    return (
        <div className="container mx-auto py-4">
        <h1 className="text-3xl font-bold mb-8">Todo List</h1>
        <AddTodoForm></AddTodoForm>
        <ul className="space-y-4">
          {allTodos.data.map(todo => (
            <li key={todo._id} className="flex items-center justify-between bg-gray-100 rounded-md p-4">
             <TodoItem todo={todo}></TodoItem>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Home;
