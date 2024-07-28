import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function ToDoList() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      title: text,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function handleDelete(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <>
      <h1>ToDoList</h1>
      <TaskForm
        handleChange={handleChange}
        handleClick={handleClick}
        text={text}
      />
      <TaskList tasks={tasks} handleDelete={handleDelete} />
    </>
  );
}

export default ToDoList;
