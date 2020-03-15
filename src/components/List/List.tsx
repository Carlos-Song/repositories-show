import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import MyCard from "../MyCard/MyCard";

const useStyles = makeStyles(() => ({
  list: {
    flexGrow: 1
  }
}));

interface IRepositoryNode {
  name: string;
  nameWithOwner: string;
  description: string;
  url: string;
}

const List = (props: any) => {
  const classes = useStyles();
  let { data } = props;

  return (
    <Grid container className={classes.list} justify="center">
      <Grid item lg={12} sm={12}>
        <Grid container justify="center" spacing={6}>
          {data
            ? data.viewer.repositories.nodes.map(
                (item: IRepositoryNode, index: number) => (
                  <MyCard key={index} data={item} />
                )
              )
            : ""}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default List;
