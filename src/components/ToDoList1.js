import React, { useState } from 'react';

const ToDoList1 = () => {
  // State variables to manage tasks, new task description, new task date, and hover state
  const [tasks, setTasks] = useState([]); // Array to store tasks
  const [newTask, setNewTask] = useState(''); // State for new task description
  const [newDate, setNewDate] = useState(''); // State for new task date
  const [hover, setHover] = useState(false); // State for hover effect on Add Task button

  // Event handler for input change to update new task description
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Event handler for input change to update new task date
  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  // Event handler to add a new task
  const handleAddTask = () => {
    if (newTask.trim() !== '') { // Check if new task description is not empty
      const taskObject = { // Create a task object
        description: newTask,
        plannedDate: newDate,
        completed: false,
      };
      setTasks([...tasks, taskObject]); // Add the new task to the tasks array
      setNewTask(''); // Clear the new task description input field
      setNewDate(''); // Clear the new task date input field
    }
  };

  // Event handler to toggle the completion status of a task
  const handleCheck = (index) => {
    const updatedTasks = [...tasks]; // Create a copy of the tasks array
    updatedTasks[index].completed = !updatedTasks[index].completed; // Toggle completion status of the task
    setTasks(updatedTasks); // Update the tasks array
  };

  // Event handler to delete a task
  const handleDelete = (index) => {
    const updatedTasks = [...tasks]; // Create a copy of the tasks array
    updatedTasks.splice(index, 1); // Remove the task at the specified index
    setTasks(updatedTasks); // Update the tasks array
  };

  // Event handler to set hover state to true
  const handleMouseEnter = () => {
    setHover(true);
  };

  // Event handler to set hover state to false
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        {/* Input field for task description */}
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter task description"
        />
        {/* Input field for task date */}
        <input
          type="date"
          value={newDate}
          onChange={handleDateChange}
          placeholder="Enter planned completion date"
        />
        {/* Button to add a new task */}
        <button
          onClick={handleAddTask}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: hover ? 'lightgreen' : 'lightblue' }}
        >
          Add Task
        </button>
      </div>
      {/* List of tasks */}
      <ul>
        {/* Mapping over tasks to display each task */}
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none', border: task.plannedDate && new Date(task.plannedDate) < new Date() ? '2px solid yellow' : 'none' }}>
            {/* Task description */}
            {task.description}
            {/* Display message if task is overdue */}
            {task.plannedDate && new Date(task.plannedDate) < new Date() && <div>Due day is passed</div>}
            {/* Checkbox to toggle task completion */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheck(index)}
            />
            {/* Button to delete task */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList1;
