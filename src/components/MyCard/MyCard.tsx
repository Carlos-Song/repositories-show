import React from "react";
import {
  Card,
  Button,
  makeStyles,
  Typography,
  CardActions,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 250,
    margin: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  button: {
    justifyContent: "center"
  }
});

interface IRepositoryNode {
  name: string;
  nameWithOwner: string;
  description: string;
  url: string;
}

interface ICardProp {
  data: IRepositoryNode;
}

const MyCard = (props: ICardProp) => {
  const classes = useStyles();
  const { data } = props;
  const { name, nameWithOwner, description, url } = data;

  const handleClick = () => {
    window.location.href = url;
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h4" gutterBottom>
          {name}
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          component="h4"
          noWrap={false}
        >
          {nameWithOwner}
        </Typography>

        <Typography variant="body2" component="p" paragraph={true}>
          {description}
        </Typography>
      </CardContent>

      <CardActions className={classes.button}>
        <Button color="primary" onClick={handleClick} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;
