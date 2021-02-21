import React from "react";
import { Redirect } from "react-router-dom";
import { ContestState } from "../App";

type PropsType = {
  contest: ContestState;
};

function Competition(props: PropsType) {
  if (!props.contest.teams.length) {
    return <Redirect to="/criar" />;
  }

  return (
    <div>
      <ul>
        {props.contest.teams.map(([player1, player2], index) => (
          <li key={index}>
            {player1.name} - {player2.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Competition;
