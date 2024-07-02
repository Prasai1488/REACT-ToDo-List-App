import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Eat dinner",
    "Take a shower",
    "Go to bed",
  ]);
  const [newTask, setNewTask] = useState([]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {};

  const deleteTask = (index) => {};

  const moveTaskUp = (index) => {};

  const moveTaskDown = (index) => {};

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a Task...."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li ley={index}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={()=>deleteTask(index)}>
                Delete
              </button>
              <button className="move-button" onClick={()=>moveTaskUp(index)}>
                UP
              </button>
              <button className="move-button" onClick={()=>moveTaskDown(index)}>
                Down
              </button>

            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
