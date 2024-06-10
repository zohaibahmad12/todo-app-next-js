import { NextResponse } from 'next/server';
import connectDB from '@/database';
import TodoModel from '@/models/todo';


export async function GET() {
    try {
      await connectDB();
      const allTodos = await TodoModel.find();
      return NextResponse.json({ success: true, data: allTodos }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
  }
  
export async function POST(req) {
  try {
    await connectDB();
    const { name, completed } = await req.json();
    const newTodo = new TodoModel({ name, completed });
    await newTodo.save();
    return NextResponse.json({ success: true, message: 'Todo item added successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
