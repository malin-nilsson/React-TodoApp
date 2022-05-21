import React, { useState } from 'react'
import { Todo } from '../models/Todo'
import TodoAdd from './TodoAdd'
import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'
import TodoSort from './TodoSort'

export default function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);

    ///////////////////////////
    ///////// Add todo /////////
    ///////////////////////////
    const addItem = (todo: string) => {
        setTodos([...todos, new Todo(todo)]);
    }

    ///////////////////////////
    /////// Toggle todo ////////
    ///////////////////////////
    const toggleTodo = (id: number) => {
        let todo = todos.find((todo) => todo.id === id);
        if (todo) {
            todo.done = !todo.done;
            let newTodoList = [...todos]
            setTodos(newTodoList)
        }
        console.log(todo)
    }

    ///////////////////////////
    ///// Remove todo ////////
    ///////////////////////////
    const removeTodo = (id: number) => {
        let index = todos.findIndex((todo) => todo.id === id);
        let newTodoList = [...todos]
        newTodoList.splice(index, 1)
        setTodos(newTodoList)
    }

    ///////////////////////////
    //// Sorting functions ////
    ///////////////////////////

    const sortByName = () => {
        let newTodoList = [...todos]
        newTodoList.sort((a, b) => a.task.localeCompare(b.task));
        setTodos(newTodoList)
    }

    const sortByDate = () => {
        let newTodoList = [...todos]
        newTodoList.sort(function (a, b) {
            return b.id - a.id;
        });
        setTodos(newTodoList)
    }

    const sortByDone = () => {
        let newTodoList = [...todos]
        newTodoList.sort((x, y) => {
            return x.done === y.done ? 0 : x.done ? 1 : -1;
        });
        setTodos(newTodoList)
    }

    const sortByNotDone = () => {
        let newTodoList = [...todos]
        newTodoList.sort((x, y) => {
            return x.done === y.done ? 0 : x.done ? -1 : 1;
        });
        setTodos(newTodoList)
    }

    return (
        <div className="todo-content">
            <TodoHeader />
            <TodoAdd addItem={addItem} />
            <TodoSort sortByName={sortByName} sortByDate={sortByDate}
                sortByDone={sortByDone} sortByNotDone={sortByNotDone} />
            <TodoItem todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    )
}
