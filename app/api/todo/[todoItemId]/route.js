import { NextResponse } from 'next/server';
import connectDB from '@/database';
import TodoModel from '@/models/todo';
export async function DELETE(req,value) {
  try {
    const  id  = value.params.todoItemId
    await connectDB();
    const deletedTodo = await TodoModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Todo deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function PUT(req,value) {
  try {
    const  id  = value.params.todoItemId
    const { name,completed } = await req.json();
    await connectDB();
    const updatedTodo = await TodoModel.findByIdAndUpdate(id, { name,completed });
    return NextResponse.json({success:true})
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

