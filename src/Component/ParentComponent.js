import ChildComponent from "./ChildComponent";

// const message = "Hello from parent";
// const count = 5;

function ParentComponent() {
  return (
    <>
      <h1> Parent Component</h1>
      <ChildComponent message="Hello from Parent" count={5} />
      {/* <ChildComponent test={message} value={count} /> */}
    </>
  );
}

export default ParentComponent;
