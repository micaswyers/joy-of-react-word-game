import React from "react";
import { range } from "../../utils";

function Guess() {
  return (
    <div className="guess-results">
      {
        range(6).map((num) => {
          return <p className="guess" key={crypto.randomUUID}>
            {
              range(5).map((idx) => {
                return <span className="cell"></span>;
              })
            }
          </p>
        })
      }
    </div>
    // <div className="guess-results">
    //   <p className="guess">
    //     <span className="cell">H</span>
    //     <span className="cell">E</span>
    //     <span className="cell">L</span>
    //     <span className="cell">L</span>
    //     <span className="cell">O</span>
    //   </p>
    //   <p className="guess">
    //     <span className="cell">T</span>
    //     <span className="cell">H</span>
    //     <span className="cell">E</span>
    //     <span className="cell">R</span>
    //     <span className="cell">E</span>
    //   </p>
    //   <p className="guess">
    //     <span className="cell">W</span>
    //     <span className="cell">O</span>
    //     <span className="cell">R</span>
    //     <span className="cell">L</span>
    //     <span className="cell">D</span>
    //   </p>
    //   <p className="guess">
    //     <span className="cell"></span>
    //     <span className="cell"></span>
    //     <span className="cell"></span>
    //     <span className="cell"></span>
    //     <span className="cell"></span>
    //   </p>
    //   <p className="guess">
    //     <span className="cell"></span>
    //     <span className="cell"></span>
    //     <span className="cell"></span>
    //     <span className="cell"></span>
    //     <span className="cell"></span>
    //   </p>
    // </div>
  );
}

export default Guess;
