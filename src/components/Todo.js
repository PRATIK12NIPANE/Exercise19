import React, { useState } from "react";

const TodoList = () => {
    const [task, setTask] = useState(""); // State for the input task
    const [taskArray, setTaskArray] = useState([]); // State for the array of tasks

    // Function to handle input change
    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    // Function to handle adding a task to the list
    const handleAddTask = () => {
        if (task.trim() !== "") { // Ensure task is not empty
            setTaskArray([...taskArray, { id: Date.now(), text: task }]); // Add new task to taskArray with unique ID
            setTask(""); // Clear input field after adding task
        }
    };

    // Function to handle deleting a task
    const handleDeleteTask = (taskId) => {
        const updatedTasks = taskArray.filter(task => task.id !== taskId);
        setTaskArray(updatedTasks);
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Todo List</h3>

                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter task"
                                    value={task}
                                    onChange={handleInputChange}
                                />
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={handleAddTask}
                                >
                                    Add Task
                                </button>
                            </div>

                            <ul className="list-group">
                                {taskArray.map((task) => (
                                    <li className="list-group-item d-flex justify-content-between align-items-center" key={task.id}>
                                        {task.text}
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDeleteTask(task.id)}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
