import React from 'react';
import Todo from './Todo';

const TodoList = ({tasks}) => (
    <>
    <h1 className="m-3">Liste de tâches</h1>
        <ul className="list-group m-3">
            {
                tasks.map((task) => <Todo task={task} key={task.id} />)
            }
        </ul>
    </>
)

export default TodoList