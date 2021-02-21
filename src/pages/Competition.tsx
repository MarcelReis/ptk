import React from "react";
import { Redirect } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import FaceIcon from "@material-ui/icons/Face";
import SwapIcon from "@material-ui/icons/SwapHoriz";
import IconButton from "@material-ui/core/IconButton";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

import { ContestState } from "../App";
import { getRandomColor } from "../libs/randomColor";

type PropsType = {
  contest: ContestState;
};

function Competition(props: PropsType) {
  if (!props.contest.teams.length) {
    return <Redirect to="/criar" />;
  }

  return (
    <div>
      {props.contest.teams.map(([player1, player2], index) => (
        <Box component={Paper} key={index} margin={2}>
          <List>
            <ListItem key={player1.name}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: player1.color }}>
                  <FaceIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={player1.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => null}>
                  <SwapIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <Divider />

            <ListItem key={player2?.name ?? index}>
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: player2?.color ?? getRandomColor(),
                  }}
                >
                  <FaceIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={player2?.name ?? "[VAGA]"} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => null}>
                  <SwapIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
      ))}
    </div>
  );
}

export default Competition;
