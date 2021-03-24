import React from 'react';

const Todo = (props) => {
    //Events
    const deleteHandler = () => {
        props.setTodos(props.todos.filter(el => el.id !== props.todo.id));
    };
    const completeHandler = () => {
        props.setTodos(props.todos.map((item) => {
            if (item.id == props.todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item ;
        }));
    };
    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="Fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="Fas fa-trash"></i>
            </button>
        </div>);
};

export default Todo;