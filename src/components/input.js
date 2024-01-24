import './todo.css'
import React, { useEffect, useState } from 'react';

function Input({onInput}){

    const handleValue=(event)=>{
            event.preventDefault();
            var input = document.getElementById("input")
            var newInput = input.value
            onInput(newInput)
            input.value = ""
    }

    return (

        <div>
            <form id="input_section" onSubmit={handleValue}>
                <div className='task_container'>
                    <div className = "checkbox"></div>
                    <textarea className="input" id="input" placeholder="Buy groceries..." ></textarea>
                    <button className="button" type="submit"> add
                    </button>


                </div>
                
            </form>
        </div>

    )
    
}
export default Input