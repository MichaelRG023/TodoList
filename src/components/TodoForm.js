import React, { useState } from "react";


function TodoForm ({addTodo}){
    const [value, setValue] = useState("")
// //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

// For example, this can be useful when:

// Clicking on a "Submit" button, prevent it from submitting a form
// Clicking on a link, prevent the link from following the URL
//preventing it from reloading page 
    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value)
        setValue("")
        
    }


 return(
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="what are the task today?" value={value} onChange={(e)=> setValue(e.target.value)}></input>
        <button type="submit" >Add Task</button>
    </form>
    
    
    
    
    </>
 )

}

export default TodoForm;