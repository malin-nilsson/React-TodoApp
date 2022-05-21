import React, { useState } from 'react'
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

    const toggleTodo = (id: number) => {
        let todo = todos.find((todo) => todo.id === id);
        if (todo) {
            todo.done = !todo.done;
            let newTodoList = [...todos]
            setTodos(newTodoList)
        }
        console.log(todo)
    }

    const removeTodo = (id: number) => {
        let index = todos.findIndex((todo) => todo.id === id);
        let newTodoList = [...todos]
        newTodoList.splice(index, 1)
        setTodos(newTodoList)
    }

    return (
        <div className="todo-content">
            <TodoHeader />
            <TodoAdd addItem={addItem} />
            <TodoSort />
            <TodoItem todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    )
}
