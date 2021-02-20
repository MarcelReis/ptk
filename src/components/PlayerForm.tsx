import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

type Player = {
  name: string;
};

type PropsType = {
  addPlayer: (player: Player) => void;
};

export const PlayerForm = (props: PropsType) => {
  const [player, setPlayer] = useState<Player>({ name: "" });

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addPlayer(player);
    setPlayer({ name: "" });
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
};
