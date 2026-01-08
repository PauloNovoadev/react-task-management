import React from "react";
import './tasklist.css';
import PropTypes from "prop-types";
import Taskitem from "../Taskitem/Taskitem";
import plusicon from '../../img/plus-icon.svg';

export default function Tasklist({ 
  title,
  onAddTask,
  taskState,
  tasks, 
  onTaskUpdate, 
  onDeleteTask }) 
   
   {const addTask = () => {
    onAddTask("Nova Tarefa", taskState);    
    };

  return (
    <div className="tasklist">
    <div className="title">{title}</div>
    <div className="content">

        {tasks.map((task) => {
            return <Taskitem 
            key={task.id} 
            id={task.id} 
            title={task.title} 
            taskState={task.state}
            onTaskUpdate={onTaskUpdate}
            onDeleteTask={onDeleteTask}/>
        })}

     </div>

    <div className="content">
     {tasks.length === 0 && <div className= "empty-list">Lista em branco</div>}
     <button onClick={addTask} className="btn">
      <img src={plusicon} alt="Adicionar Tarefa"></img>
      Adicionar Tarefa</button>
  </div>
  </div>
  )}

Tasklist.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  taskState: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};