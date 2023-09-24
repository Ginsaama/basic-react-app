import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
    };
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}
// Similar to Todo.js but in this case it only edits the existing todo taken from the unique id of that todo.