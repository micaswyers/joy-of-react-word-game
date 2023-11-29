import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return (<span className={className}>{letter}</span>);
}

function Guess({ answer, word }) {
  const checkedWordObj = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((idx) => {
        return (
          <Cell
            key={crypto.randomUUID()}
            letter={checkedWordObj ? checkedWordObj[idx].letter : undefined}
            status={checkedWordObj ? checkedWordObj[idx].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
