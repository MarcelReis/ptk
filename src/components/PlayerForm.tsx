import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { getRandomColor } from "../libs/randomColor";

type Player = {
  name: string;
  color: string;
};

type PropsType = {
  addPlayer: (player: Player) => void;
};

function PlayerForm(props: PropsType) {
  const [player, setPlayer] = useState<Player>({
    name: "",
    color: getRandomColor(),
  });

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addPlayer(player);
    setPlayer({ name: "", color: getRandomColor() });
  };

  return (
    <form onSubmit={submit}>
      <TextField
        required
        id="player-name"
        label="Nome"
        fullWidth
        value={player.name}
        onChange={({ target: { value } }) =>
          setPlayer((player) => ({ ...player, name: value }))
        }
      />

      <Box paddingTop={2}>
        <Button variant="contained" color="primary" fullWidth type="submit">
          Adicionar
        </Button>
      </Box>
    </form>
  );
}

export default PlayerForm;
