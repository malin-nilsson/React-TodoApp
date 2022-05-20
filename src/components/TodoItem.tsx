import React from 'react'
import { TodoModel } from '../models/TodoModel'
import TodoRemove from './TodoRemove'

interface ITodoItemProps {
    todo: TodoModel;
}

export default function TodoItem(props: ITodoItemProps) {
    return (
        <div className="todo">
            <span>{props.todo.task}</span>
            <TodoRemove />
        </div>
    )
}
