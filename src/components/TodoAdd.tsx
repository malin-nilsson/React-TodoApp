import React, { useState } from 'react'

interface ITodoAddProps {
    addItem: (arg0: string) => void;
}

export default function TodoAdd({ addItem }: ITodoAddProps) {
    const [todoInput, setTodoInput] = useState("");

    const addNewTodo = () => {
        addItem(todoInput)
        setTodoInput("");
    };

    return (
        <div className="input-box">
            <input type="text" placeholder="Add new todo..."
                value={todoInput}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTodoInput(e.target.value);
                }}
                onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    if (e.key === "Enter" && todoInput) {
                        addNewTodo()
                    }
                }} />
            <button className="btn"
                onClick={() => {
                    if (todoInput) addNewTodo();
                }}>Add</button>

        </div>
    )
}
