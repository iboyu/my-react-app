function TaskForm(props) {
  return (
    <>
      <form>
        <input
          placeholder="Enter a task..."
          value={props.text}
          onChange={props.handleChange}
        />
        <button onClick={props.handleClick}>Add a Task</button>
      </form>
    </>
  );
}

export default TaskForm;
