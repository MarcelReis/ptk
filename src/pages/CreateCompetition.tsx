import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";

import { Player } from "../App";
import PlayerForm from "../components/PlayerForm";
import PlayerList from "../components/PlayerList";

type PropsType = {
  addPlayer: (player: Player) => void;
  removePlayer: (playerName: string) => void;
  createContest: () => void;
  players: Player[];
};

function CreateCompetition(props: PropsType) {
  return (
    <Container maxWidth="sm">
      <PlayerForm addPlayer={props.addPlayer} />
      <PlayerList players={props.players} removePlayer={props.removePlayer} />

      <Box clone paddingBottom={2}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={props.createContest}
        >
          Criar competição
        </Button>
      </Box>
    </Container>
  );
}

export default CreateCompetition;
