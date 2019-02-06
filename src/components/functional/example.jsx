import React, { useState, memo } from "react";

const Example = memo((props) => {
  const [count, setCount] = useState(0);
  console.log("render");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
});

export default Example;
