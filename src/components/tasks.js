
import React, { useEffect, useState } from 'react';
function Tasks({ taskInput }) {
  const [taskList, setTasks] = useState([taskInput])


  useEffect(() => {
    setTasks((prevTasks) => [...prevTasks, taskInput])
  }
    , [taskInput])


  const deleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete))
  }
  const [checked, setCheck] = useState(Array(taskList.length).fill(false))
  const handleCheck = (index) => {
    setCheck((prevCheck) => {
      const updatedCheck = [...prevCheck];
      updatedCheck[index] = !updatedCheck[index]; // huh? Toggle the value at the specified index
      return updatedCheck;
    });
  };




  return (

    <div>

      {taskList.map((task, index) => (
        <div className={`${task ? 'task_container' : ''}`} key={index}>
          <div className={`${checked[index] ? 'checked' : 'unchecked'} ${task ? 'checkbox' : ''}`} onClick={() => handleCheck(index)}>
          </div>
          <h2 className={`${task ? 'newtask' : ''}`} id="newTask" >{task}</h2>
          {task && (
            <button className='button' onClick={() => deleteTask(task)}>
              delete
            </button>
          )}
        </div>
      )
      )}

    </div>

  )

}
export default Tasks