import React from 'react'
import { Todo } from '../models/Todo'
import TodoRemove from './TodoRemove'

interface ITodoItemProps {
    todos: Todo[];
}

export default function TodoItem(props: ITodoItemProps) {

    const todoHTML = props.todos.map((todo) => {
        return <div className="todo" key={todo.id}>
            <span>{todo.task}</span>
            <TodoRemove />
        </div>
    }
    );

    return (
        <>
            {todoHTML}
        </>
    )
}
