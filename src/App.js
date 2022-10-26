import { useState, useEffect } from "react";

import Header from "./Components/Header/Header";
import AddTask from "./Components/Tasks/AddTask";
import Tasks from "./Components/Tasks/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const tasksFromServer = await fetchTask();
      setTasks(tasksFromServer);
    };

    getTask();
  }, []);

  // Fetch Tasks
  const fetchTask = async () => {
    const res = await fetch("http:// localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks Avaiable"
      )}
    </div>
  );
}

export default App;
