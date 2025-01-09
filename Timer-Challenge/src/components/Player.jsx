import { useState,useRef } from "react";

export default function Player() {
  const inputRef = useRef();
  const [name, setName] = useState(null);
  
  function setNameHandler() {
    setName(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={setNameHandler}>Set Name</button>
      </p>
    </section>
  );
}
