import Container from "@material-ui/core/Container";
import React, { useState } from "react";

import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";

type Player = {
  name: string;
  color: string;
};

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = (player: Player) => {
    setPlayers((players) => [...players, player]);
  };

  const removePlayer = (playerName: string) => {
    setPlayers((players) =>
      players.filter((player) => player.name !== playerName)
    );
  };

  return (
    <>
      <Container maxWidth="sm">
        <PlayerList players={players} removePlayer={removePlayer} />
        <PlayerForm addPlayer={addPlayer} />
      </Container>
    </>
  );
}

export default App;
