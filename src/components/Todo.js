import React from "react";




function Todo({task, toggleComplete, deleteTodo, editTodo}){




    return(
        <div>
            <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div>
               <button onClick={()=>editTodo(task.id)}>Edit</button>
               <button onClick={()=>deleteTodo(task.id)}>Delete</button>
         
            </div>
        </div>
    )
}

export default Todo;