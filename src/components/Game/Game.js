import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("running");
  const [isFormDisabled, setIsFormDisabled] = React.useState(false);

  function handleSubmitGuess(tentativeGuess) {
    const newGuesses = [...guesses, tentativeGuess];
    console.log(newGuesses.length);
    setGuesses(newGuesses);

    if (tentativeGuess === answer) {
      setStatus("won");
      setIsFormDisabled(true);
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
      setIsFormDisabled(true);
    } else {
      setStatus("running");
    }
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      {/* <Banner status={status} numGuesses={guesses.length} answer={answer} /> */}
      {status !== "running" && <Banner status={status} numGuesses={guesses.length}/>}
      <GuessInput
        guesses={guesses}
        handleSubmitGuess={handleSubmitGuess}
        isFormDisabled={isFormDisabled}
      />
    </>
  );
}

export default Game;
