import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
      console.log(guess);
      setGuess("");
    }}>
      <label htmlFor="guess-input">Enter your guess:</label>
      <input
        type="text"
        id="guess-input"
        pattern="[A-Z]{5,5}"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
