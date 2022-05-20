import React from 'react'
import { TodoModel } from '../models/TodoModel'
import TodoAdd from './TodoAdd'
import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'
import TodoSort from './TodoSort'

export default function TodoApp() {

    const todos = new TodoModel("Ny todo")

    return (
        <div className="todo-content">
            <TodoHeader />
            <TodoAdd />
            <TodoSort />
            <TodoItem todo={todos} />
        </div>
    )
}
