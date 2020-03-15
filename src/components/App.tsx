import React, { memo } from "react";
import { Grid, Button, Container, makeStyles } from "@material-ui/core";
import SearchInput from "./SearchInput/SearchInput";
import Wrapper from "./Wrapper/Wrapper";
import { StateCan } from "../StateContainer/StateContainer";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e3e3e3",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center"
  },
  list: {
    flexGrow: 1
  },

  input: {
    width: 500,
    marginTop: 30,
    marginBottom: 30
  },
  layout: {
    textAlign: "center",
    width: "80vw",
    height: "100%",
    paddingTop: 50,
    paddingBottom: 50
  }
}));

/**
 * avoid input token rendering Wrapper
 */
const MemoWrapper = memo(function MemoWrapper(props: any) {
  console.log(props.token);
  return <Wrapper token={props.token} /> ;
});

const App = () => {
  const classes = useStyles();
  const state = StateCan.useContainer();

  const { value, token, isFeching, handleChange, handleClick } = state;

  return (
    <Container className={`App ${classes.root}`} component="div">
      <div className={classes.layout}>
        <h1>Get Access Your Repositories By</h1>
        <h1>Input Your Github Token</h1>
        <Button
          component="button"
          onClick={handleClick}
          variant="contained"
          color="primary"
          disableElevation
          disabled={isFeching}
        >
          Start
        </Button>

        <Grid container justify="center">
          <SearchInput handleChange={handleChange} value={value} />
        </Grid>

        <MemoWrapper token={token}/>
      </div>
    </Container>
  );
};

export default App;
