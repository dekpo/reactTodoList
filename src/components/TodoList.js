import React from 'react';
import Todo from './Todo';

const TodoList = ({tasks, match}) => {
    let filteredTasks
    switch (match.params.filter){
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed)
        break;
        default:
            filteredTasks = tasks
    }
    if (filteredTasks.length === 0){
        return(
            <>
            <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                <li className="list-group-item d-flex align-tiems-center">Aucune tâche terminée</li>
                </ul>
            </>
        )
    } else {
        return(
            <>
            <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {
                        filteredTasks.map((task) => <Todo task={task} key={task.id} />)
                    }
                </ul>
            </>
        )
    }
    
}

export default TodoList