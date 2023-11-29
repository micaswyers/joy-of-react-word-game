import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess" key={crypto.randomUUID()}>
      {range(5).map((idx) => {
        return (
          <span className="cell" key={crypto.randomUUID()}>
            {word[idx]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
