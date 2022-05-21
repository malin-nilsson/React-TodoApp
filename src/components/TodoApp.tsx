import React, { useEffect, useState } from 'react'
import { Todo } from '../models/Todo'
import TodoAdd from './TodoAdd'
import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'
import TodoSort from './TodoSort'


export default function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addItem = (todo: string) => {
        setTodos([...todos, new Todo(todo)]);

    }
    return (
        <div className="todo-content">
            <TodoHeader />
            <TodoAdd addItem={addItem} />
            <TodoSort />
            <TodoItem todos={todos} />
        </div>
    )
}
