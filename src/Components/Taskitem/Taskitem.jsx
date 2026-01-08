import { useState } from "react";
import "./Taskitem.css";
import PropTypes from "prop-types";

export default function Taskitem({ id, title, taskState, onTaskUpdate, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    setEditableTitle(event.target.value);
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, editableTitle, event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      } else {
        onTaskUpdate(id, editableTitle, taskState);
      }
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="task-item">
      <input
        type="text"
        value={editableTitle}
        onChange={onTitleChange}
        onKeyPress={onKeyPress}
        autoFocus
      />
      </div>
    );
  }

  return (
    <div className="task-item">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsEditing(true);
        }}
      >
        {editableTitle}

        <select
          value={taskState}
          onClick={(e) => e.stopPropagation()}
          onChange={onTaskStateChange}
        >
          <option value="Pendente">Pendente</option>
          <option value="Executando">Executando</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>
    </div>
  );
}

Taskitem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};