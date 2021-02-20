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

  return (
    <>
      <Container maxWidth="sm">
        <PlayerList players={players} />
        <PlayerForm addPlayer={addPlayer} />
      </Container>
    </>
  );
}

export default App;
