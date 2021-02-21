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

      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={props.createContest}
      >
        Criar competicao
      </Button>
    </Container>
  );
}

export default CreateCompetition;
