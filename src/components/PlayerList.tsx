import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import FaceIcon from "@material-ui/icons/Face";
import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

type Player = {
  name: string;
  color: string;
};

type PropsType = {
  players: Player[];
  removePlayer: (playerName: string) => void;
};

function PlayerList(props: PropsType) {
  return (
    <Box pt={3}>
      <Typography variant="h6">Jogadores ({props.players.length})</Typography>
      <List>
        {props.players.map((player) => (
          <ListItem key={player.name} disableGutters>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: player.color }}>
                <FaceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={player.name} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => props.removePlayer(player.name)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PlayerList;
