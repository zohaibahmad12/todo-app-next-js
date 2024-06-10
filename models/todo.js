import { Schema,model,models } from "mongoose";

const todoSchema=new Schema({
    name:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const TodoModel=models.todo || model('todo',todoSchema)
export default TodoModel