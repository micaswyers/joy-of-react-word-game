import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ answer, guesses }) {
  return (
    <div className="guess-results">
      {
        range(0,NUM_OF_GUESSES_ALLOWED).map((num) => {
          return <Guess answer={answer} word={guesses[num]} key={crypto.randomUUID()}></Guess>
        })
      }
    </div>
  );
}

export default GuessResults;
