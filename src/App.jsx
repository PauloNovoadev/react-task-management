import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Tasklist from './Components/Tasklist/tasklist.jsx'

let idAcc = 0;
const generateId = () => {
  return idAcc++;
};

export default function App() {


  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        }
        return task;
      });
    });
  };

  const onDeleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Tasklist
          title="Pendente"
          taskState= "Pendente"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={onDeleteTask}
        />
        <Tasklist
          title="Executando"
          taskState= "Executando"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Executando")}
          onTaskUpdate={updateTask}
          onDeleteTask={onDeleteTask}
        />
        <Tasklist
          title="Finalizado"
          taskState= "Finalizado"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Finalizado")}
          onTaskUpdate={updateTask}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}