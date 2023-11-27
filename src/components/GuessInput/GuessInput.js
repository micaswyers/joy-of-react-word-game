import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter your guess:</label>
      <input
        type="text"
        id="guess-input"
        required
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
