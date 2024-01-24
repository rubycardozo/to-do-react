import Input from "./input"
import Tasks from "./tasks"
import React from 'react';
import { useState } from "react";



const List = () =>{

    const[task, addTask] = useState("")

    const handleTaskInput = (newTask)=> {
        addTask(newTask)
    
    }
    return (

        <div>
            <h1>To-Do List</h1>
            <Input onInput = {handleTaskInput}/>
            <Tasks taskInput={task} />

        </div>

    )
    
}
export default List