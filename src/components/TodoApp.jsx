import { useState } from "react";

function TodoApp() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState(["Išmokti programuoti", "gauti programuotojo darbą", "nusipirkti jachtą"]);

    const handleInputChanges = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(tasks => [...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const moveUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    };

    const moveDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChanges}
                />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>❌</button>
                        <button className="move-up" onClick={() => moveUp(index)}>⬆️</button>
                        <button className="move-down" onClick={() => moveDown(index)}>⬇️</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoApp;
