import React from "react";

function Banner({ status, numGuesses, answer }) {
  let result = undefined;
  let resultString = undefined;
  if (status === "won") {
    return (
      <div className={"happy banner"}>
        <p>
          <strong>Congratulations!</strong> You got it in <strong>{numGuesses}</strong> guesses.
        </p>
      </div>
    );
  } else if (status === "lost") {
    return <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>;
  }

  return (
    <div className={`${result} banner`}>
      <p> {resultString}</p>
    </div>
  );
}

export default Banner;
