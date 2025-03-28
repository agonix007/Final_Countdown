import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setSubmitted(false);   
    setEnteredPlayerName(event.target.value);
  };

  const handleClick = () => {
    setSubmitted(true);
  };

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
