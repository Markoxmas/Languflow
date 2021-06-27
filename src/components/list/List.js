import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { onLoadTableLexemes } from "../../redux/actions/lexemeTableActions";
import { onInitEditList, onDeleteList } from "../../redux/actions/listActions";

const useStyles = makeStyles({
  root: {
    display: "block",
    margin: "5px",
    textAlign: "center",
  },
  language: {
    fontSize: 14,
  },
  buttons: {
    justifyContent: "center",
  },
});

export default function List({ list }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.language}
          color="textSecondary"
          gutterBottom
        >
          {list.native} -> {list.foreign}
        </Typography>
        <Typography variant="h5" component="h2">
          {list.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Number of items: {list.lexemes.length}
        </Typography>
        <Typography variant="body2" component="p">
          {list.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button onClick={() => dispatch(onLoadTableLexemes(list))} size="small">
          Details
        </Button>
        <Button size="small" onClick={() => dispatch(onInitEditList(list))}>
          Edit
        </Button>
        <Button size="small" onClick={() => dispatch(onDeleteList(list))}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
