import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, word }) {
  const checkedWordObj = checkGuess(word, answer);

  return (
    <p className="guess" key={crypto.randomUUID()}>
      {range(5).map((idx) => {
        return (
          <span className={`cell ${checkedWordObj ? checkedWordObj[idx].status: ""}`} key={crypto.randomUUID()}>
            {word ? checkedWordObj[idx].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
