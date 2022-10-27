import { useState } from "react";
import Task from "./task";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
  
  const removeTask = (label) => {
    setTasks(tasks.filter(task => task.label !== label))
  }

  return (
    <div>
      <input type="text" value={inputTask} onChange={event => setInputTask(event.target.value)} />
      <button 
        onClick={() => { 
          setTasks([...tasks, { label: inputTask }]) 
          setInputTask('')
        }} 
      >
          Criar
      </button>
      <div>
        {tasks.map((task) => (
          <Task label={task.label} removeTask={removeTask}/>
        ))}
      </div>
    </div>
  );
};

export default ToDo;