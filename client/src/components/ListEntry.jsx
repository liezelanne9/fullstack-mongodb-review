import React from 'react';
import axios from 'axios';

const ListEntry = (props) => {
    const { _id, name, priority } = props.todo;

    const deleteTodo = function(e) {
        e.preventDefault();
        axios
        .delete(`/api/todos/${_id}`)
        .then(props.fetchTodos)
    }

    const updateTodo = function(e, change) {
        e.preventDefault();
        axios
        .put(`/api/todos/${_id}`, { priority: priority + change })
        .then(props.fetchTodos)
    }

    return (
        <li>
            Priority {priority}:
            <br />{name}
            <br />
            <button onClick={(e, change) => updateTodo(e, 1)}>+</button>
            <button onClick={(e, change) => updateTodo(e, -1)}>-</button>
            <button onClick={deleteTodo}>Delete</button>
            <br /><br />
        </li>
    )

}

export default ListEntry;