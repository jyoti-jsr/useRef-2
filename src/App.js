import "./styles.css";
import { useRef, useEffect } from "react";
import Counter from "./components/Counter";
import LoggingButtonClick from "./components/LoggingButtonClick";

export default function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <>
        <p>
          useful application of the useRef() hook is to access DOM elements.
          This is performed in 3 steps:
        </p>
        <ol>
          <li>
            Define the reference to access the element const elementRef =
            useRef()
          </li>
          <li>
            Assign the reference to ref attribute of the element &lt;div ref =
            elementRef &gt; &lt;/div&gt;
          </li>
          <li>After mounting, elementRef.current points to the DOM element.</li>
        </ol>
      </>
      <label>Name</label> <input type="text" ref={inputRef} />
      <Counter />
      <LoggingButtonClick />
    </div>
  );
}
