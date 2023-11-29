import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // return <>Put a game here!</>;
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const newGuesses = [...guesses, tentativeGuess];
    setGuesses(newGuesses);
  }
  return (
    <>
      <Guess />
      <GuessResults guesses={guesses} />
      <GuessInput guesses={guesses} handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
