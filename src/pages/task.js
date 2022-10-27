import { useState } from "react";

const Task = (props) => {
  const { label, removeTask } = props;
  const [done, setDone] = useState(false);
  return (
    <div>
      <p>{label}</p>
      <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
      <button onClick={() => removeTask(label)}>X</button>
    </div>
  );
}

export default Task;