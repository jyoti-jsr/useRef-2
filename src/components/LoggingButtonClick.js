import { useRef } from "react";
const LoggingButtonClick = () => {
  const countRef = useRef(0);
  const handleClick = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  // Updating the reference value countRef.current++ doesn't trigger
  // component re-rendering.
  return (
    <div>
      <div>{countRef.current}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
export default LoggingButtonClick;
