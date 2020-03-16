import React, { memo, useEffect } from "react";
import { Grid, Button, Container, Box, makeStyles } from "@material-ui/core";
// import SearchInput from "./SearchInput/SearchInput";
import Wrapper from "./Wrapper/Wrapper";
import { StateCan } from "../StateContainer/StateContainer";
import {  getAuthCode, getToken } from '../utils/authToken'

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
  btn_outer: {
    margin: 10
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
  },
  btn_container: {
    margin: 10
  }
}));




/**
 * avoid input token rendering Wrapper
 */
const MemoWrapper = memo(function MemoWrapper(props: any) {
  return <Wrapper token={props.token} /> ;
});

const App = (props: any) => {
  const classes = useStyles();
  const state = StateCan.useContainer();
  const { token, setToken, isFeching, handleClick } = state;
  const authCode = getAuthCode();
 
  useEffect(() => {
    let myToken = getToken(authCode);
    console.log(authCode);
  }, [])

  

  return (
    <Container className={`App ${classes.root}`} component="div">
      <div className={classes.layout}>
        <h1>Get Access Your Repositories By</h1>
        <h1>Input Your Github Token</h1>
          <Button
            component="div"
            className={classes.btn_outer}
            onClick={handleClick}
            variant="contained"
            color="primary"
            disableElevation
            disabled={isFeching}
            >
            Start
          </Button>
        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
{/* 
        <Grid container justify="center">
          <SearchInput handleChange={handleChange} value={value} />
        </Grid> */}

        { token !== "" ? <MemoWrapper token={token}/> : ""}
      </div>
    </Container>
  );
};

export default App;
