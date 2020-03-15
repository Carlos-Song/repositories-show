import React from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  input: {
    width: 500,
    marginTop: 30,
    marginBottom: 30
  }
}));

function SearchInput(props: any) {
  const { handleChange, value } = props;
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      id="filled-multiline-flexible"
      label="Your Token"
      multiline
      rows="4"
      value={value}
      onChange={handleChange}
      variant="filled"
    />
  );
}

export default SearchInput;
