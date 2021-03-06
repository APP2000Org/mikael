import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const onMouseOut = event => {
  const el = event.target;
  el.style.color = "black";
};
export const onMouseOver = event => {
  const el = event.target;
  el.style.color = "blue";
};

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Brukernavn:" />
      <TextField id="standard-basic" label="Passord:" />
    </form>
  );
}
