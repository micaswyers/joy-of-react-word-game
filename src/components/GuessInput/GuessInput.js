import React from "react";

function GuessInput({isFormDisabled, handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmitGuess(tentativeGuess);
        setTentativeGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter your guess:</label>
      <input
        disabled={isFormDisabled}
        type="text"
        id="guess-input"
        required
        pattern="[a-zA-Z]{5}"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
