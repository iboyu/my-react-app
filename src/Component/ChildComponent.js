function ChildComponent(props) {
  // function ChildComponent({message, count}) {
  return (
    <>
      <h2>Child Component</h2>
      <p>{props.message}</p>
      <p>{props.count}</p>
    </>
  );
}

export default ChildComponent;
