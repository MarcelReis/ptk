import React, { useState } from "react";

import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import shuffle from "./libs/shuffle";
import Competition from "./pages/Competition";
import CreateCompetition from "./pages/CreateCompetition";

export type Player = {
  name: string;
  color: string;
};

type Team = Player[];

export type ContestState = {
  teams: Team[];
};

function App() {
  const history = useHistory();
  const [players, setPlayers] = useState<Player[]>([]);
  const [contest, setContest] = useState<ContestState>({ teams: [] });

  const addPlayer = (player: Player) => {
    setPlayers((players) => [...players, player]);
  };

  const removePlayer = (playerName: string) => {
    setPlayers((players) =>
      players.filter((player) => player.name !== playerName)
    );
  };

  const createContest = () => {
    const shuffledPlayers = shuffle([...players]);

    const newContest = shuffledPlayers.reduce(
      (contest, player, index) => {
        const teamIndex = Math.floor(index / 2);

        contest.teams[teamIndex] = [
          ...(contest.teams[teamIndex] ?? []),
          player,
        ];

        return contest;
      },
      { ...contest }
    );

    setContest(newContest);
    history.push("/competicao");
  };

  return (
    <Switch>
      <Route path="/criar" exact>
        <CreateCompetition
          addPlayer={addPlayer}
          removePlayer={removePlayer}
          createContest={createContest}
          players={players}
        />
      </Route>
      <Route path="/competicao" exact>
        <Competition contest={contest} />
      </Route>
      <Redirect to="/criar" />
    </Switch>
  );
}

export default App;
