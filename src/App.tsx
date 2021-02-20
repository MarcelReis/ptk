import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";

import { PlayerForm } from "./components/PlayerForm";

type Player = {
  name: string;
};

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = (player: Player) => {
    setPlayers((players) => [...players, player]);
  };

  return (
    <Container maxWidth="sm">
      <ul>
        {players.map((player) => (
          <li key={player.name}>{player.name}</li>
        ))}
      </ul>

      <Box clone>
        <PlayerForm addPlayer={addPlayer} />
      </Box>
    </Container>
  );
}

export default App;
